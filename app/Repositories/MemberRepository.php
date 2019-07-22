<?php

namespace App\Repositories;

use Yish\Generators\Foundation\Repository\Repository;
use App\Models\Member; //Model
use App\Http\Controllers\MailController;  //寄信
use Illuminate\Http\Request;

class MemberRepository extends Repository
{
    private $member;
    private $mailController;

    public function __construct(Member $member, MailController $mailController)
    {
        $this->member = $member;
        $this->mailController = $mailController;
        $this->time = date('Y-m-d');
    }

    public function postmember($email, $password, $name, $address, $phone)
    {
        $data = ['email' => $email,
                 'password' => $password,
                 'name' => $name,
                 'address' => $address,
                 'phone' => $phone
                 ];
         //寄驗證碼驗證信
         $mail = $this->mailController->mailpost($email, $password, $name, $address, $phone);
    }

    public function getmember($email, $password)
    {

    }

}
