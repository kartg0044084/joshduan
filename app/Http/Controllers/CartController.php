<?php

namespace App\Http\Controllers;
use App\Repositories\CartRepository; //載入資料庫查詢檔案
use App\Http\Controllers\AllpayController;  //載入歐付寶
use Illuminate\Http\Request;

class CartController extends Controller
{
    protected $cartRepository;

    public function __construct(CartRepository $cartRepository, AllpayController $allpayController)
    {
        $this->cartRepository = $cartRepository;
        $this->allpayController = $allpayController;
    }

    public function cart()
    {
        if(empty(session('member'))){
            return view('pages.getmember')->withErrors('請登入會員，已方便進行結帳動作');
        }else{
            $mb_cart_cont = $this->cartRepository->getmb_cart_cont(session('member.Mb_Id'));
            $carts = json_decode($mb_cart_cont['Ca_Content'], true);
            if(empty($carts)){
                return redirect('')->withErrors('購物車內已無商品，將導向至首頁選取商品');
            }else{
                return view('pages.cart');
            }
        }

    }

    public function add_cart(Request $request)
    {
        // 重要
        $data['pd_number'] = $request->pd_number;
        $data['pd_id'] = $request->pd_id;
        $data['pd_name'] = $request->pd_name;
        $data['pd_price'] = $request->pd_price;
        $data['pd_link'] = $request->pd_link;
        $data['pd_img'] = $request->pd_img;

        $mb_cart_cont = $this->cartRepository->getmb_cart_cont($request->mb_id);
        if(empty($mb_cart_cont['Ca_Content'])){
            $carts = [];
            array_push($carts, $data);
            //轉換為 json 格式方便存入資料庫
            $carts = json_encode($carts);
            $mb_cart_update = $this->cartRepository->mb_cart_update($request->mb_id, $carts);
            $carts = json_decode($carts, true);
        }else{
            $carts = json_decode($mb_cart_cont['Ca_Content'], true);
            // 陣列中有存在相同商品
            $presence = false;
            foreach ($carts as $k => &$cart) {
                if($cart['pd_id'] == $data['pd_id']){
                    $cart['pd_number'] = $cart['pd_number'] + $data['pd_number'];
                    $presence = true;
                }
            }

            if($presence == true){
                $carts = json_encode($carts);
                $mb_cart_update = $this->cartRepository->mb_cart_update($request->mb_id, $carts);
                $carts = json_decode($carts, true);
            }
            // 陣列中不存在相同商品
            $key = array_search($data['pd_id'], array_column($carts, 'pd_id'));
            if(!is_int($key)){
                array_push($carts, $data);
                $carts = json_encode($carts);
                $mb_cart_update = $this->cartRepository->mb_cart_update($request->mb_id, $carts);
                $carts = json_decode($carts, true);
            }
        }
        return $carts;
        // if(empty(session('cart'))){
        //     session()->put('cart', []);
        //     session()->push('cart', $data);
        // }else{
        //     $carts = session()->get('cart');
        //     foreach ($carts as $k => &$cart) {
        //         if($cart['pd_id'] == $data['pd_id']){
        //             $cart['pd_number'] = $cart['pd_number'] + $data['pd_number'];
        //         }
        //     }
        //     // 实现二维陣列查找指定 value 值的 key
        //     $key = array_search($data['pd_id'], array_column($carts, 'pd_id'));
        //     // 有找到 $key 將訂義 int 形態以此判斷
        //     if(!is_int($key)){
        //         array_push($carts, $data);
        //     }
        //
        //     session()->put('cart', $carts);
        // }

        // $cart_all = session('cart');
        // return $cart_all;
    }

    public function del_cart(Request $request)
    {
        $mb_cart_cont = $this->cartRepository->getmb_cart_cont(session('member.Mb_Id'));
        $carts = json_decode($mb_cart_cont['Ca_Content'], true);
        // 刪除陣列 key 值
        $key = array_search($request->pd_id, array_column($carts, 'pd_id'));
        unset($carts[$key]);
        $carts = array_values($carts);
        $carts = json_encode($carts);
        $mb_cart_update = $this->cartRepository->mb_cart_update(session('member.Mb_Id'), $carts);
        // 如購物車為空，變為 null 值
        $mb_cart_cont = $this->cartRepository->getmb_cart_cont(session('member.Mb_Id'));
        if($mb_cart_cont['Ca_Content'] == '[]'){
            $carts = null;
            $mb_cart_update = $this->cartRepository->mb_cart_update(session('member.Mb_Id'), $carts);
        }
        return $carts;
    }

    public function checkout(Request $request)
    {
        $mb_cart_cont = $this->cartRepository->getmb_cart_cont(session('member.Mb_Id'));
        $carts = json_decode($mb_cart_cont['Ca_Content'], true);
        $data = [];
        $amount = 0;
        foreach ($carts as $k => $cart) {
            $product['Name'] = $cart['pd_name'];
            $product['Price'] = (int)$cart['pd_price'];
            $product['Currency'] = '元';
            $product['Quantity'] = (int)$cart['pd_number'];
            $product['URL'] = $cart['pd_link'];
            $amount = $amount + (int)$cart['pd_price'] * (int)$cart['pd_number'];
            array_push($data, $product);
        }
        if($amount < 500){
            $amount = $amount + 80;
        }
        // 歐付寶處理
        $allpay = $this->allpayController->allpaycheckout($data, $amount);
    }
}
