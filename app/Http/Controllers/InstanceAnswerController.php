<?php

namespace App\Http\Controllers;

use App\Models\InstanceAnswer;
use App\Http\Requests\StoreInstanceAnswerRequest;
use App\Http\Requests\UpdateInstanceAnswerRequest;
use App\Models\Answer;
use App\Models\Instance;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class InstanceAnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreInstanceAnswerRequest $request)
    {
        $instanceAnswer = InstanceAnswer::where([
            ['question_id', '=', $request->question_id],
            ['instance_id', '=', Auth::user()->current_instance_id],
        ])->first() ?? new InstanceAnswer();

        //   dd($request->question_id);

        $question = Question::findOrFail($request->question_id);

        $instanceAnswer->question_id = $question->id;
        $instanceAnswer->instance_id = Auth::user()->current_instance_id;


        if ($question->type !== 'Written' && $request->answer_id) {
            $answer = Answer::findOrFail($request->answer_id);
            $instanceAnswer->answer_id = $answer->id;

            if ($instanceAnswer->answer_id) {
                $instanceAnswer->save();
            }
        }

        if ($question->type === 'Written') {
            if ($request->value) {
                $instanceAnswer->value = $request->value;
                $instanceAnswer->save();
            }
        }

        if ($request->url) {
            //return Inertia::location($request->url);
            return redirect($request->url);
        }
    }

    public function correct(Request $request)
    {
        foreach ($request->instanceAnswers as $submission) {
            $instanceAnswer = InstanceAnswer::find($submission['id']);
            $instanceAnswer->correct = $submission['correct'];
            $instanceAnswer->save();
        }

        return Inertia::location('/instances/1');
    }

    /**
     * Display the specified resource.
     */
    public function show(InstanceAnswer $instanceAnswer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InstanceAnswer $instanceAnswer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInstanceAnswerRequest $request, InstanceAnswer $instanceAnswer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InstanceAnswer $instanceAnswer)
    {
        //
    }
}
