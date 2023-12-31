<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = ['images'];
    public function images()
    {
        return $this->hasMany(Image::class, 'recipe_id');
    }
    public function recipe()
    {

        return $this->belongsTo(Recipe::class);
    }
}
