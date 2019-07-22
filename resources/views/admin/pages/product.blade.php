@extends('admin.layouts.layouts')
@section('content')
<div class="page-container">
   <div class="left-content">
	   <div class="mother-grid-inner">
           @include('admin.inc.header')
            <div class="inner-block">
                <h1>商品管理</h1>
                <table id="table">
                  <thead>
                    <tr>
                      <th>編號</th>
                      <th>商品名稱</th>
                      <th>商品價格</th>
                      <th>商品折扣</th>
                      <th>商品折扣後價格</th>
                      <th>商品狀態</th>
                      <th>創建日期</th>
                      <th>更新日期</th>
                      <th>連結</th>
                    </tr>
                  </thead>
                  <tbody>
                    @if(count($product_page_all) > 0)
                        @foreach($product_page_all as $k=> $value)
                    <tr>
                        <td>{{$value['Pd_id']}}</td>
                        <td>{{$value['Pd_Name']}}</td>
                        <td>$ {{$value['Pd_Price']}}</td>
                        <td>@if($value['Pd_Discount'] != '') {{$value['Pd_Discount']}} 折 @else 未折扣 @endif</td>
                        <td>@if($value['Pd_Discount_Price'] != '')$ {{$value['Pd_Discount_Price']}}  @else 無 @endif</td>
                        <td>@if($value['Pd_Status'] == 1) 開啟 @else 關閉 @endif</td>
                        <td>{{$value['Pd_CreatedTime']}}</td>
                        <td>@if($value['Pd_ModifiedTime'] != '') {{$value['Pd_ModifiedTime']}} @else 未更新 @endif</td>
                        <td>
                        <a class="btn btn-warning" href="ad_editproduct?Pd_id={{$value['Pd_id']}}">進入</a>
                        </td>
                    </tr>
                        @endforeach
                    @endif
                  </tbody>
                </table>
                共 {{$data_nums}} 筆-第 {{$page}} 頁-共 {{$pages}} 頁
                <!-- 分頁 -->
                <ul class="pagination page">
                    @if( $page != 1 )
                            <li><a href="ad_product?type=backstage&Code={{$code}}&page={{$page-1}}">&laquo;</a></li>
                    @endif

                    @for( $i = 1 ; $i <= $pages ; $i++ )
                        @if ( $page - 5 < $i && $i < $page + 6 )
                            <li><a href="ad_product?type=backstage&Code={{$code}}&page={{$i}}">{{ $i }}</a></li>
                        @endif
                    @endfor

                    @if( $page != $pages )
                            <li><a href="ad_product?type=backstage&Code={{$code}}&page={{$page+1}}">&raquo;</a></li>
                    @endif
                </ul>
                <!-- 分頁 -->
            </div>
        </div>
    </div>
@include('admin.inc.menu')
</div>
@endsection
