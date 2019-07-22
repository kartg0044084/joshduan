@extends('admin.layouts.layouts')
@section('content')
@inject('AdminPresenter', 'App\Presenters\AdminPresenter')
<div class="page-container">
   <div class="left-content">
	   <div class="mother-grid-inner">
           @include('admin.inc.header')
            <div class="inner-block">
                <h1>管理者</h1>
                <table id="table">
                  <thead>
                    <tr>
                      <th>編號</th>
                      <th>email</th>
                      <th>姓名</th>
                      <th>權限</th>
                      <th>更新</th>
                    </tr>
                  </thead>
                  <tbody>
                    @if(count($manager_all) > 0)
                        @foreach($manager_all as $k=> $value)
                    <tr>
                        <td>{{$value['Ma_Id']}}</td>
                        <td>{{$value['Ma_Mail']}}</td>
                        <td>{{$value['Ma_Name']}}</td>
                        <td>@if($value['Ma_Level'] == 1) 最高管理者 @else 一般管理員 @endif</td>
                        @if (Session::get('admin')['level'] == 1)
                        <td>
                            <a class="btn btn-warning" href="{{route('ad_editmanager')}}?Ma_Id={{$value['Ma_Id']}}">修改</a>
                            {!! $AdminPresenter->compareadmin_id(Session::get('admin')['id'], $value['Ma_Id']) !!}
                        </td>
                        @else
                        <td>暫無功能</td>
                        @endif
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
