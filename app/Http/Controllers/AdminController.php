<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request; //這行很重要，因為它會載入request類別
use App\Repositories\AdminRepository; //載入資料庫查詢檔案
use App\Services\AdminService; //載入商業邏輯檔案
use Validator;

class AdminController extends Controller
{
    protected $adminRepository;
    protected $adminService;

    public function __construct(AdminRepository $adminRepository, AdminService $adminService)
    {
        $this->adminRepository = $adminRepository;
        $this->adminService = $adminService;
    }

    public function ad_index()
    {
        if (session()->has('admin')) {
            $manager_all = $this->adminRepository->getmanager_all();
            // 更新登錄者資訊
            $session_admin = session('admin');
            $select_session_admin = $this->adminRepository->getsession_admin($session_admin['id']);
            session()->put('admin', $select_session_admin);
            return view('admin.index')->with('manager_all', $manager_all);
        }
        return redirect('ad_login');
    }

    public function ad_login()
    {
        if (session()->has('admin')) {
            return redirect('admin');
        }
        return view('admin.login');
    }

    public function ad_checklogin(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            ['captcha' => 'required|captcha',],
            [
                'captcha.required'=>'請輸入驗證碼',
                'captcha.captcha'=>'驗證碼錯誤',
            ]
        );
        // 驗證失敗返回主頁
        if($validator->fails()){
            return redirect('ad_login')->withErrors($validator);
        }

        $admin = $this->adminRepository->getadmin($request->email, $request->password);
        $admin_data = $this->adminService->saveadmin($admin, $request->remember_me);
        if(!empty($admin)){
            return redirect('admin');
        }else{
            return redirect('ad_login')->withErrors('帳號密碼錯誤');
        }
    }

    public function ad_refresh_captcha()
    {
        return captcha_img('flat');
    }

    public function ad_logout()
    {
        session()->forget('admin');
        return redirect('ad_login');
    }

    public function ad_editmanager(Request $request)
    {
        $ma_id = $request->input("Ma_Id");
        $manager = $this->adminRepository->editmanager($ma_id);
        return view('admin.pages.editmanager')->with('manager', $manager);
    }

    public function ad_editmanager_done(Request $request)
    {
        $editmanager_done = $this->adminRepository->editmanager_done($request->ma_id, $request->password, $request->level);
        return redirect('admin');
    }

    public function ad_delmanager(Request $request)
    {
        $ma_id = $request->input("Ma_Id");
        $manager = $this->adminRepository->delmanager($ma_id);
        return redirect('admin');
    }
}
