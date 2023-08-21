<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = ['username', 'email', 'password'];

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function shoppingLists()
    {
        return $this->hasMany(Shopping::class);
    }

    public function calendars()
    {
        return $this->hasMany(Calendar::class);
    }
}
