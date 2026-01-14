<?php
// backend/routes/api.php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CounterController;

Route::get('/counter', [CounterController::class, 'get']);
Route::post('/counter/increment', [CounterController::class, 'increment']);
