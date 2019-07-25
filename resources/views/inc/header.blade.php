@inject('MemberPresenter', 'App\Presenters\MemberPresenter')
<nav class="navbar navbar-light bg-light ">
    <a href="" class="navbar-brand mb-0 h1" style="font-weight: bold;"><i class="fas fa-heart text-info mr-1"></i>josh 購物商城</a>
    <div class="dropdown ml-auto">
        <div class="btn btn-cart btn-sm">
            <a href="getmember">登入/ 註冊/</a>
            <a href="#" id="dropdownMenuButton">登入資訊/購物車</a>
        </div>
        <div class="dropdown-menu dropdown-menu-right" style="min-width: 300px" aria-labelledby="dropdownMenuButton">
            <div class="p-3">
                <table class="table table-sm">
                    {!! $MemberPresenter->showmember_name() !!}
                </table>

                <table class="table table-sm ">
                    <h6>已選擇商品</h6>
                    <tbody>
                        <tr>
                            <td class="align-middle text-center">
                                <a href="#removeModal" data-price="999" data-title="一級偽裝帽" data-toggle="modal"
                                    data-target="#removeModal"><i class="far fa-trash-alt "></i></a>
                            </td>
                            <td class="align-middle">一級偽裝帽</td>
                            <td class="align-middle text-right">$999</td>
                        </tr>
                    </tbody>
                </table>
                <a href="#" class="btn btn-block btn-primary btn-sm text-white">確認結帳</a>
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
