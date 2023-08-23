<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model; // Import the Eloquent Model class

class Shop extends Model
{
    protected $table = 'shopping';

    protected $fillable = ['recipe_id', 'user_id', 'ingredients'];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
