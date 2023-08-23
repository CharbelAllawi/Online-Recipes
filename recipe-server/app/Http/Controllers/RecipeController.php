<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Ingredient;
use App\Models\Recipe;
use App\Models\RecipeLike;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

        $recipelike = new RecipeLike();
        $recipelike->recipe_id = $recipeId;
        $recipelike->save();
    }

        public function getRecipeInfo(Request $request)
        {
            $user = Auth::user();
            $recipes = [];

            // Check if the 'istrue' parameter is present and is true
            if ($request->has('istrue') && $request->input('istrue')) {
                // Check if the user is authenticated and has an associated ID
                if ($user && $user->id) {
                    $shoppingInfo = Shop::where('user_id', $user->id)
                        ->pluck('recipe_id')
                        ->toArray();

                    $recipes = Recipe::with('images', 'ingredients', 'likes')
                        ->whereIn('id', $shoppingInfo)
                        ->get()
                        ->map(function ($recipe) use ($user) {
                            $imagesArray = explode(', ', $recipe->images->pluck('images')->first());
                            $likesCount = $recipe->likes->count();
                            $recipeData = [
                                'recipe_id' => $recipe->id,
                                'cuisine' => $recipe->cuisine,
                                'images' => $imagesArray,
                                'ingredients' => $recipe->ingredients,
                                'likes' => $likesCount,
                                'name' => $recipe->name,
                                'liked' => false,
                                'shopping_info' => true,
                            ];

                            if ($user) {
                                $recipeData['liked'] = $recipe->likes->where('user_id', $user->id)->isNotEmpty();
                            }

                            return $recipeData;
                        });
                }
            } else {
                $recipes = Recipe::with('images', 'ingredients', 'likes')
                    ->get()
                    ->map(function ($recipe) use ($user) {
                        $imagesArray = explode(', ', $recipe->images->pluck('images')->first());
                        $likesCount = $recipe->likes->count();
                        $recipeData = [
                            'recipe_id' => $recipe->id,
                            'cuisine' => $recipe->cuisine,
                            'images' => $imagesArray,
                            'ingredients' => $recipe->ingredients,
                            'likes' => $likesCount,
                            'name' => $recipe->name,
                            'liked' => false,
                        ];

                        if ($user) {
                            $recipeData['liked'] = $recipe->likes->where('user_id', $user->id)->isNotEmpty();
                        }

                        return $recipeData;
                    });
            }

            return $recipes;
        }
    }
