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

    public function mailpost()
    {
        $string = str_random(10);
        session()->put('string', $string);
        $email = session('member.Mb_Email');
        $name = session('member.Mb_Name');
        //從表單取得資料
        $from = ['email' => $email,
                 'name' => $name
                ];

        //填寫收信人信箱
        $to = ['email' => $email,
               'name' => $name
              ];

        //信件的內容(即表單填寫的資料)
        $data = ['email' => $email,
                 'name' => $name,
                 'string' => $string
                 ];

         //寄出信件
         Mail::send('emails.post', $data, function($message) use ($from, $to) {
             $message->from($from['email'], $from['name']);
             $message->to($to['email'], $to['name'])->subject('joshduane 購物商城會員驗證通知信');
            });

        return redirect('informal_member');
    }

}
