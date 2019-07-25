<?php

namespace App\Presenters;

class MemberPresenter
{
    public function showmember_name()
    {
        if(session('member')){
            $data = '<h6>'.session('member.Mb_Name').' 您好</h6>';
            $data.= '<tbody>';
            $data.= '<tr>';
            $data.= '<td class="align-middle text-right"><a href="#">更改會員資訊</a></td>';
            $data.= '<td class="align-middle text-right"><a href="logout">登出</a></td>';
            $data.= '</tr>';
            $data.= '</tbody>';
        }else{
            $data = '<h6>尚未登入</h6>';
        }
        return $data;
    }
}
