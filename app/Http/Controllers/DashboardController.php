<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\ExamController;
use App\Models\Question;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        //
    }


    public function dashboard(Request $request)
    {
        $team = $request->user()->currentTeam;

        if ($request->user()->hasTeamRole($team, 'admin')) {
            $exams = $team->exams;

            $examsCreated =  $exams->count();
            $examsTaken = $team->instances->count();
            $students = $team->users->count();

            $failedAttempts = 0;

            foreach ($exams as $exam) {
                $worth = Question::select(DB::raw('SUM(worth) as worth'))->where('exam_id', '=', $exam->id)->get();
                $total = $worth[0]->worth ??= 0;
                $exam->passed = 0;
                $exam->failed = 0;

                foreach ($exam->instances as $instance) {
                    $score = 0;

                    $radarMap = ExamController::getCategories($instance->instanceAnswers);

                    foreach ($radarMap as $map) {
                        $score += $map['correct'];
                    }

                    $percentage = !$total ? 0 : number_format(($score / $total ?? 1) * 100);

                    if ($percentage < 50) {
                        $exam->failed++;
                        $failedAttempts++;
                    } else {
                        $exam->passed++;
                    }
                }
            }

            return Inertia::render('Dashboard', compact('examsCreated', 'failedAttempts', 'examsTaken', 'students', 'exams'));
        }

        if ($request->user()->hasTeamRole($team, 'student')) {

            $instances = $request->user()->instances;
            $examsTaken = $instances->count();
            $passed = 0;
            $failed = 0;


            foreach ($instances as $instance) {
                $score = 0;
                $total = 0;

                $instance->score  = 0;
                $instance->total = 0;

                $radarMap = ExamController::getCategories($instance->instanceAnswers);

                foreach ($radarMap as $map) {
                    $score += $map['correct'];
                    $total += $map['total'];
                }

                $instance->score +=  $score;
                $instance->total += $total;

                $percentage = !$total ? 0 : number_format(($score / $total ?? 1) * 100);

                if ($percentage < 50) {
                    $failed++;
                } else {
                    $passed++;
                }
            }
            return Inertia::render('DashboardStudent', compact(
                'examsTaken',
                'passed',
                'failed',
                'instances',
            ));
        }
    }
}
