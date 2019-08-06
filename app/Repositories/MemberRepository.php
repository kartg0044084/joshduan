<?php

namespace App\Repositories;

use Yish\Generators\Foundation\Repository\Repository;
use App\Models\Member; //Model
use App\Models\Cart; //Model
use App\Http\Controllers\MailController;  //寄信
use App\Services\MemberService;
use Illuminate\Http\Request;

class MemberRepository extends Repository
{
    private $member;
    private $mailController;

    public function __construct(Member $member, Cart $cart, MemberService $memberService, MailController $mailController)
    {
        $this->member = $member;
        $this->cart = $cart;
        $this->mailController = $mailController;
        $this->memberService = $memberService;
        $this->time = date('Y-m-d');
    }

    public function repeat_member($email)
    {
        $member = $this->member->whereRaw('Mb_Email = "'.$email.'"')->get()->toArray();
        return $member;
    }

    public function postmember($email, $password, $name, $city, $town, $postcode, $address, $phone)
    {
        $data = ['Mb_Email' => $email,
                 'Mb_Password' => $password,
                 'Mb_Name' => $name,
                 'Mb_City' => $city,
                 'Mb_Town' => $town,
                 'Mb_Postcode' => $postcode,
                 'Mb_Address' => $address,
                 'Mb_Phone' => $phone,
                 'Mb_Auth' => '0',
                 'Mb_CreatedTime' => $this->time
                 ];

         $member_add = $this->member->insertGetId($data);
         $member = $this->member->whereRaw('Mb_Id = "'.$member_add.'"')->first()->toArray();
         $savemember = $this->memberService->savemember($member);

         //新增會員購物車資料庫
         $add_cart = ['Mb_Id' => $member_add,
                      'Ca_CreatedTime' => $this->time
                      ];
         $member_cart_add = $this->cart->insertGetId($add_cart);
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
        $member = $this->member->whereRaw('Mb_Email = "'.$email.'" AND Mb_Password = "'.$password.'"')->get()->toArray();
        $data = [];
        foreach ($member as $k => $value) {
            $data['Mb_Id'] = $value['Mb_Id'];
            $data['Mb_Email'] = $value['Mb_Email'];
            $data['Mb_Name'] = $value['Mb_Name'];
            $data['Mb_City'] = $value['Mb_City'];
            $data['Mb_Town'] = $value['Mb_Town'];
            $data['Mb_Postcode'] = $value['Mb_Postcode'];
            $data['Mb_Address'] = $value['Mb_Address'];
            $data['Mb_Phone'] = $value['Mb_Phone'];
            $data['Mb_Auth'] = $value['Mb_Auth'];
        }

        session()->put('member', $data);
        return $data;
    }

    public function member_Auth($member)
    {
        //寄驗證碼驗證信
        $mail = $this->mailController->mailpost();
        return $member;
    }

}
