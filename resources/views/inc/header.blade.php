@inject('MemberPresenter', 'App\Presenters\MemberPresenter')
@inject('CartPresenter', 'App\Presenters\CartPresenter')
@inject('OrderPresenter', 'App\Presenters\OrderPresenter')
<nav class="navbar navbar-light bg-light ">
    <a href="index" class="navbar-brand mb-0 h1" style="font-weight: bold;"><i class="fas fa-heart text-info mr-1"></i>josh 購物商城</a>
    <div class="dropdown ml-auto">
        <div class="btn btn-cart btn-sm">
            @if (!Session::get('member'))
            <a href="getmember">登入/ 註冊/</a>
            @endif
            <a href="javascript:void(0);" id="dropdownMenuButton">登入資訊/購物車/訂單查詢</a>
        </div>
        <div class="dropdown-menu dropdown-menu-right" style="min-width: 300px" aria-labelledby="dropdownMenuButton">
            <div class="p-3">
                    {!! $MemberPresenter->showmember_name() !!}
                    {!! $OrderPresenter->showorder() !!}
                    {!! $CartPresenter->showcart() !!}
            </div>
        </div>
    </div>
</nav>
<section>
    <div class="jumbotron jumbotron-fluid jumbotron-bg d-flex align-items-end">
        <div class="container jumbotron-text  text-white p-4">
            <h1 class="display-4 " style="font-weight: bold;">買到剁手手！年終出清！</h1>
            <p class="lead">全館滿 500 免運費，百萬商品輕鬆逛，輕鬆買，享受購物樂趣趁現在。</p>
        </div>
    </div>
</section>
