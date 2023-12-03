<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('exams', function (Blueprint $table) {
      $table->id();
      $table->text('name')->nullable();
      $table->foreignId('exam_type_id')->constrained()->cascadeOnDelete();
      $table->foreignId('team_id')->constrained()->cascadeOnDelete();
      $table->text('description')->nullable();
      $table->integer('attempts')->nullable();
      $table->timestamp('expires_at')->nullable();
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('exams');
  }
};
