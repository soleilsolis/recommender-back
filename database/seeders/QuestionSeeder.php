<?php

namespace Database\Seeders;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $questions = Question::factory(20)->create();

        foreach ($questions as $question) {
            Answer::factory(4)->state(new Sequence(
                ['correct' => 1, 'question_id' => $question->id],
                ['correct' => 0, 'question_id' => $question->id],
                ['correct' => 0, 'question_id' => $question->id],
                ['correct' => 0, 'question_id' => $question->id],
            ))->create();
        }
    }
}
