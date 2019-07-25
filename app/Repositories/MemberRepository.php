<?php

namespace App\Repositories;

use Yish\Generators\Foundation\Repository\Repository;
use App\Models\Member; //Model
use App\Http\Controllers\MailController;  //寄信
use App\Services\MemberService;
use Illuminate\Http\Request;

class MemberRepository extends Repository
{
    private $member;
    private $mailController;

    public function __construct(Member $member, MemberService $memberService, MailController $mailController)
    {
        $this->member = $member;
        $this->mailController = $mailController;
        $this->memberService = $memberService;
        $this->time = date('Y-m-d');
    }

    public function repeat_member($email)
    {
        $member = $this->member->whereRaw('Mb_Email = "'.$email.'"')->get()->toArray();
        return $member;
    }

    public function postmember($email, $password, $name, $address, $phone)
    {
        $data = ['Mb_Email' => $email,
                 'Mb_Password' => $password,
                 'Mb_Name' => $name,
                 'Mb_Address' => $address,
                 'Mb_Phone' => $phone,
                 'Mb_Auth' => '0',
                 'Mb_CreatedTime' => $this->time
                 ];

         $member_add = $this->member->insertGetId($data);
         $member = $this->member->whereRaw('Mb_Id = "'.$member_add.'"')->first()->toArray();
         $savemember = $this->memberService->savemember($member);

         //寄驗證碼驗證信
         $mail = $this->mailController->mailpost();
         return $savemember;
    }

    public function formal_member($mb_id)
    {
        $data = ['Mb_Auth'=>'1'];
        $editproduct_done = $this->member->whereRaw('Mb_Id = '.$mb_id.'')->update($data);
        return $mb_id;
    }

    public function getmember($email, $password)
    {
        $member = $this->member->whereRaw('Mb_Email = "'.$email.'" AND Mb_Password = "'.$password.'"')->first()->toArray();
        $data = [];
        $data['Mb_Id'] = $member['Mb_Id'];
        $data['Mb_Email'] = $member['Mb_Email'];
        $data['Mb_Name'] = $member['Mb_Name'];

        session()->put('member', $data);
        return $member;
    }

    public function member_Auth($member)
    {
        //寄驗證碼驗證信
        $mail = $this->mailController->mailpost();
        return $member;
    }

}
