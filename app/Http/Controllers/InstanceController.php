<?php

namespace App\Http\Controllers;

use App\Models\Instance;
use App\Http\Requests\StoreInstanceRequest;
use App\Http\Requests\UpdateInstanceRequest;
use App\Models\Exam;
use App\Models\InstanceAnswer;
use App\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InstanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $instances = Instance::where([
            'exam_id' =>  $request->exam_id
        ]);
        

        if ($request->all) {
            $instances =  $instances->paginate(15);
        } else {
            $instances =  $instances->paginate($instances->count());
        }

        foreach ($instances as $instance){
            $instance->score = 0;
            $instance->total = $instance->exam->questions->count();

            foreach ($instance->instanceAnswers as $instanceAnswer) {
                $instance->score += $instanceAnswer->answer->correct;
            }
        }

        $paginator = $instances;
        $exam = Exam::findOrFail($request->exam_id);

        return Inertia::render('Exams/Instances', compact('paginator', 'exam'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInstanceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Instance $instance, Request $request, Exam $exam)
    {
        $user_id = $request->user_id;
        $user = User::find($user_id);

        $exam = $exam->with([
            'examType',
            'instances' => function (Builder $query) use ($user_id) {
                $query->where('user_id', '=', $user_id)->orderBy('created_at', 'desc');
            },
            'questions' => [
                'answers'
            ],
            'categories',
            'team' => [
                'owner'
            ],
        ])->find($request->exam_id);

        $instanceAnswers = InstanceAnswer::with('answer', 'question.category')->where('instance_id', '=', $exam->instances->first()->id ?? 0)->get();
        
        
        $radarMap = $instanceAnswers->groupBy([
            'question.category.name',
            'answer.correct',
        ]);

        $score = 0;

        foreach ($instanceAnswers as $instanceAnswer) {
            $score += $instanceAnswer->answer->correct;
        }

        foreach ($exam->instances as $instance){
            $instance->score = 0;

            foreach ($instance->instanceAnswers as $instanceAnswer) {
                $instance->score += $instanceAnswer->answer->correct;
            }
        }

        return Inertia::render('Exams/Submission', [
            'exam' => $exam,
            'score' => $exam->instances->first()->score,
            'total' => $exam->questions->count(),
            'radarMap' => $radarMap,
            'user' => $user,
        ]);
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Instance $instance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInstanceRequest $request, Instance $instance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Instance $instance)
    {
        //
    }
}
