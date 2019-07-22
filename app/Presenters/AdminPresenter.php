<?php

namespace App\Presenters;
use Cookie;

class AdminPresenter
{
    public function showadmin_email()
    {
        if (Cookie::get('admin_email')){
            $input = '<input type="text" name="email" value="'.Cookie::get('admin_email').'">';
        } else {
            $input = '<input type="text" name="email" placeholder="Email">';
        }

        return $input;
    }

    public function compareadmin_id($admin_id, $ma_Id)
    {
        if ($admin_id == $ma_Id){
            $a_link = '<a class="btn btn-danger"  href="javascript:void(0);">刪除</a>';
        }else{
            $a_link = '<a class="btn btn-danger"  href="ad_delmanager?Ma_Id='.$ma_Id.'">刪除</a>';
        }

        return $a_link;
    }

    public function comparelevel($admin_level)
    {
        if($admin_level == 1){
            $a_link = '<li> <a href="ad_editmanager?Ma_Id='.$admin_level.'"><i class="fa fa-cog"></i>資訊修改</a> </li>';
        }else{
            $a_link = '<li> <a href="javascript:void(0);"><i class="fa fa-cog"></i>暫無功能</a> </li>';
        }

        return $a_link;
    }
}
