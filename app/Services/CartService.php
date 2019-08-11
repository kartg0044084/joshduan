<?php

namespace App\Services;
use Yish\Generators\Foundation\Service\Service;

class CartService extends Service
{
    public function __construct()
    {

    }

    public function getdata($request)
    {
        $data['pd_number'] = $request->pd_number;
        $data['pd_id'] = $request->pd_id;
        $data['pd_name'] = $request->pd_name;
        $data['pd_price'] = $request->pd_price;
        $data['pd_link'] = $request->pd_link;
        $data['pd_img'] = $request->pd_img;

        return $data;
    }
}
