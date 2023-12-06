<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InstanceAnswer extends Model
{
  use HasFactory;

  protected $fillable = ['instance_id', 'question_id', 'answer_id'];

  protected $with = ['answer'];
  public function instance()
  {
    return $this->belongsTo(Instance::class);
  }

  public function question()
  {
    return $this->belongsTo(Question::class);
  }

  public function answer()
  {
    return $this->belongsTo(Answer::class);
  }
}
