<?php

namespace App\Repositories;

use Yish\Generators\Foundation\Repository\Repository;
use App\Models\Admin; //Model
class AdminRepository extends Repository
{
    private $admin;

    public function __construct(Admin $admin)
    {
        $this->admin = $admin;
    }

    public function getadmin($email, $password)
    {
        $admin = $this->admin->whereRaw('Ma_Mail = "'.$email.'" AND Ma_Password = "'.$password.'"')->get()->toArray();
        return $admin;
    }

    public function getsession_admin($ma_id)
    {
        $admin = $this->admin->whereRaw('Ma_Id = '.$ma_id.'')->get()->toArray();
        $admin_data = [];
        foreach ($admin as $value) {
            $admin_data['id'] = $value['Ma_Id'];
            $admin_data['email'] = $value['Ma_Mail'];
            $admin_data['name'] = $value['Ma_Name'];
            $admin_data['level'] = $value['Ma_Level'];
        }
        return $admin_data;
    }

    public function getmanager_all()
    {
        $manager_all = $this->admin->get()->toArray();
        return $manager_all;
    }

    public function editmanager($ma_id)
    {
        $manager = $this->admin->whereRaw('Ma_Id = '.$ma_id.'')->get()->toArray();
        return $manager;
    }

    public function editmanager_done($ma_id, $password, $level)
    {
        $data = ['Ma_Password'=>$password,
                 'Ma_Level'=>$level];

        $editmanager_done = $this->admin->whereRaw('Ma_Id = '.$ma_id.'')->update($data);
        return $editmanager_done;
    }

    public function delmanager($ma_id)
    {
        $delmanager = $this->admin->whereRaw('Ma_Id = '.$ma_id.'')->delete();
        return $delmanager;
    }
}
