<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
  use HasFactory;

  protected $fillable = ['value', 'type', 'exam_id', 'category_id', 'worth'];

  public function category()
  {
    return $this->belongsTo(Category::class);
  }

  public function exam()
  {
    return $this->belongsTo(Exam::class);
  }

  public function instanceAnswers()
  {
    return $this->hasMany(InstanceAnswers::class);
  }

  public function answers()
  {
    return $this->hasMany(Answer::class);
  }
}
