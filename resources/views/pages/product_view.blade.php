@extends('layouts.layouts')
@section('content')
@include('inc.header')

<div class="container">
    <div class="row">
        @foreach($product as $k=> $value)
        <div class="col-md-4">
            <div class="sticky-top" style="top: 10px;">
                <h1><small class="text-secondary ml-1">{{$value['Pd_Name']}}</small></h1>
                <div class="d-flex justify-content-end align-items-end">
                    @if($value['Pd_Discount'] != '')
                    <del class="text-muted">售價 ${{$value['Pd_Price']}}</del>
                    @endif
                    <div class="h3 ml-auto mb-0 text-danger">
                    @if($value['Pd_Discount'] != '')
                        <strong>{{$value['Pd_Discount']}}折</strong>
                    @endif
                        <small>特價 $NT</small>
                    @if($value['Pd_Discount'] != '')
                        <strong>{{$value['Pd_Discount_Price']}}</strong>
                    @else
                        <strong>{{$value['Pd_Price']}}</strong>
                    @endif
                    </div>
                </div>
                <hr>

                <div class="input-group mt-3">
                    <select name="number" class="form-control">
                        <option value="1">1 件</option>
                        <option value="2">2 件</option>
                        <option value="3">3 件</option>
                    </select>
                    <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                    <input type="submit" class="btn btn-primary ml-1" value="加入購物車"></a>
                </div>
            </div>

        </div>
        <div class="col-md-8">
            <h2 class="red">{{$value['Pd_Name']}}</h2>
            <p class="product_content" value="{{$value['Pd_Content']}}"></p>

            <div class="card border-0" style="width: 100%;">
                <div class="card-body">
                    <h2 class="card-text text-center">商品圖錦</h2>
                </div>
                <img src="files/StoreProduct/{{$value['Pd_Img']}}" class="card-img-top" alt="{{$value['Pd_Name']}}">
            </div>

            <div class="card mt-5">
                <div class="card-body bg-light">
                    <h2 class="text-center">退/換貨需知</h2>

                <ul>
                <!-- 2018-09-03 zihsu 商品頁之退換貨須知內容調整 需求單號:2018072500058359-->
                  <p>退換貨須知：</p>
                  <li>商品到貨享十天猶豫期之權益（注意！猶豫期非試用期），辦理退貨商品必須是全新狀態且包裝完整，否則將會影響退貨權限。<a href="javascript:void(0);" target="_blank">各類商品退換貨限制說明</a></li>
                  <li>下載版序號、珠寶、黃金類訂單之商品暫不提供線上退/換貨，3C類商品暫不提供換貨服務，其它商品僅限換貨1次。</li>
                <li>個人衛生用品除商品本身有瑕疵外，未拆封商品仍享有十天猶豫期之退貨權利。但已拆封 (如剪標、下水等情形…)，依據《通訊交易解除權合理例外情事適用準則》，本公司無法接受退換貨。<br>
                      ※個人衛生用品項目：內衣褲(含隱形胸罩、胸扥、胸貼、透明肩帶、水餃墊/美胸墊、襯裙)、塑身衣(含馬甲、束褲、束腿、腰夾、內搭)、泳裝、襪子、紙尿褲。
                  </li>
                  <!-- 2016-02-16 ucwang 商品頁之退換貨須知內容調整 需求單號:2016012700031463-->
                  <p>運送服務：</p>
                  <li>我們所提供的產品配送區域範圍目前僅限台灣本島。</li>
                  <li>商品之實際配貨日期、退換貨日期，依我們向您另行通知之內容為準。</li>
                  <li>針對大型商品(包括：大型家電、家具床墊、健身按摩器材、車類...等)，我們將於完成收款確認後，一天內〈不含例假日〉將會有專人與您確認相關配送細節等的聯繫。偏遠地區、樓層費及其它加價費用，皆由廠商於約定配送時一併告知，廠商將保留出貨與否的權利。</li>
                  <p>售後服務：</p>
                  <!-- 2016-02-16 ucwang 商品頁之退換貨須知內容調整 需求單號:2016012700031463-->
                  <li>如您收到商品，請依正常程序儘速檢查商品，若商品發生新品瑕疵之情形，您可申請更換新品或退貨，請直接點選<a href="javascript:void(0);" target="_blank">聯絡我們</a>。</li>
                  <li>若您對於購買流程、付款方式、退貨及商品運送方式有疑問，你可直接點選<a href="javascript:void(0);" target="_blank">會員中心</a>。</li>
                  <p>特別說明：</p>
                  <li>本公司對於所販售具遞延性之商品或服務，消費者權益均受保障。如因合作廠商無法提供商品或服務，請與本公司聯繫辦理退貨或換成等值商品。</li>
                  <li>※特惠商品，不適用折價券</li>
                </ul>

                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>
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
