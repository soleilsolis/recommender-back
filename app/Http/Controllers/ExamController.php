<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Http\Requests\StoreExamRequest;
use App\Http\Requests\UpdateExamRequest;
use App\Models\Answer;
use App\Models\ExamType;
use App\Models\Instance;
use App\Models\InstanceAnswer;
use App\Models\Question;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ExamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $paginator = Exam::with([
            'examType',
            'instances' => function (Builder $query) {
                $query->where('user_id', '=', Auth::id());
            },
        ])->where(
            'team_id',
            '=',
            $request->user()->currentTeam->id
        )->orderBy('created_at', 'desc')->paginate(15);

        foreach ($paginator as $page) {
            $page->examType = $page->examType;
        }
        return Inertia::render('Exams/Index', compact('paginator'));
    }

    public function indexStudent(Request $request)
    {
        $paginator = Exam::with(['examType', 'instances'])->where([
            [
                'team_id',
                '=',
                $request->user()->currentTeam->id
            ]
        ])->orderBy('created_at', 'desc')->paginate(15);

        foreach ($paginator as $page) {
            $page->examType = $page->examType;
            $page->instances = $page->instances;
        }
        return Inertia::render('Exams/IndexStudent', compact('paginator'));
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $examTypes = ExamType::all();
        return Inertia::render('Exams/Create', compact('examTypes'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreExamRequest $request)
    {
        $exam = Exam::create([
            'name' => $request->name,
            'exam_type_id' => $request->exam_type_id,
            'description' => $request->description,
            'attempts' => $request->attempts,
            'limit' => $request->limit,
            'expires_at' => Carbon::parse($request->date)->setTimeFromTimeString($request->time),
            'team_id' => $request->user()->currentTeam->id,
        ]);

        return to_route('exams.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Exam $exam, Request $request)
    {
        return Inertia::render('Exams/Show', [
            'exam' => $exam->with([
                'examType',
                'instances',
                'questions' => [
                    'answers'
                ],
                'categories',
                'team' => [
                    'owner'
                ],
            ])->find($request->id)
        ]);
    }

    public function showStudent(Exam $exam, Request $request)
    {
        $exam = $exam->with([
            'examType',
            'instances' => function (Builder $query) {
                $query->where('user_id', '=', Auth::id())->orderBy('created_at', 'desc');
            },
            'questions' => [
                'answers'
            ],
            'categories',
            'team' => [
                'owner'
            ],
        ])->find($request->id);

        $score = 0;
        $total = 0;

        $radarMap = $exam->instances->first() ? $this->getCategories($exam->instances->first()->instanceAnswers) : new Collection();

        foreach ($radarMap as $map) {
            $score += $map['correct'];
            $total += $map['total'];
        }

        return Inertia::render('Exams/ShowStudent', [
            'exam' => $exam,
            'score' => $score,
            'total' => $total,
            'radarMap' => $radarMap,
            'instances' => $exam->instances,
        ]);
    }

    public function take(Request $request)
    {
        $user = User::find(Auth::id());

        $exam = Exam::with([
            'instances' => function (Builder $query) {
                $query->where('user_id', '=', Auth::id());
            }
        ])->findOrFail($request->id);

        if (
            $exam->expires_at < now() ||
            !$exam->team_id == $request->user()->currentTeam->id ||
            $exam->instances->count() >= $exam->attempts ||
            $user->current_instance_id
        ) {
            return abort(403);
        }

        $instance = Instance::create([
            'exam_id' => $exam->id,
            'user_id' => $user->id,
        ]);

        $user->current_instance_id = $instance->id;
        $user->save();

        return to_route("exam.current", [
            'page' => 1
        ]);
    }

    public function current(Request $request, Exam $exam)
    {
        $user = User::find(Auth::id());
        $instance = Instance::with([
            'exam' => [
                'team' => [
                    'owner'
                ]
            ]
        ])->find($user->current_instance_id);
        $exam = $instance->exam;

        $question = Question::with(['answers' => ['question']])->where('exam_id', '=', $exam->id)->paginate(1);

        try {
            foreach ($question[0]->answers as $answer) {
                $answer->correct = null;
            }
        } catch (\Throwable $th) {
            abort(403);
        }
        return Inertia::render('Exams/CurrentExam', [
            'exam' => $exam,
            'question' => $question,
            'instance' =>  $instance,
            'instanceAnswers' => InstanceAnswer::where([
                ['question_id', '=', $question[0]->id],
                ['instance_id', '=', $user->current_instance_id]

            ])->get(),
        ]);
    }

    public static function getCategories($instanceAnswers)
    {
        $map = array();

        foreach ($instanceAnswers as $instanceAnswer) {
            $category_name = $instanceAnswer->question->category->name;

            $map[$category_name]['correct'] ??= 0;
            $map[$category_name]['total'] ??= 0;

            $map[$category_name]['total'] += $instanceAnswer->question->worth;

            if ($instanceAnswer->question->type === 'Multiple Choice') {
                $map[$category_name]['correct'] += $instanceAnswer->answer->correct ? $instanceAnswer->question->worth : 0;
            }

            if ($instanceAnswer->question->type === 'Written') {
                $map[$category_name]['correct'] += $instanceAnswer->correct ? $instanceAnswer->question->worth : 0;
            }

            if ($instanceAnswer->question->type === 'True or False') {
            }
        }

        $map = collect($map)->sortByDesc(function (array $category, string $key) {
            return $category['correct'] / $category['total'];
        });

        return $map;
    }

    public function finish(Request $request)
    {
        $user = $request->user();

        $current_instance_id = $user->current_instance_id;
        $user->current_instance_id = null;
        $user->save();

        $instance = Instance::find($current_instance_id);


        if (!$instance) {
            return to_route('exams.index.student');
        }

        foreach ($instance->exam->questions as $question) {
            $find = InstanceAnswer::where([
                ['question_id', '=', $question->id],
                ['instance_id', '=', $instance->id],
            ])->first();

            if (!$find) {
                InstanceAnswer::create([
                    'question_id' => $question->id,
                    'instance_id' => $instance->id,
                    'answer_id' => Answer::where('correct', '=', 0)->first()->id
                ]);
            }
        }

        $instanceAnswers = InstanceAnswer::where('instance_id', '=',  $instance->id)->get();

        $map = $this->getCategories($instanceAnswers);

        $recommendations = [];

        foreach ($map as $category => $score) {
            $percentage = number_format(ceil($score['correct'] / ($score['total']) * 100));

            $description = "";

            if ($percentage > 99) {
                $description = 'You have perfected {categories}!';
            }

            if ($percentage > 85 && $percentage < 99) {
                $description = 'You are a master in {categories}. Superb!';
            }

            if ($percentage > 49 && $percentage < 85) {
                $description = "The scores for subject/s {categories} are good. There's still room for improvement!";
            }

            if ($percentage < 50) {
                $description = "Please focus on these areas for next time: {categories}. You have very low mastery on them.";
                $category = "<span style='color: rgb(244 67 54)'>{$category}</span>";
            }

            $recommendations[$description][] = "<strong>{$category} ({$percentage}%)</strong>";
        }

        $finalText = "";

        foreach ($recommendations as $recommendation => $value) {
            $value[array_key_last($value)] = count($value) > 1 ? "and " . $value[array_key_last($value)] : $value[array_key_last($value)];
            $categories = implode(", ", $value);
            $finalText .= str_replace("{categories}", $categories, $recommendation . "\n\n");
        }

        $instance->finished_at = now();
        $instance->recommendation_auto = $finalText;
        $instance->save();

        return to_route('exams.show.student', ['id' => $instance->exam->id]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Exam $exam, Request $request)
    {
        $examTypes = ExamType::all();
        $exam = $exam->with([
            'examType',
            'instances',
            'questions' => [
                'answers'
            ],
            'categories',
            'team' => [
                'owner'
            ],
        ])->findOrFail($request->id);

        return Inertia::render('Exams/Edit', compact('examTypes', 'exam'));
    }

    public function stats(Request $request)
    {
        $team = $request->user()->currentTeam();
        $exam = Exam::findOrFail($request->id);

        if ($exam->team->id !== $team->id || !$request->user()->ownsTeam($team)) {
            abort(404);
        }

        $questions = $exam->questions;
        $questions->answers = $questions->answers;
        $questions->answers->instanceAnswers = $questions->answers->instanceAnswers;
        $questions->instanceAnswersCount = $questions->instanceAnswers->count();
        
        return Inertia::render('Exams/QuestionStats');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateExamRequest $request, Exam $exam)
    {
        $exam = $exam->find($request->id);
        $exam->name = $request->name;
        $exam->exam_type_id = $request->exam_type_id;
        $exam->description = $request->description;
        $exam->attempts = $request->attempts;
        $exam->limit = $request->limit;
        $exam->expires_at = Carbon::parse($request->date)->setTimeFromTimeString($request->time);
        $exam->team_id = $request->user()->currentTeam->id;
        $exam->save();

        return to_route('exam.edit', ["id" => $request->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Exam $exam)
    {
        //
    }
}
