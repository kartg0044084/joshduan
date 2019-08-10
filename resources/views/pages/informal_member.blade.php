@extends('layouts.layouts')
@section('content')
@include('inc.header')
<div class="container mt-5" >
    <div class="h1 text-center"><strong>會員驗證</strong></div>
    <div class="row justify-content-center mt-4">
        <div class="col-md-8">

            <div class="card text-center col-md-12 border-0">

                    <div class="form-row text-left mt-3">
                        <div class="form-group col-md-12">
                            <label for="email">我們已寄出信件，請前往信箱點擊驗證連結，完成常用信箱驗證，(如過5分鐘還尚未收取信件，請點擊下方按鈕再次送信)</label>
                            <div class="mt-3 d-flex justify-content-end center">
                                <a href="mailpost?string={{$string}}" class="btn btn-primary" role="button">送出</a>
                            </div>
                        </div>
                    </div>

            </div>

        </div>
    </div>
</div>
@include('inc.footer')
@endsection
