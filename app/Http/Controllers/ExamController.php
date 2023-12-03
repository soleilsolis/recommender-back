<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Http\Requests\StoreExamRequest;
use App\Http\Requests\UpdateExamRequest;
use App\Models\ExamType;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $paginator = Exam::with('examType')->where(
            'team_id',
            '=',
            $request->user()->currentTeam->id
        )->orderBy('created_at', 'desc')->paginate(15);

        foreach ($paginator as $page) {
            $page->examType = $page->examType;
        }
        return Inertia::render('Exams/Index', compact('paginator'));
    }

    public function indexStudent()
    {
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Exam $exam)
    {
        //
    }
}
