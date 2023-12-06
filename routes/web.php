<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\ExamTypeController;
use App\Http\Controllers\Instance;
use App\Http\Controllers\InstanceAnswerController;
use App\Http\Controllers\InstanceController;
use App\Http\Controllers\QuestionController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/test', function () {
        return Inertia::render('Test');
    })->name('test');

    Route::get('/examTypes', [ExamTypeController::class, 'index'])->name('examTypes');
    Route::get('/examTypes/create', [ExamTypeController::class, 'create'])->name('examTypes.create');


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
        Route::post('/category', 'store')->name('category.store');
        Route::put('/category/{id}/action', 'action');
        Route::patch('/category/{id}', 'update');
        Route::delete('/category/{id}', 'destroy');
    });

    Route::controller(ExamController::class)->group(function () {
        Route::get('/exams', 'index')->name('exams.index')->middleware('owner');

        Route::get('/exam/take/{id}', 'take')->name('exam.take')->middleware('student');
        Route::get('/exam/current/{page}', 'current')->name('exam.current')->middleware('student');
        Route::post('/exam/finish', 'finish')->name('exam.finish')->middleware('student');

        Route::get('/exams/student', 'indexStudent')->name('exams.index.student')->middleware('student');
        Route::get('/exam/create', 'create')->name('exam.create')->middleware('owner');
        Route::get('/exam/{id}', 'show')->name('exam.show')->middleware('owner');
        Route::get('/exam/student/{id}', 'showStudent')->name('exams.show.student')->middleware('student');
        Route::get('/exam/edit/{id}', 'edit')->name('exam.edit');
        Route::post('/exam', 'store')->name('exam.store')->middleware('owner');
        Route::put('/exam/{id}', 'update')->name('exam.update')->middleware('owner');
        Route::delete('/exam/{id}', 'destroy')->middleware('owner');
        Route::get('/exam/currentExam/{question_id}', 'edit')->name('exam.currentExam');
    });

    Route::controller(ExamTypeController::class)->group(function () {
        Route::get('/examType/{id}', 'show');
        Route::post('/examType', 'store')->name('examType.store');
        Route::put('/examType/{id}/action', 'action');
        Route::patch('/examType/{id}', 'update');
        Route::delete('/examType/{id}', 'destroy');
    });

    Route::controller(InstanceController::class)->group(function () {
        Route::get('/instances/{exam_id}', 'index')->name('instances.index');
        Route::post('/instance/recommendation', 'recommend')->name('instance.recommendation.store');
        Route::get('/instance/show/{exam_id}/{user_id}', 'show');
        Route::post('/instance', 'store');
        Route::put('/instance/{id}/action', 'action');
        Route::patch('/instance/{id}', 'update');
        Route::delete('/instance/{id}', 'destroy');
    });

    Route::controller(InstanceAnswerController::class)->group(function () {
        Route::get('/instanceAnswers', 'index');
        Route::get('/instanceAnswer/{id}', 'show');
        Route::post('/instanceAnswer', 'store')->name('instanceAnswer.store');
        Route::put('/instanceAnswer/{id}/action', 'action');
        Route::patch('/instanceAnswer/{id}', 'update');
        Route::delete('/instanceAnswer/{id}', 'destroy');
    });

    Route::controller(QuestionController::class)->group(function () {
        Route::get('/questions', 'index');
        Route::get('/question/{id}', 'show');
        Route::post('/question', 'store')->name('question.store');
        Route::put('/question/{id}/action', 'action');
        Route::patch('/question/{id}', 'update');
        Route::delete('/question/{id}', 'destroy');
    });
});
