<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instance extends Model
{
  use HasFactory;

  protected $fillable = ['exam_id', 'user_id'];

  public function exam()
  {
    return $this->belongsTo(Exam::class);
  }

  public function instanceAnswers()
  {
    return $this->hasMany(InstanceAnswer::class);
  }

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
