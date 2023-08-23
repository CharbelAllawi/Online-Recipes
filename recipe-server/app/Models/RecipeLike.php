<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RecipeLike extends Model
{
    protected $fillable = ['recipe_id,numberoflikes'];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }
}
