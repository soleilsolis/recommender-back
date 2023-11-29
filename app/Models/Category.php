<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Category extends Model
{
  use HasFactory, SoftDeletes;

  protected $fillable = ['name', 'exam_id'];

  public function exam()
  {
    return $this->belongsTo(Exam::class);
  }

  public function questions()
  {
    return $this->hasMany(Question::class);
  }
}
