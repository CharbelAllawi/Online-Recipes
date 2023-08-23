<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CalenderController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\ShopController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('sharerecipe', [RecipeController::class, 'sharerecipe']);
Route::post('getRecipeInfo', [RecipeController::class, 'getRecipeInfo']);
Route::post('like', [LikeController::class, 'like']);
Route::post('unlike', [LikeController::class, 'unlike']);
Route::post('getComments', [CommentController::class, 'getComments']);
Route::post('addComment', [CommentController::class, 'addComment']);
Route::post('addShopping', [ShopController::class, 'addShopping']);

Route::get("get_plans", [CalenderController::class, "getPlans"]);
Route::post("set_plan", [CalenderController::class, "setPlan"]);
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('me', 'me');
});
