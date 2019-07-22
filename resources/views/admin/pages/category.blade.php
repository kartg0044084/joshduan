@extends('admin.layouts.layouts')
@section('content')
<div class="page-container">
   <div class="left-content">
	   <div class="mother-grid-inner">
           @include('admin.inc.header')
            <div class="inner-block">
                <h1>分類管理</h1>
                <table id="table">
                  <thead>
                    <tr>
                      <th>編號</th>
                      <th>類別</th>
                      <th>分類名稱</th>
                      <th>狀態</th>
                      <th>創建日期</th>
                      <th>連結</th>
                    </tr>
                  </thead>
                  <tbody>
                    @if(count($category) > 0)
                        @foreach($category as $k=> $value)
                    <tr>
                        <td>{{$value['cate_id']}}</td>
                        <td>@if($value['class'] == 1) 大分類 @elseif($value['class'] == 2) 中分類 @endif</td>
                        <td>{{$value['name']}}</td>
                        <td>@if($value['category_type'] == 1) 開啟 @else 關閉 @endif</td>
                        <td>{{$value['lastmodified']}}</td>
                        <td>
                        <a class="btn btn-warning" href="{{$value['route']}}?type=backstage&Code={{$value['code']}}">進入</a>
                        </td>
                    </tr>
                        @endforeach
                    @endif
                  </tbody>
                </table>
            </div>
        </div>
    </div>
@include('admin.inc.menu')
</div>
@endsection
