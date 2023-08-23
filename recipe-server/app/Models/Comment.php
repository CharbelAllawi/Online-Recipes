<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['text', 'date', 'recipe_id'];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }
}
