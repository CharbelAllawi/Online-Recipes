<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Recipe;

class ShopController extends Controller
{

    public function addShopping(Request $request)
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $request->validate([
            'recipe_id' => 'required|exists:recipes,id',
            'ingredients' => 'required|string',
        ]);

        $user_id = Auth::user()->id;



        $shoppingItem = new Shop();
        $shoppingItem->recipe_id = $request->input('recipe_id');
        $shoppingItem->user_id = $user_id;


        $shoppingItem->save();

        return response()->json(['message' => 'Item added to shopping list successfully'], 201);
    }
   
}
