<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $fillable = array('task', 'done_at');
    public $timestamps = true;
}
