@extends('admin.layouts.layouts')
@section('content')
<div class="page-container">
   <div class="left-content">
	   <div class="mother-grid-inner">
           @include('admin.inc.header')
            <div class="inner-block">
                <h1>修改管理者資訊</h1>
                    <form id="managerfrom" action="{{route('ad_editmanager_done')}}" method="post">
                        {{ csrf_field() }}

                        @foreach($manager as $value)
                        <h3><span class="label label-default">帳號</span></h3>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled="disabled" value="{{$value['Ma_Mail']}}">

                        <h3><span class="label label-default">密碼</span></h3>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="password" value="{{$value['Ma_Password']}}">

                        <h3><span class="label label-default">權限</span></h3>

                        <label class="radio-inline">
                          <input type="radio" name="level"  value="1" @if($value['Ma_Level'] == 1) checked @endif>最高管理者
                        </label>
                        <label class="radio-inline">
                          <input type="radio" name="level"  value="0" @if($value['Ma_Level'] == 0) checked @endif>一般管理員
                        </label>

                        <div>
                            <input type="hidden" name="ma_id" value="{{$value['Ma_Id']}}">
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
