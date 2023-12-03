<?php

use App\Http\Controllers\AnswerController;
use App\Models\Answer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExamTypeController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
	return $request->user();
});

Route::middleware([
	config('jetstream.auth_session'),
])->group(function () {
	Route::controller(AnswerController::class)->group(function () {
		Route::get('/answers', 'index');
		Route::get('/answer/{id}', 'show');
		Route::post('/answer', 'store');
		Route::put('/answer/{id}/action', 'action');
		Route::patch('/answer/{id}', 'update');
		Route::delete('/answer/{id}', 'destroy');
	});

	Route::controller(CategoryController::class)->group(function () {
		Route::get('/categories', 'index');
		Route::get('/category/{id}', 'show');
		Route::post('/category', 'store');
		Route::put('/category/{id}/action', 'action');
		Route::patch('/category/{id}', 'update');
		Route::delete('/category/{id}', 'destroy');
	});

	Route::controller(ExamController::class)->group(function () {
		Route::get('/exams', 'index');
		Route::get('/exam/{id}', 'show');
		Route::post('/exam', 'store');
		Route::put('/exam/{id}/action', 'action');
		Route::patch('/exam/{id}', 'update');
		Route::delete('/exam/{id}', 'destroy');
	});

	Route::controller(ExamTypeController::class)->group(function () {
		Route::get('/examType/{id}', 'show');
		Route::post('/examType', 'store')->name('examType.store');
		Route::put('/examType/{id}/action', 'action');
		Route::patch('/examType/{id}', 'update');
		Route::delete('/examType/{id}', 'destroy');
	});

	Route::controller(Instance::class)->group(function () {
		Route::get('/instances', 'index');
		Route::get('/instance/{id}', 'show');
		Route::post('/instance', 'store');
		Route::put('/instance/{id}/action', 'action');
		Route::patch('/instance/{id}', 'update');
		Route::delete('/instance/{id}', 'destroy');
	});

	Route::controller(InstanceAnswerController::class)->group(function () {
		Route::get('/instanceAnswers', 'index');
		Route::get('/instanceAnswer/{id}', 'show');
		Route::post('/instanceAnswer', 'store');
		Route::put('/instanceAnswer/{id}/action', 'action');
		Route::patch('/instanceAnswer/{id}', 'update');
		Route::delete('/instanceAnswer/{id}', 'destroy');
	});

	Route::controller(QuestionController::class)->group(function () {
		Route::get('/questions', 'index');
		Route::get('/question/{id}', 'show');
		Route::post('/question', 'store');
		Route::put('/question/{id}/action', 'action');
		Route::patch('/question/{id}', 'update');
		Route::delete('/question/{id}', 'destroy');
	});
});
