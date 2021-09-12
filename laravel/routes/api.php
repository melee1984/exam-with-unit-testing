<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     // return $request->user();
//     // 
//     // Route::post('booking/timings', 'Api\BookingsController@timings');
// });

Route::apiResource('bookings', \Api\BookingController::class)
	->middleware('auth:api');

Route::group(['middleware' => 'auth:api'], function() { 
	Route::post('display/timings', 'Api\BookingController@timings');
	Route::get('display/mine', 'Api\BookingController@fetchmyrecord');
});

Route::resource('todo', 'Api\TodoController');

// Route::resource('todo', 'Api\TodoController',
//                 ['only' => ['index', 'store', 'update', 'destroy']]);


