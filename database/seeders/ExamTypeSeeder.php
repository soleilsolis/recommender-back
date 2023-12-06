<?php

namespace Database\Seeders;

use App\Models\ExamType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class ExamTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ExamType::factory(3)->state(new Sequence([
            'name' => 'Quiz'
        ], ['name' => 'Prelim'], ['name' => 'Finals']))->create();
    }
}
