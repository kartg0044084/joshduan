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
                                            <a href="product_view?Pd_id={{$value['Pd_id']}}" class="btn btn-outline-secondary btn-sm mt-2 d-block"><i class="fas fa-shopping-cart mr-1"></i>購物去</a>
                                        </div>

                                    </div>
                                </div>
                                @endforeach
                            @endif
                            <!-- <div class="col-md-4 mt-4">
                                <div class="card text-center h-100 border-0 box-shadow">
                                    <img src="https://images.unsplash.com/photo-1544756944-5c447b0e9410?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                        class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title " style="font-weight: bold;">草莓安安</h5>
                                        <p class="card-text ">This is a wider card with supporting text below as a
                                            natural
                                            lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div class="card-footer border-top-0 bg-white">
                                        <div class="btn-group " role="group" aria-label="First group">
                                            <button type="button" class="btn btn-outline-danger btn-sm" disabled>小顆</button>

                                            <button type="button" class="btn btn-outline-danger btn-sm" disabled>中顆</button>
                                            <button type="button" class="btn btn-outline-danger btn-sm" disabled>超大顆</button>
                                        </div>
                                        <a href="#" class="btn btn-outline-danger btn-sm mt-2 d-block disabled">缺貨中</a>
                                    </div>

                                </div>
                            </div> -->

                        </div>
                    </div>

                    <div class="tab-pane " id="pane-2" role="tabpanel">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card text-center h-100 border-0 box-shadow">
                                    <img src="http://img10.360buyimg.com/n1/jfs/t13501/112/227513326/105686/aead8ab2/5a0687e5Neda8e7e8.jpg"
                                        class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title " style="font-weight: bold;">不求人</h5>
                                        <p class="card-text ">抓背、抓癢、可伸縮：另有隱藏版功能，加購即可升級。</p>
                                    </div>
                                    <div class="card-footer border-top-0 bg-white">
                                        <button type="button" class="btn btn-outline-secondary btn-sm">普通版</button>
                                        <button type="button" class="btn btn-outline-secondary btn-sm">加購升級</button>
                                        <a href="#" class="btn btn-outline-secondary btn-sm mt-2 d-block"><i class="fas fa-shopping-cart mr-1"></i>加入購物車</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane " id="pane-3" role="tabpanel">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card text-center h-100 border-0 box-shadow">
                                    <img src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                        class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title " style="font-weight: bold;">蚵男的手錶</h5>
                                        <p class="card-text ">特色：手錶是防水的，還可以照明。主要是射出麻醉針，當然還有時間提示功能。</p>
                                    </div>
                                    <div class="card-footer border-top-0 bg-white">
                                        <div class="btn-group " role="group" aria-label="First group">
                                            <button type="button" class="btn btn-outline-secondary btn-sm">紅</button>
                                            <button type="button" class="btn btn-outline-secondary btn-sm">黑</button>
                                            <button type="button" class="btn btn-outline-secondary btn-sm">褐</button>

                                        </div>
                                        <a href="#" class="btn btn-outline-secondary btn-sm mt-2 d-block"><i class="fas fa-shopping-cart mr-1"></i>加入購物車</a>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card text-center h-100 border-0 box-shadow">
                                    <img src="https://i0.wp.com/flog.cc/mag/wp-content/uploads/2013/12/Taiwan-bluw-and-white-Slipper-1.jpg?resize=660%2C450"
                                        class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title " style="font-weight: bold;">+9 戰鬥靴</h5>
                                        <p class="card-text ">精品界大師-卡爾拉格斐(Karl Lagerfeld)，最新力作。+9只是最低預估值，數量有限，欲者請速速下單！</p>
                                    </div>
                                    <div class="card-footer border-top-0 bg-white">
                                        <div class="btn-group " role="group" aria-label="First group">
                                            <button type="button" class="btn btn-outline-secondary btn-sm">S</button>
                                            <button type="button" class="btn btn-outline-secondary btn-sm">M</button>
                                            <button type="button" class="btn btn-outline-secondary btn-sm" disabled>L</button>
                                            <button type="button" class="btn btn-outline-secondary btn-sm" disabled>XL</button>
                                            <button type="button" class="btn btn-outline-secondary btn-sm">XXL</button>
                                        </div>
                                        <a href="#" class="btn btn-outline-secondary btn-sm mt-2 d-block"><i class="fas fa-shopping-cart mr-1"></i>加入購物車</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
@include('inc.footer')

    <!-- Modal -->
    <div class="modal fade" id="removeModal" tabindex="-1" role="dialog" aria-labelledby="removeModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h5 class="modal-title text-white" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-outline-danger">確定</button>
                </div>
            </div>
        </div>
    </div>
@endsection
