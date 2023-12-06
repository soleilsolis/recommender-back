<?php

namespace App\Http\Controllers;

use App\Models\InstanceAnswer;
use App\Http\Requests\StoreInstanceAnswerRequest;
use App\Http\Requests\UpdateInstanceAnswerRequest;
use App\Models\Answer;
use App\Models\Instance;
use Illuminate\Support\Facades\Auth;

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
        $instanceAnswer = $request->instance_answer_id ? InstanceAnswer::findOrFail($request->instance_answer_id) : new InstanceAnswer();

        $answer = Answer::findOrFail($request->answer_id);

        $instanceAnswer->answer_id = $answer->id;
    
        $instanceAnswer->question_id = $answer->question->id;

        $instanceAnswer->instance_id = Auth::user()->current_instance_id;
        $instanceAnswer->save();

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
