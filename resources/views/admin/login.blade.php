@extends('admin.layouts.layouts')
@section('content')
@inject('AdminPresenter', 'App\Presenters\AdminPresenter')
<div class="login-page">
    <div class="login-main">
    	 <div class="login-head">
				<h1>登入</h1>
			</div>
			<div class="login-block">

				<form id="loginfrom" action="{{route('ad_checklogin')}}" method="post">
                    {{ csrf_field() }}

                    {!! $AdminPresenter->showadmin_email() !!}

                    <input type="password" name="password" class="lock" placeholder="密碼">
                    <div class="captcha">
                        <input type="text" class="text" name="captcha" placeholder="驗證碼">
                        <div class="captcha_img">
                            {!! captcha_img('flat') !!}
                        </div>
                        <button  class="btn btn-warning btn-refresh" type="button">重製</button>
                    </div>
                    <!-- 驗證碼錯誤訊息 -->
                    @if($errors->count())
                        @foreach ($errors->all() as $error)
                    <b class="error">{{$error}}</b>
                        @endforeach
                    @endif

					<div class="forgot-top-grids">
						<div class="forgot-grid">
							<ul>
								<li>
									<input type="checkbox" id="brand1" name="remember_me" value="remember_me" @if (Cookie::get('admin_email')) checked @endif>
									<label for="brand1"><span></span>記住帳號</label>
								</li>
							</ul>
						</div>
						<div class="clearfix"> </div>
					</div>
                    <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
					<input type="submit" value="登入">
				</form>

				<h5><a href="{{url('/')}}">回首頁</a></h5>
			</div>
      </div>
</div>
@endsection
