<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// 前台 主頁
Route::get('', 'PagesController@index');
Route::post('getcategory2', 'PagesController@getcategory2')->name('getcategory2');
Route::get('returncategory1', 'PagesController@returncategory1')->name('returncategory1');
// 前台 商品
Route::get('getproduct_all', 'ProductController@ad_product')->name('ad_product');
Route::post('ajax_product', 'ProductController@ad_product')->name('ajax_product');
// 後台 主頁
Route::get('admin', 'AdminController@ad_index')->name('admin');
// 後台 管理者
Route::get('ad_editmanager', 'AdminController@ad_editmanager')->name('ad_editmanager');
Route::post('ad_editmanager_done', 'AdminController@ad_editmanager_done')->name('ad_editmanager_done');
Route::get('ad_delmanager', 'AdminController@ad_delmanager')->name('ad_delmanager');
// 後台 登入步驟
Route::get('ad_login', 'AdminController@ad_login')->name('ad_login');
Route::post('ad_checklogin', 'AdminController@ad_checklogin')->name('ad_checklogin');
Route::get('ad_refresh_captcha', 'AdminController@ad_refresh_captcha')->name('ad_refresh_captcha');
Route::get('ad_logout', 'AdminController@ad_logout')->name('ad_logout');
// 後台 商品管理
Route::get('ad_category1', 'ProductController@ad_category1')->name('ad_category1');
Route::get('ad_category2', 'ProductController@ad_category2')->name('ad_category2');
Route::get('ad_product', 'ProductController@ad_product')->name('ad_product');
Route::get('ad_editproduct', 'ProductController@ad_editproduct')->name('ad_editproduct');
Route::post('ad_editproduct_done', 'ProductController@ad_editproduct_done')->name('ad_editproduct_done');
