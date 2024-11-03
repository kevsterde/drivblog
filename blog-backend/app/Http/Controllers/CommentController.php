<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    //

    public function index(){
        $comments = Comment::whereNull('parent_id')
            ->with(['replies.replies.replies.replies']) // 4 levels deep
            ->get();

        return response()->json($comments);
    }   

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string', 
            'content' => 'required|string',
            'parent_id' => 'nullable|integer|exists:comments,id',
        ]);


        $formattedGuestId = "GUEST_{$request->name}";

        $comment = Comment::create([
            'name' => $formattedGuestId,
            'content' => $request->content,
            'parent_id' => $request->parent_id,
        ]);

        return response()->json($comment, 201);
    }


    
}