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
use App\Http\Controllers\ExamController;

class InstanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $instances = Instance::with('user')->where([
            'exam_id' =>  $request->exam_id
        ]);


        if ($request->all) {
            $instances =  $instances->paginate(15);
        } else {
            $instances =  $instances->paginate($instances->count());
        }

        $instances = $this->calculator($instances);

        $paginator = $instances;
        $exam = Exam::findOrFail($request->exam_id);

        return Inertia::render('Exams/Instances', compact('paginator', 'exam'));
    }

    public function calculator($instances)
    {
        foreach ($instances as $instance) {
            $instance->score = 0;
            $instance->total = 0;

            foreach ($instance->exam->questions as $question) {
                $instance->total += $question->worth;
            }
            foreach ($instance->instanceAnswers as $instanceAnswer) {
                if ($instanceAnswer->question->type === 'Multiple Choice') {
                    $instance->score += $instanceAnswer->answer->correct ? $instanceAnswer->question->worth : 0;
                }

                if ($instanceAnswer->question->type === 'Written') {
                    $instance->score += $instanceAnswer->correct ? $instanceAnswer->question->worth : 0;
                }
            }
        }

        return $instances;
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
        $instance = Instance::find($request->instance_id);
        $user = $instance->user;

        $user_id = $instance->user->id;

        $exam = $instance->exam;
        $exam->team = $exam->team;
        $exam->instances = $exam->instances;
        $exam->team->owner = $exam->team->owner;

        $instanceAnswers =  $instance->instanceAnswers;
        
        foreach ($instanceAnswers as $instanceAnswer) {
            $instanceAnswer->question = $instanceAnswer->question;
        }

        $score = 0;
        $total = 0;

        $radarMap = ExamController::calculator($instanceAnswers);

        foreach ($radarMap as $map) {
            $score += $map['correct'];
            $total += $map['total'];
        }
        
        return Inertia::render('Exams/Submission', [
            'exam' => $exam,
            'score' =>  $score,
            'total' => $total,
            'radarMap' => $radarMap,
            'user' => $user,
            'instanceAnswers' => $instanceAnswers,
        ]);
    }

    public function recommend(Request $request)
    {
        $instance = Instance::where([
            ['user_id', '=', $request->user_id],
            ['exam_id', '=', $request->exam_id],
        ])->latest()->first();

        $instance->recommendation = $request->recommendation;
        $instance->save();
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
