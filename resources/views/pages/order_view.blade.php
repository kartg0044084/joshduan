@extends('layouts.layouts')
@section('content')
@include('inc.header')
@inject('OrderPresenter', 'App\Presenters\OrderPresenter')
<div class="container mt-5" >
    <div class="h1 text-center"><strong>訂單狀態 [{!! $OrderPresenter->showstatus($order['Od_Status']) !!}]</strong></div>
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
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
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
                            {!! $OrderPresenter->showorder_cart($order['Od_Content']) !!}
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
                            <input type="text" class="form-control" name="name" value="{{$order['Od_Name']}}" required>
                            <div class="invalid-feedback">請填寫姓名</div>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="mail">Email</label>
                            <input type="email" class="form-control" name="email" value="{{$order['Od_Email']}}" required>
                            <div class="invalid-feedback">請填寫Email</div>
                        </div>
                    </div>

                    <div class="form-row text-left">
                        <div class="form-group col-md-12">
                            <label for="address">地址</label>
                            <div id="twzipcode"></div>
                            <input type="text" class="form-control address" name="address" data-city="{{$order['Od_City']}}" data-town="{{$order['Od_Town']}}" value="{{$order['Od_Address']}}" required>
                        </div>
                    </div>

                    <div class="mt-3 d-flex justify-content-end">
                        <input type="hidden" name="od_id" value="{{$order['Od_Id']}}">
                        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                        <input type="button" class="btn btn-secondary mr-2" value="回上一頁" onclick="history.back()">
                        @if($order['Od_Status'] == 0)
                            <button type="submit" class="btn btn-primary checkout">確認付款</button>
                        @endif
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>
@include('inc.footer')
@endsection
