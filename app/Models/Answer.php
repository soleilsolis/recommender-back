<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
  use HasFactory;

  protected $fillable = ['value', 'correct', 'question_id'];

  public function question()
  {
    return $this->belongsTo(Question::class);
  }

  public function instanceAnswers()
  {
    return $this->hasMany(InstanceAnswers::class);
  }
}
