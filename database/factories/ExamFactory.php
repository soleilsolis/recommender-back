<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Exam>
 */
class ExamFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'Your First Exam',
            'exam_type_id' => 1,
            'description' => 'This is a sample exam. Good luck!',
            'attempts' => 1,
            'expires_at' => now()->addYear(),
            'team_id' => 1,
        ];
    }
}
