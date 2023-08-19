<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;
    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'recipe_ingredients')->withPivot('quantity');
    }

    public function shoppingListItems()
    {
        return $this->belongsToMany(ShoppingListItem::class, 'ingredient_id');
    }
}
