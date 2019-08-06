<?php

namespace App\Repositories;

use Yish\Generators\Foundation\Repository\Repository;
use App\Models\Cart; //Model
class CartRepository extends Repository
{
    protected $model;

    public function __construct(Cart $cart)
    {
        $this->cart = $cart;
        $this->time = date('Y-m-d');
    }

    public function getmb_cart_cont($mb_id)
    {
        $mb_cart = $this->cart->whereRaw('Mb_Id = "'.$mb_id.'"')->first()->toArray();
        return $mb_cart;
    }

    public function mb_cart_update($mb_id, $carts)
    {
        if($carts != null){
            $carts = ''.$carts.'';
        }
        $data = ['Ca_Content'=> $carts,
                 'Ca_ModifiedTime'=> $this->time];

        $update_cart = $this->cart->whereRaw('Mb_Id = '.$mb_id.'')->update($data);
        return $data;
    }
}
