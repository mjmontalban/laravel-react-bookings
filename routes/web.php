<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/test_e', function () {
    return Inertia::render('test');
})->name('test');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('bookings', function () {
        return Inertia::render('bookings');
    })->name('bookings');

    Route::get('users', function () {
        return Inertia::render('users');
    })->name('users');

    Route::get('payments', function () {
        return Inertia::render('payments');
    })->name('payments');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
