<?php

namespace App\Presenters;
use App\Repositories\CartRepository;

class CartPresenter
{
    protected $cartRepository;

    public function __construct(CartRepository $cartRepository)
    {
        $this->cartRepository = $cartRepository;
    }

    public function showcart()
    {
        $data = '<table class="table table-sm ">';
        if(!empty(session('member'))){
            $mb_cart_cont = $this->cartRepository->getmb_cart_cont(session('member.Mb_Id'));
            if(session('member.Mb_Auth') == 1){
                if(!empty($mb_cart_cont['Ca_Content'])){
                    $carts = json_decode($mb_cart_cont['Ca_Content'], true);
                    $data.=     '<h6>已選擇商品</h6>';
                    $data.=     '<tbody>';
                    foreach ($carts as $value) {
                    $data.=         '<tr>';
                    $data.=             '<td class="align-middle">'.$value['pd_name'].'</td>';
                    $data.=             '<td class="align-middle">'.$value['pd_number'].'件</td>';
                    $data.=             '<td class="align-middle text-right">$'.$value['pd_price'] * $value['pd_number'].'</td>';
                    $data.=         '</tr>';
                    }
                    $data.=     '</tbody>';
                }else{
                    $data.= '<h6>購物車內尚無商品</h6>';
                }
            }else{
                $data.= '<h6>尚未驗證無法觀看購物車</h6>';
            }
        }else{
            $data.= '<h6>尚未登入無法觀看購物車</h6>';
        }
        $data.= '</table>';
        if(!empty($mb_cart_cont['Ca_Content'])){
        $data.= '<a href="cart" class="btn btn-block btn-primary btn-sm text-white">確認結帳</a>';
        }

        return $data;
    }

    public function showcart_data(){
        $mb_cart_cont = $this->cartRepository->getmb_cart_cont(session('member.Mb_Id'));
        $carts = json_decode($mb_cart_cont['Ca_Content'], true);

        $data = '';
        foreach ($carts as $value) {
        $data.= '<tr>';
        $data.=     '<td class="align-middle"><a href="javascript:void(0);" class="del_product" data-pdid="'.$value['pd_id'].'" data-name="'.$value['pd_name'].'"><i class="far fa-trash-alt mr-3"></i></a></td>';
        $data.=     '<td class="align-middle">';
        $data.=         '<div class="card p-1 card-bottom">';
        $data.=             '<img src="'.$value['pd_img'].'" alt="..." width="80px;">';
        $data.=         '</div>';
        $data.=     '</td>';
        $data.=     '<td class="align-middle"><a href="'.$value['pd_link'].'">'.$value['pd_name'].'</a></td>';
        $data.=     '<td class="align-middle">$'.$value['pd_price'].'</td>';
        $data.=     '<td class="align-middle">'.$value['pd_number'].'件</td>';
        $data.=     '<td class="align-middle text-right total" data-total="'.$value['pd_price'] * $value['pd_number'].'">$'.$value['pd_price'] * $value['pd_number'].'</td>';
        $data.= '</tr>';
        }

        return $data;
    }

}
