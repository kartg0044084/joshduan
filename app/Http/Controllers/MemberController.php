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

    public function member_done(Request $request){
        $type = $request->input("type");
        switch ($type) {
            case 'register':
                $member = $this->memberRepository->postmember($request->email, $request->password, $request->name, $request->address, $request->phone);
                break;
            case 'login':
                $member = $this->memberRepository->getmember($request->email, $request->password);
                break;
        }
    }
}
