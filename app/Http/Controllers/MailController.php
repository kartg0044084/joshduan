<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function __construct()
    {

    }

    public function mailpost()
    {
        $string = str_random(10);
        session()->put('string', $string);

        //信件的內容(即表單填寫的資料)
        $data = ['email' => session('member.Mb_Email'),
                 'name' => session('member.Mb_Name'),
                 'string' => $string
                 ];

         //寄出信件
         Mail::send('emails.post', $data, function($message) use ($data, $data) {
             $message->from($data['email'], $data['name']);
             $message->to($data['email'], $data['name'])->subject('joshduane 購物商城會員驗證通知信');
            });

        return redirect('informal_member');
    }

}
