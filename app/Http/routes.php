<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/inicio', 'BannerController@indexPagina');

Route::get('/admin', function () {
    return view('layouts.admin');
});

Route::resource('/admin/banner', 'BannerController');
//Route::get('/admin/banner', function () {
//    return view('admin.banner.index');
//});

Route::get('/', function () {
    return view('welcome');
});

Route::auth();

Route::get('/home', 'HomeController@index');
