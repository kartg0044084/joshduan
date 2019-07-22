<?php

namespace App\Services;

use Yish\Generators\Foundation\Service\Service;
use App\Repositories\AdminRepository; //載入資料庫查詢檔案
use Validator;


class AdminService extends Service
{
    protected $adminRepository;

    public function __construct(AdminRepository $adminRepository)
    {
        $this->adminRepository = $adminRepository;
    }

    public function saveadmin($admin, $remember_me)
    {
        $admin_data = [];
        foreach ($admin as $value) {
            $admin_data['id'] = $value['Ma_Id'];
            $admin_data['email'] = $value['Ma_Mail'];
            $admin_data['name'] = $value['Ma_Name'];
            $admin_data['level'] = $value['Ma_Level'];
        }

        session()->put('admin', $admin_data);
        if(isset($remember_me)){
            cookie()->queue('admin_email', $admin_data['email'], '10080');
        }else{
            cookie()->queue('admin_email', '', '-1');
        }
        return $admin_data;
    }
}
