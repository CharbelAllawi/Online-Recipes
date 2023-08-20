<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    public function post(Request $request)
    {
        $user = JWTAuth::user();
        $destination_path = "public/images/posts/";
        if ($request->hasFile('image_url')) {
            $image = $request->file('image_url');
            $image_name = $image->getClientOriginalName();
            $path = $request->file('image_url')->storeAs($destination_path, $image_name);

            // $post = new Post([
            //     'user_id' => $user->id,
            //     'image_url' => $image_name,
            //     'likes_count' => 0
            // ]);
            // $post->save();
            return response()->json(['message' => 'Post created', 'image_url' => $image_name], 201);
        }

        return response()->json(['message' => 'Image not found'], 400);
    }
}
