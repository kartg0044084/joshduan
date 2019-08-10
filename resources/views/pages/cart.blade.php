@extends('layouts.layouts')
@section('content')
@include('inc.header')
@inject('CartPresenter', 'App\Presenters\CartPresenter')
<div class="container mt-5" >
    <div class="h1 text-center"><strong>訂單確認</strong></div>
    <div class="row mt-3">
        <div class="col-12 col-md">
            <div class="alert alert-success alert-rounded text-center" role="alert">1.輸入訂單資料</div>
        </div>
        <div class="col-12 col-md">
            <div class="alert alert-light alert-rounded text-center" role="alert">2.金流付款</div>
        </div>
        <div class="col-12 col-md">
            <div class="alert alert-light alert-rounded text-center" role="alert">3.訂單完成</div>
        </div>
    </div>

    <div class="row justify-content-center mt-4">
        <div class="col-md-8">
            <div class="accordion" id="accordionExample">
                <div class="card card-bottom">
                    <div class="card-header  d-flex justify-content-between" id="headingOne">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                            顯示購物車細節
                        </button>
                        <div class="h3 d-inline-block mt-2">
                            <strong class="total_all"></strong>
                        </div>
                    </div>

                </div>
                <div id="collapseOne" class="collapse show " aria-labelledby="headingOne" data-parent="#accordionExample">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th width="20"></th>
                                <th width="100"></th>
                                <th>商品名稱</th>
                                <th>單價</th>
                                <th>數量</th>
                                <th class="text-center" width="120">小計</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!! $CartPresenter->showcart_data() !!}
                            <tr class="text-right">
                                <td colspan="5"><strong>運費</strong></td>
                                <td><strong class="freight">$ 80</strong></td>
                            </tr>
                            <tr class="text-right">
                                <td colspan="5"><strong>合計</strong></td>
                                <td><strong class="total_all"></strong></td>
                            </tr>
                        </tbody>

                    </table>


                </div>
            </div>

            <div class="card text-center my-5 border-0">
                <div class="card-header border-0">
                    <div class="h3 mt-1"> 收件人資訊 </div>
                </div>
                <form class="needs-validation" action="{{route('checkout')}}" method="post" novalidate>
                    {{ csrf_field() }}
                    <div class="form-row text-left mt-3">
                        <div class="form-group col-md-6">
                            <label for="name">姓名</label>
                            <input type="text" class="form-control" name="name" value="{{Session::get('member.Mb_Name')}}" required>
                            <div class="invalid-feedback">請填寫姓名</div>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="mail">Email</label>
                            <input type="email" class="form-control" name="email" value="{{Session::get('member.Mb_Email')}}" required>
                            <div class="invalid-feedback">請填寫Email</div>
                        </div>
                    </div>

                    <div class="form-row text-left">
                        <div class="form-group col-md-12">
                            <label for="address">地址</label>
                            <div id="twzipcode"></div>
                            <input type="text" class="form-control address" name="address" data-city="{{Session::get('member.Mb_City')}}" data-town="{{Session::get('member.Mb_Town')}}" value="{{Session::get('member.Mb_Address')}}" required>
                        </div>
                    </div>

                    <div class="mt-3 d-flex justify-content-end">
                        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                        <a  href="/" class="btn btn-secondary mr-2">繼續選購</a>
                        <button type="submit" class="btn btn-primary checkout">確認付款</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>
@include('inc.footer')
@endsection
