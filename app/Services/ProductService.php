<?php

namespace App\Services;

use Yish\Generators\Foundation\Service\Service;
use App\Repositories\ProductRepository; //載入資料庫查詢檔案
use Validator;

class ProductService extends Service
{
    protected $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function sort_category($category, $class, $route)
    {
        $data = [];
        foreach ($category as $k=> $value) {
            $data[$k]['cate_id'] = $value['Cate_id'];
            $data[$k]['name'] = $value['Category'.$class.''];
            $data[$k]['class'] = $class;
            $data[$k]['code'] = $value['Code'];
            $data[$k]['mappingid'] = $value['MappingId'];
            $data[$k]['category_type'] = $value['Category_Type'];
            $data[$k]['lastmodified'] = $value['LastModified'];
            $data[$k]['route'] = $route;
        }
        return $data;
    }

}
