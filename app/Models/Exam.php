<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Exam extends Model
{
  use HasFactory, SoftDeletes;

  protected $fillable = [
    'name',
    'exam_type_id',
    'description',
    'attempts',
    'expires_at',
  ];

  public function examType(): BelongsTo
  {
    return $this->belongsTo(ExamType::class);
  }

  public function questions(): HasMany
  {
    return $this->hasMany(Question::class);
  }

  public function categories(): HasMany
  {
    return $this->hasMany(Category::class);
  }
}
