<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;
use App\Models\Recipe;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class LikeController extends Controller
{
    public function like(Request $request)
    {
        $like = new Like;
        $like->recipe_id = $request->recipe_id;
        $like->user_id = auth()->user()->id;
        $like->save();

        return response()->json(["status" => "Liked successfully"]);
    }
    public function unlike(Request $request)
    {
        $user_id = Auth::id();
        $recipe = Recipe::find($request->recipe_id);
        if (!$recipe) {
            return response()->json(['status' => 'Post was not found']);
        }
        $existingLike = Like::where('user_id', $user_id)->where('recipe_id', $request->recipe_id)->first();
        $existingLike->delete();
        return response()->json(['status' => 'Unliked']);
    }
}
