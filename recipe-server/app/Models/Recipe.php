<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = ['name', 'cuisine'];

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public function ingredients()
    {
        return $this->hasMany(Ingredient::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function shoppingLists()
    {
        return $this->hasMany(Shopping::class);
    }

    public function calendars()
    {
        return $this->hasMany(Calendar::class);
    }}
