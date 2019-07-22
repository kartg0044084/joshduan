<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    // //填寫收信人信箱
    // $to = ['email' => $email,
    //        'name' => $name];
    public function __construct()
    {

    }

    public function mailpost($email, $password, $name, $address, $phone)
    {
        $string = str_random(40);
        //從表單取得資料
        $from = ['email' => $email,
                 'name' => $name,
                 'phone' => $phone
                ];

        //填寫收信人信箱
        $to = ['email' => $email,
               'name' => $name
              ];

        //信件的內容(即表單填寫的資料)
        $data = ['email' => $email,
                 'password' => $password,
                 'name' => $name,
                 'address' => $address,
                 'phone' => $phone,
                 'string' => $string
                 ];

         //寄出信件
         Mail::send('emails.post', $data, function($message) use ($from, $to) {
             $message->from($from['email'], $from['name']);
             $message->to($to['email'], $to['name'])->subject('Login Details');
            });
    }

}
