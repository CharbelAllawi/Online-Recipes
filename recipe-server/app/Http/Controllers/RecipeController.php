<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Ingredient;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class RecipeController extends Controller
{
    public function sharerecipe(Request $request)
    {
        $destination_path = "public/images/posts/";

        $name = $request->input('name');
        $cuisine = $request->input('cuisine');
        $recipe = new Recipe();
        $recipe->name = $name;
        $recipe->cuisine = $cuisine;
        $recipe->save();
        $recipeId = $recipe->id;

        $ingredients = new Ingredient();
        $ingredients->recipe_id = $recipeId;
        $ingredients->ingredients = trim($request->input('ingredients'), ', ');
        $ingredients->save();

        $imageNames = "";

        if ($request->hasFile('images')) {
            $images = $request->file('images');
            foreach ($images as $image) {
                $image_name = $image->getClientOriginalName();
                $path = $image->storeAs($destination_path, $image_name);
                if ($imageNames == "") {
                    $imageNames .= $image_name;
                } else {
                    $imageNames .= " , " . $image_name;
                }
            }
        }
        $images = new Image();
        $images->recipe_id = $recipeId;
        $images->images = $imageNames;
        $images->save();
    }
}
