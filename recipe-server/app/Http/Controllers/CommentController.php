<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function getComments(Request $request)
    {
        $request->validate([
            'recipe_id' => 'required|exists:recipes,id',
        ]);

        $recipe_id = $request->input('recipe_id');
        $comments = Comment::where('recipe_id', $recipe_id)->get();

        return response()->json(['comments' => $comments]);
    }


    public function addComment(Request $request)
    {
        // Validate request data
        $request->validate([
            'recipe_id' => 'required|exists:recipes,id', // Adjust the validation as needed
            'comment' => 'required|string',
        ]);

        // Create a new comment
        $comment = new Comment();
        $comment->recipe_id = $request->input('recipe_id');
        $comment->text = $request->input('comment');
        $comment->date = now(); // Or use any other date format you prefer
        $comment->save();

        return response()->json(['message' => 'Comment added successfully']);
    }
}
