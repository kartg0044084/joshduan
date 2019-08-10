<?php

namespace App\Services;
use Yish\Generators\Foundation\Service\Service;

class MemberService extends Service
{
    public function __construct()
    {

    }

    public function getmessage($repeat_member)
    {
        $message = (empty($repeat_member)) ? ('success') : ('error');
        return $message;
    }

    public function session_mb($member)
    {
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
        return $data['Mb_Auth'];
    }
}
