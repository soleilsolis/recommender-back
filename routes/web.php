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
        Route::get('/exams', 'index')->name('exams.index');
        Route::get('/exam/create', 'create')->name('exam.create');
        Route::get('/exam/{id}', 'show');
        Route::get('/exam/edit/{id}', 'edit')->name('exam.edit');
        Route::post('/exam', 'store')->name('exam.store');
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
        Route::post('/question', 'store')->name('question.store');
        Route::put('/question/{id}/action', 'action');
        Route::patch('/question/{id}', 'update');
        Route::delete('/question/{id}', 'destroy');
    });
});
