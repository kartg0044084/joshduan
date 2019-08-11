<?php

namespace App\Repositories;

use Yish\Generators\Foundation\Repository\Repository;
use App\Models\Cart; //Model
use App\Models\Order; //Model
class CartRepository extends Repository
{
    protected $model;

    public function __construct(Cart $cart, Order $order)
    {
        $this->cart = $cart;
        $this->order = $order;
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

    public function saveorder($mb_id, $cart_content, $amount, $name, $email, $city, $town, $postcode, $address)
    {
        $data = $this->data_list($mb_id, $cart_content, $amount, $name, $email, $city, $town, $postcode, $address);
        $saveorder = $this->order->insertGetId($data);

        return $data['Od_MerchantTradeNo'];
    }

    public function updateorder($od_id, $mb_id, $cart_content, $amount, $name, $email, $city, $town, $postcode, $address)
    {
        $data = $this->data_list($mb_id, $cart_content, $amount, $name, $email, $city, $town, $postcode, $address);
        $data['Od_ModifiedTime'] = $this->time;
        $update_order = $this->order->whereRaw('Mb_Id = '.$mb_id.' AND Od_Id = '.$od_id.'')->update($data);

        return $data['Od_MerchantTradeNo'];
    }

    public function data_list($mb_id, $cart_content, $amount, $name, $email, $city, $town, $postcode, $address)
    {
        $order_no = 'NO'.time().''.$mb_id.'';
        $data = ['Od_MerchantTradeNo'=> $order_no,
                 'Mb_Id'=> $mb_id,
                 'Od_Content'=> $cart_content,
                 'Od_Name'=> $name,
                 'Od_Email'=> $email,
                 'Od_City'=> $city,
                 'Od_Town'=> $town,
                 'Od_Postcode'=> $postcode,
                 'Od_Address'=> $address,
                 'Od_Price'=> $amount,
                 'Od_Status'=> (int)0,
                 'Od_CreatedTime'=> $this->time];

       return $data;
    }
}
