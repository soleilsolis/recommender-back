<?php

namespace App\Http\Controllers;

use App\Models\ExamType;
use App\Http\Requests\StoreExamTypeRequest;
use App\Http\Requests\UpdateExamTypeRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;

class ExamTypeController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index(Request $request)
	{
		$examType = ExamType::where(
			'team_id',
			'=',
			$request->user()->currentTeam->id
		)->get();

		return Inertia::render('ExamTypes/Index', compact('examType'));
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		return Inertia::render('ExamTypes/Create');
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(StoreExamTypeRequest $request): ExamType
	{
		$examType = ExamType::create([
			'name' => $request->name,
			'team_id' => $request->user()->currentTeam->id,
		]);

		return $examType;
	}

	/**
	 * Display the specified resource.
	 */
	public function show(ExamType $examType)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(ExamType $examType)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(
		UpdateExamTypeRequest $request,
		ExamType $examType
	): ExamType {
		$examType = $examType->find($request->id);
		$examType->name = $request->name;
		$examType->save();

		return $examType;
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(ExamType $examType)
	{
		//
	}
}
