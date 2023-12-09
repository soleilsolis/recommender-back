<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Instance extends Model
{
  use HasFactory;

  protected $fillable = ['exam_id', 'user_id'];

  protected $with = ['exam'];

  public function exam()
  {
    return $this->belongsTo(Exam::class);
  }

  public function instanceAnswers()
  {
    return $this->hasMany(InstanceAnswer::class);
  }

  public function questions(): HasManyThrough
  {
    return $this->hasManyThrough(Question::class, Exam::class);
  }

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
