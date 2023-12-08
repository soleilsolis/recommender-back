<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Actions\Jetstream\CreateTeam;
use App\Models\ExamType;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $user = \App\Models\User::factory()->withPersonalTeam()->create([
            'name' => 'Professor',
            'email' => 'professor@plpasig.site',
            'type' => 'admin',
        ]);

        $user = \App\Models\User::factory()->withPersonalTeam()->create([
            'name' => 'Student',
            'email' => 'student@plpasig.site',
            'type' => 'student',
        ]);

        $user = \App\Models\User::factory()->withPersonalTeam()->create([
            'name' => 'White Face',
            'email' => 'whiteface1920@gmail.com',
            'type' => 'student',
        ]);

        $examTypeSeeder = new ExamTypeSeeder();
        $examTypeSeeder->run();

        $examSeeder = new ExamSeeder();
        $examSeeder->run();

        $categorySeeder = new CategorySeeder();
        $categorySeeder->run();

        $questionSeeder = new QuestionSeeder();
        $questionSeeder->run();
    }
}
