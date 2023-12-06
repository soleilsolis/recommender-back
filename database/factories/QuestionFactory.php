<?php

namespace Database\Factories;

use App\Models\Answer;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\Sequence;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Question>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'value' => $this->faker->sentence(), 'type' => 'Multiple Choice', 'exam_id' => 1, 'category_id' => $this->faker->numberBetween(1, 5)
        ];
    }

    public function withAnswers(): static
    {
        
        return $this->state(function (array $attributes) {
            dd($attributes);
            Answer::factory(4)->state(new Sequence([
                ['correct' => 1, 'question_id' => $attributes['id']],
                ['correct' => 0, 'question_id' => $attributes['id']],
                ['correct' => 0, 'question_id' => $attributes['id']],
                ['correct' => 0, 'question_id' => $attributes['id']],
            ]))->create();
        });
    }
}
