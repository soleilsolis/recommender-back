<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use App\Models\Answer;
use App\Models\Exam;
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
        $exam = Exam::find($request->exam_id);

        foreach (array_filter($request->questions) as $submission) {
            $submission = (object) $submission;

            $question = $submission->id != null ? Question::find($submission->id) : new Question();

            $question->value = $submission->value ?? " ";
            $question->category_id = $submission->category_id;
            $question->exam_id = $submission->exam_id;
            $question->type = $submission->type;
            $question->worth = !$submission->worth ? 1 : $submission->worth;

            $question->save();

            foreach (array_filter($submission->answers) as $submissionAnswer) {
                $submissionAnswer = (object) $submissionAnswer;
                $answer = $submissionAnswer->id ? Answer::find($submissionAnswer->id) : new Answer();

                $answer->value = $submissionAnswer->value ?? " ";
                $answer->correct = $submissionAnswer->correct;
                $answer->question_id = $question->id;
                $answer->save();
            }

            if ($submission->type === 'Written') {
                foreach ($question->answers as $answer) {
                    $answer->delete();
                }
            }
        }

        foreach ($request->deleteQuestions as $id) {
            $question = Question::find($id);

            if ($question) {
                $question->delete();
            }
        }

        foreach ($request->deleteAnswers as $id) {
            $answer = Answer::find($id);
            if ($answer) {
                $answer->delete();
            }
        }

        return to_route("exam.show", ['id' => $request->exam_id]);
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
