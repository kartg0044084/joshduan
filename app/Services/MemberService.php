<?php

namespace App\Services;

use Yish\Generators\Foundation\Service\Service;
// use App\Repositories\MemberRepository; //載入資料庫查詢檔案

class MemberService extends Service
{
    protected $memberRepository;

    // public function __construct(MemberRepository $memberRepository)
    // {
    //     $this->memberRepository = $memberRepository;
    // }
    public function __construct()
    {

    }

    public function savemember($member)
    {
        $data = [];
        $data['Mb_Id'] = $member['Mb_Id'];
        $data['Mb_Email'] = $member['Mb_Email'];
        $data['Mb_Name'] = $member['Mb_Name'];

        session()->put('member', $data);
        return $data;
    }
}
