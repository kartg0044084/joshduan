<!--header start here-->
@inject('AdminPresenter', 'App\Presenters\AdminPresenter')
    <div class="header-main fixed">
        <div class="header-left">
                <div class="logo-name">
                         <a href="{{route('admin')}}"> <h1>購物商城</h1>
                      </a>
                </div>
                <div class="clearfix"> </div>
             </div>
             <div class="header-right">
                <div class="profile_details">
                    <ul>
                        <li class="dropdown profile_details_drop">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <div class="profile_img">
                                    <div class="user-name">
                                        <p>{{Session::get('admin')['name']}} 你好</p>
                                        <span>@if (Session::get('admin')['level'] == 1) 最高管理者 @else 一般管理員 @endif</span>
                                    </div>
                                    <i class="fa fa-angle-down lnr"></i>
                                    <i class="fa fa-angle-up lnr"></i>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                            <ul class="dropdown-menu drp-mnu">
                                {!! $AdminPresenter->comparelevel(Session::get('admin')['level']) !!}
                                <li> <a href="{{url('ad_logout')}}"><i class="fas fa-sign-out-alt"></i>登出</a> </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="clearfix"> </div>
            </div>
         <div class="clearfix"> </div>
    </div>
    <!--header start here-->
