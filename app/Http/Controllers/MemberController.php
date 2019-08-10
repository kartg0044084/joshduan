<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Repositories\MemberRepository;
use App\Services\MemberService;

class MemberController extends Controller
{
    public function __construct(MemberRepository $memberRepository, MemberService $memberService)
    {
        $this->memberRepository = $memberRepository;
        $this->memberService = $memberService;
    }

    //登入會員頁面 o
    public function getmember(){
        return view('pages.getmember');
    }

    // ajax 查詢有無重複email帳號 o
    public function repeat_member(Request $request)
    {
        $email = $request->email;
        $repeat_member = $this->memberRepository->repeat_member($email);
        $message = $this->memberService->getmessage($repeat_member);
        return $message;
    }

    // 註冊 and 登入 o
    public function member_done(Request $request){
        $error_msg = '';
        switch ($request->type) {
            case 'register':
                $member = $this->memberRepository->postmember($request->reg_email, $request->reg_password, $request->reg_name, $request->city, $request->town, $request->postcode, $request->reg_address, $request->reg_phone);
                break;
            case 'login':
                $member = $this->memberRepository->getmember($request->log_email, $request->log_password);
                break;
        }
        if(empty($member)){
            $error_msg = '帳號密碼錯誤，請重新嘗試';
            return redirect('getmember')->withErrors($error_msg);
        }else{
            $mb_auth = $this->memberService->session_mb($member);
            if($mb_auth == 1){
                $error_msg = '歡迎回來，將導向至首頁開始您的購物體驗';
                return redirect('index')->withErrors($error_msg);
            }else{
                $auth = $this->memberRepository->auth($member);
                $error_msg = '會員尚未進行信箱驗證，已發送驗證通知信至會員信箱';
                return redirect('informal_member')->withErrors($error_msg);
            }
        }
    }

    // 登出 o
    public function logout()
    {
        session()->flush();
        return redirect('index')->withErrors('已登出，期待您再次蒞臨 josh 購物商城');
    }

    // 驗證信 o
    public function informal_member()
    {
        $string = session('string');
        return view('pages.informal_member',compact('string'));
    }

    // 驗證接收 o
    public function member_verification(Request $request){
        $error_msg = '';
        if(empty(session('member')) || empty($request->string)){
            $error_msg = '會員尚未登錄或驗證碼已過期，請登入後再次進行驗證';
            return redirect('getmember')->withErrors($error_msg);
        }

        if($request->string == session('string')){
            $mb_id = session('member.Mb_Id');
            $formal_member = $this->memberRepository->formal_member($mb_id);
            $error_msg = '恭喜您已完成信箱驗證，將導向至首頁開始您的購物體驗';
            return redirect('index')->withErrors($error_msg);
        }

    }
}
