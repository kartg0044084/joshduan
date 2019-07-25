<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Repositories\MemberRepository;

class MemberController extends Controller
{
    protected $memberRepository;

    public function __construct(MemberRepository $memberRepository)
    {
        $this->memberRepository = $memberRepository;
    }

    public function getmember(){
        return view('pages.getmember');
    }

    public function repeat_member(Request $request)
    {
        $email = $request->email;
        $repeat_member = $this->memberRepository->repeat_member($email);
        if(empty($repeat_member)){
            $message = 'success';
        }else{
            $message = 'error';
        }
        return $message;
    }

    public function member_done(Request $request){
        $type = $request->input("type");
        switch ($type) {
            case 'register':
                $member = $this->memberRepository->postmember($request->email, $request->password, $request->name, $request->address, $request->phone);
                return redirect('informal_member');
                break;
            case 'login':
                $member = $this->memberRepository->getmember($request->email, $request->password);
                if(!empty($member)){
                    if($member['Mb_Auth'] != 1){
                        $member_Auth = $this->memberRepository->member_Auth($member);
                        return redirect('informal_member');
                    }else{
                        return redirect('');
                    }
                }else{
                    return view('pages.getmember')->withErrors('帳號密碼錯誤，請重新嘗試');
                }
                break;
        }
    }

    public function logout()
    {
        session()->flush();
        return redirect('')->withErrors('已登出，期待您再次蒞臨 josh 購物商城');
    }

    public function informal_member()
    {
        $string = session('string');
        return view('pages.informal_member',compact('string'));
    }

    public function member_verification(Request $request){
        $string = $request->input("string");
        if(empty(session('member')) && empty($string)){
            return view('pages.getmember')->withErrors('會員尚未登錄，請登入後再次進行驗證');
        }
        if(empty(session('string'))){
            return view('pages.getmember')->withErrors('驗證碼已過期，請登入後再次進行驗證');
        }

        if($string == session('string')){
            $mb_id = session('member.Mb_Id');
            $formal_member = $this->memberRepository->formal_member($mb_id);
            return redirect('')->withErrors('恭喜您已完成信箱驗證，將導向至首頁開始您的購物體驗');
        }

    }
}
