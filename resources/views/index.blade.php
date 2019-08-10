@extends('layouts.layouts')
@section('content')
@include('inc.header')
    <section class="container">
        <div class="row">
            @include('inc.menu')
            <div class="col-md-9">
                <div class="tab-content">
                    <div class="tab-pane active" id="pane-1" role="tabpanel">
                        <h1>熱門特惠商品</h1>
                        <div class="row">
                            @if(count($discount_product) > 0)
                                @foreach($discount_product as $k=> $value)
                                <div class="col-md-4 mt-4">
                                    <div class="card text-center h-100 border-0 box-shadow">
                                        <img src="files/StoreProduct/{{$value['Pd_Img']}}"class="card-img-top" alt="{{$value['Pd_Name']}}">
                                        <div class="card-body">
                                            <h5 class="card-title " style="font-weight: bold;">{{$value['Pd_Name']}}</h5>
                                        </div>
                                        <div class="card-footer border-top-0 bg-white">
                                            <div class="btn-group " role="group" aria-label="First group">
                                                <button type="button" class="btn btn-light btn-sm strikethrough" disabled>${{$value['Pd_Price']}}</button>
                                                @if($value['Pd_Discount'] != NULL)
                                                <button type="button" class="btn btn-danger btn-sm" disabled>
                                                    特惠{{$value['Pd_Discount']}}折
                                                </button>
                                                @endif
                                                <button type="button" class="btn btn-dark btn-sm" disabled>$@if($value['Pd_Discount_Price'] != NULL){{$value['Pd_Discount_Price']}}@else{{$value['Pd_Price']}}@endif元</button>
                                            </div>
                                            <a href="product_view?pd_id={{$value['Pd_id']}}" class="btn btn-outline-secondary btn-sm mt-2 d-block"><i class="fas fa-shopping-cart mr-1"></i>購物去</a>
                                        </div>

                                    </div>
                                </div>
                                @endforeach
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@include('inc.footer')
@endsection
