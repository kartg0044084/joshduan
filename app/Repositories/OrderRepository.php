<?php

namespace App\Repositories;
use App\Models\Order; //Model
use Yish\Generators\Foundation\Repository\Repository;

class OrderRepository extends Repository
{
    // protected $model;
    private $order;

    public function __construct(Order $order)
    {
        $this->order = $order;
        $this->time = date('Y-m-d');
    }

    public function editorder_status($MerchantTradeNo)
    {
        $data = ['Od_Status'=>'1',
                 'Od_ModifiedTime'=>$this->time];
        $editorder_status = $this->order->whereRaw('Od_MerchantTradeNo = "'.$MerchantTradeNo.'"')->update($data);

        return $MerchantTradeNo;
    }

    public function getmb_order($mb_id)
    {
        $member_order = $this->order->whereRaw('Mb_Id = "'.$mb_id.'"')->get()->toArray();
        return $member_order;
    }

    public function del_order($od_id)
    {
        $data = ['Od_Status'=>'6',
                 'Od_ModifiedTime'=>$this->time];
        $del_order = $this->order->whereRaw('Od_Id = "'.$od_id.'"')->update($data);
        return $del_order;
    }

    public function select_order($mb_id, $od_id)
    {
        $order = $this->order->whereRaw('Mb_Id = "'.$mb_id.'" AND Od_Id = "'.$od_id.'"')->first()->toArray();
        return $order;
    }
}
