@extends('layouts.layouts')
@section('content')
@include('inc.header')
@inject('OrderPresenter', 'App\Presenters\OrderPresenter')
<div class="container mt-5" >
    <div class="h1 text-center"><strong>訂單查看</strong></div>
    <div class="row justify-content-center mt-4">
        <div class="col-md-8">
            <div class="accordion" id="accordionExample">
                <div id="collapseOne" class="collapse show " aria-labelledby="headingOne" data-parent="#accordionExample">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th width="70"></th>
                                <th>編號</th>
                                <th>總額</th>
                                <th>狀態</th>
                                <th>訂單日期</th>
                                <th>更新日期</th>
                                <th class="text-center" width="120">觀看</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!! $OrderPresenter->showorder_data() !!}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@include('inc.footer')
@endsection
