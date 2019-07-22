<?php

namespace App\Repositories;

use Yish\Generators\Foundation\Repository\Repository;
use App\Models\Category; //Model
use App\Models\Product; //Model
class ProductRepository extends Repository
{
    // protected $model;
    private $category;
    private $product;

    public function __construct(Category $category, Product $product)
    {
        $this->category = $category;
        $this->product = $product;
        $this->time = date('Y-m-d');
    }

    public function getdiscount_product()
    {
        $discount_product = $this->product->whereRaw('Pd_Discount != "NULL" AND Pd_Discount_Price != "NULL" AND Pd_Status != 0 ORDER BY RAND() LIMIT 12')->get()->toArray();
        return $discount_product;
    }

    public function getcategory1()
    {
        $category1 = $this->category->whereRaw('Category1 != ""')->get()->toArray();
        return $category1;
    }

    public function getcategory2($code)
    {
        $category2 = $this->category->whereRaw('Category1 = "" AND MappingId = '.$code.'')->get()->toArray();
        return $category2;
    }

    public function getproduct_all($code)
    {
        $product_all = $this->product->whereRaw('Pd_Category2 = '.$code.' AND Pd_Status != 0 ')->get()->toArray();
        return $product_all;
    }

    public function getproduct_page_all($code, $start, $per)
    {
        $product_page_all = $this->product->whereRaw('Pd_Category2 = '.$code.' AND Pd_Status != 0 LIMIT '.$start.', '.$per.'')->get()->toArray();
        return $product_page_all;
    }

    public function editproduct($code)
    {
        $product = $this->product->whereRaw('Pd_id = '.$code.'')->get()->toArray();
        return $product;
    }

    public function editproduct_done($pd_id, $price, $content, $status, $discount)
    {
        if(empty($discount)){
            $discount = $discount_price = null;
        }else{
            $deal_discount = '0.'.$discount;
            $discount_price = ($price * $deal_discount);
            // 算出價格採用無條件捨去
            $discount_price = floor($discount_price);
        }

        $data = ['Pd_Price'=>$price,
                 'Pd_Content'=>$content,
                 'Pd_Status'=>$status,
                 'Pd_ModifiedTime'=>$this->time,
                 'Pd_Discount'=>$discount,
                 'Pd_Discount_Price'=>$discount_price];

         $editproduct_done = $this->product->whereRaw('Pd_id = '.$pd_id.'')->update($data);
         return $editproduct_done;
    }

}
