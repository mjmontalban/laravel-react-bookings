<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::controller(UserController::class)->group(function () {
    // Route::post('/login', 'login');
    Route::get('/users', 'getUsers');
});