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
Route::get('index', 'PagesController@index');
Route::post('getcategory2', 'PagesController@getcategory2')->name('getcategory2');
Route::get('returncategory1', 'PagesController@returncategory1')->name('returncategory1');
// 前台 商品
Route::get('getproduct_all', 'ProductController@ad_product')->name('ad_product');
Route::post('ajax_product', 'ProductController@ad_product')->name('ajax_product');
Route::get('product_view', 'ProductController@product_view')->name('product_view');
// 前台 會員
Route::get('getmember', 'MemberController@getmember')->name('getmember');
Route::post('repeat_member', 'MemberController@repeat_member')->name('repeat_member');
Route::post('member_done', 'MemberController@member_done')->name('member_done');
Route::get('member_verification', 'MemberController@member_verification')->name('member_verification');
Route::get('informal_member', 'MemberController@informal_member')->name('informal_member');
Route::get('logout', 'MemberController@logout')->name('logout');
// 前台購物車/結帳
Route::post('add_cart', 'CartController@add_cart')->name('add_cart');
Route::get('cart', 'CartController@cart')->name('cart');
Route::post('del_cart', 'CartController@del_cart')->name('del_cart');
Route::post('checkout', 'CartController@checkout')->name('checkout');
// 前台訂單
Route::get('getorder_all', 'OrderController@getorder_all')->name('getorder_all');
Route::get('getorder', 'OrderController@getorder')->name('getorder');
Route::post('del_order', 'OrderController@del_order')->name('del_order');
// 歐付寶 結帳系統
Route::post('allpayrecevie', 'AllpayController@allpayrecevie')->name('allpayrecevie');
//寄會員驗證信
Route::get('mailpost', 'MailController@mailpost')->name('mailpost');
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
