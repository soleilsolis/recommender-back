<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use Illuminate\Http\Request;

class QuestionController extends Controller
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
    public function store(Request $request)
    {
        foreach ($request->questions as $question) {
            $question = (object) $question;

            if ($question->id) {
                $edit = Question::findOrFail($question->id);

                if ($edit->exam->team_id == $request->user()->currentTeam->id) {
                    $edit->value = $question->value;
                    $edit->category_id = $question->category_id;
                    $edit->exam_id = $question->exam_id;
                    $edit->type = $question->type;

                    $edit->save();
                }
            } else {

                if ($question->value) {
                    $create = Question::create([
                        'value' => $question->value,
                        'exam_id' => $question->exam_id,
                        'category_id' => $question->category_id,
                        'type' => $question->type,
                    ]);

                    $question->id =  $create->id;
                }
            }
        }

        return to_route("/exam/{$request->questions[0]->exam_id}");
    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateQuestionRequest $request, Question $question)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        //
    }
}
