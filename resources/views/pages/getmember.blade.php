@extends('layouts.layouts')
@section('content')
@include('inc.header')
<div class="container mt-5" >
    <div class="h1 text-center"><strong>註冊 / 登入</strong></div>

    <div class="row justify-content-center mt-4">
        <div class="col-md-8">

            <div class="card text-center col-md-6 border-0 member">
                <div class="card-header border-0">
                    <div class="h3 mt-1">註冊</div>
                </div>
                <form class="needs-validation" action="{{route('member_done')}}" method="post" novalidate>
                    {{ csrf_field() }}
                    <div class="form-row text-left mt-3">
                        <div class="form-group col-md-12">
                            <label for="email">Email</label>
                            <input type="email" name="email" class="form-control register_email" id="email" placeholder="Email" required>
                            <div class="invalid-feedback">請填寫Email</div>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="password">密碼</label>
                            <input type="password" name="password" class="form-control" id="password" placeholder="password" required>
                            <div class="invalid-feedback">請填寫密碼</div>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="name">姓名</label>
                            <input type="name" name="name" class="form-control" id="name" placeholder="name" required>
                            <div class="invalid-feedback">請填寫姓名</div>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="address">地址</label>
                            <input type="address" name="address" class="form-control" id="address" placeholder="address" required>
                            <div class="invalid-feedback">請填寫地址</div>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="phone">電話</label>
                            <input type="phone" name="phone" class="form-control" id="phone" placeholder="phone" required>
                            <div class="invalid-feedback">請填寫電話</div>
                        </div>
                        <div class="form-group col-md-12 register_errormessage">
                            <label></label>
                        </div>
                    </div>

                    <div class="mt-3 d-flex justify-content-end">
                        <input type="hidden" name="type" value="register">
                        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                        <button type="submit" class="btn btn-primary register_member">送出</button>
                    </div>
                </form>
            </div>

            <div class="card text-center col-md-6 border-0 member">
                <div class="card-header border-0">
                    <div class="h3 mt-1">登入</div>
                </div>
                <form class="needs-validation" action="{{route('member_done')}}" method="post" novalidate>
                    {{ csrf_field() }}
                    <div class="form-row text-left mt-3">
                        <div class="form-group col-md-12">
                            <label for="email">Email</label>
                            <input type="email" name="email" class="form-control " id="email" placeholder="Email" required>
                            <div class="invalid-feedback">請填寫Email</div>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="password">密碼</label>
                            <input type="password" name="password" class="form-control" id="password" placeholder="password" required>
                            <div class="invalid-feedback">請填寫密碼</div>
                        </div>
                    </div>

                    <div class="mt-3 d-flex justify-content-end">
                        <input type="hidden" name="type" value="login">
                        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                        <button type="submit" class="btn btn-primary">送出</button>
                    </div>
                </form>
            </div>

        </div>
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
    @if($errors->count())
        @foreach ($errors->all() as $error)
        <script type="text/javascript">
            alert('{{$error}}');
        </script>
        @endforeach
    @endif
@endsection
