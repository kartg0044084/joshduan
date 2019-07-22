@extends('admin.layouts.layouts')
@section('content')
<div class="page-container">
   <div class="left-content">
	   <div class="mother-grid-inner">
           @include('admin.inc.header')
            <div class="inner-block">
                <h1>修改商品資訊</h1>
                    <form id="managerfrom" action="{{route('ad_editproduct_done')}}" method="post">
                        {{ csrf_field() }}

                        @foreach($product as $value)
                        <h3><span class="label label-default">商品圖片</span></h3>
                        <img src="files/StoreProduct/{{$value['Pd_Img']}}" alt="{{$value['Pd_Name']}}" class="img-thumbnail img-width30">

                        <h3><span class="label label-default">商品名稱</span></h3>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled="disabled" value="{{$value['Pd_Name']}}">

                        <h3><span class="label label-default">價錢</span></h3>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="price" value="{{$value['Pd_Price']}}">

                        <h3><span class="label label-default">折扣 % 數</span></h3>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="discount" @if($value['Pd_Discount'] != '') value="{{$value['Pd_Discount']}}" @endif>

                        <h3><span class="label label-default">折扣後價錢</span></h3>
                        @if($value['Pd_Discount_Price'] != '') $ {{$value['Pd_Discount_Price']}} @else 未折扣 @endif

                        <h3><span class="label label-default">內容</span></h3>
                        <textarea id="editor" name="content">{{$value['Pd_Content']}}</textarea>

                        <h3><span class="label label-default">狀態</span></h3>

                        <label class="radio-inline">
                          <input type="radio" name="status"  value="1" @if($value['Pd_Status'] == 1) checked @endif >開啟
                        </label>
                        <label class="radio-inline">
                          <input type="radio" name="status"  value="0" @if($value['Pd_Status'] == 0) checked @endif >關閉
                        </label>

                        <h3><span class="label label-default">創建日期</span></h3>
                        {{$value['Pd_CreatedTime']}}
                        <h3><span class="label label-default">更新日期</span></h3>
                        @if($value['Pd_ModifiedTime'] != '') {{$value['Pd_ModifiedTime']}} @else 未更新 @endif
                        <div>
                            <input type="hidden" name="pd_id" value="{{$value['Pd_id']}}">
                        @endforeach
                            <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
        					<input type="submit" class="btn btn-info" value="送出">
                        </div>
                    </form>

            </div>
        </div>
    </div>
@include('admin.inc.menu')
</div>
@endsection
