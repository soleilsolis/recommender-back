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
            ],
            ['expires_at', '>=', now()]
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

        $instanceAnswers = InstanceAnswer::with('answer', 'question.category')->where('instance_id', '=', $exam->instances->first()->id ?? 0)->get();


        $radarMap = $instanceAnswers->groupBy([
            'question.category.name',
            'answer.correct',
        ]);

        $score = 0;

        foreach ($instanceAnswers as $instanceAnswer) {
            $score += $instanceAnswer->answer->correct;
        }

        foreach ($exam->instances as $instance) {
            $instance->score = 0;

            foreach ($instance->instanceAnswers as $instanceAnswer) {
                $instance->score += $instanceAnswer->answer->correct;
            }
        }

        return Inertia::render('Exams/ShowStudent', [
            'exam' => $exam,
            'score' => $exam->instances->first() ? $exam->instances->first()->score : 0,
            'total' => $exam->questions->count(),
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

        $question = Question::with('answers')->where('exam_id', '=', $exam->id)->paginate(1);

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

    public function finish(Request $request)
    {
        $user = $request->user();

        $current_instance_id = $user->current_instance_id;
        $user->current_instance_id = null;
        $user->save();

        $instance = Instance::find($current_instance_id);
        $instance->finished_at = now();
        $instance->save();

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
