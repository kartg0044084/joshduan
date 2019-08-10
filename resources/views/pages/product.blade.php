@extends('layouts.layouts')
@section('content')
@include('inc.header')
    <section class="container">
        <div class="row">
            @include('inc.menu2')
            <div class="col-md-9">
                <div class="tab-content">
                    <div class="tab-pane active" id="pane-1" role="tabpanel">
                        <h1>商品型錄</h1>
                        <div class="row">
                            @if(count($product_page_all) > 0)
                                @foreach($product_page_all as $k=> $value)
                                <div class="col-md-4 mt-4 product">
                                    <div class="card text-center h-100 border-0 box-shadow">
                                        <img src="files/StoreProduct/{{$value['Pd_Img']}}"class="card-img-top" alt="{{$value['Pd_Name']}}">
                                        <div class="card-body">
                                            <h5 class="card-title " style="font-weight: bold;">{{$value['Pd_Name']}}</h5>
                                        </div>
                                        <div class="card-footer border-top-0 bg-white">
                                            <div class="btn-group " role="group" aria-label="First group">
                                                @if($value['Pd_Discount'] != NULL)
                                                <button type="button" class="btn btn-light btn-sm strikethrough" disabled>${{$value['Pd_Price']}}</button>
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

                    <!-- 分頁 -->
                    @if(count($product_page_all) > 0)
                    <div class="revisepage">
                        <nav aria-label="Page navigation example">
                          <ul class="pagination justify-content-end">
                            <li class="page-item previous">
                                @if( $page != 1 )
                                        <a href="javascript:void(0);" class="page-link ajax_product" code="{{$code}}" page="{{$page-1}}">上一頁</a>
                                @endif
                            </li>

                            <div class="bookmark">
                                @for( $i = 1 ; $i <= $pages ; $i++ )
                                    @if ( $page - 2 < $i && $i < $page + 3 )
                                        <li class="page-item"><a href="javascript:void(0);" class="page-link ajax_product" code="{{$code}}" page="{{$i}}">{{ $i }}</a></li>
                                    @endif
                                @endfor
                            </div>

                            <li class="page-item next">
                                @if( $page < $pages )
                                        <a href="javascript:void(0);" class="page-link ajax_product" code="{{$code}}" page="{{$page+1}}">下一頁</a>
                                @endif
                            </li>
                            <li class="page-item disabled">
                                        <a href="javascript:void(0);" class="page-link">目前第{{$page}}頁</a>
                            </li>
                          </ul>
                        </nav>
                    </div>
                    @endif
                    <!-- 分頁 -->
                </div>
            </div>
        </div>

    </section>
@include('inc.footer')
@endsection
