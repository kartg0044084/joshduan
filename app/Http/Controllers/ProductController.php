<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request; //這行很重要，因為它會載入request類別
use App\Repositories\ProductRepository;
use App\Services\ProductService;
use Validator;

class ProductController extends Controller
{
    protected $productRepository;
    protected $productService;

    public function __construct(ProductRepository $productRepository, ProductService $productService)
    {
        $this->productRepository = $productRepository;
        $this->productService = $productService;
    }

    public function ad_category1(){
        //先按大分類查看
        $category1 = $this->productRepository->getcategory1();
        $class = '1';
        $route = 'ad_category2';
        $category1_data = $this->productService->sort_category($category1, $class, $route);
        return view('admin.pages.category')->with('category', $category1_data);
    }

    public function ad_category2(Request $request)
    {
        $code = $request->input("Code");
        $class = '2';
        $route = 'ad_product';
        $category2 = $this->productRepository->getcategory2($code);
        $category2_data = $this->productService->sort_category($category2, $class, $route);
        return view('admin.pages.category')->with('category', $category2_data);
    }

    public function ad_product(Request $request)
    {
        session()->put('request_url', $_SERVER['REQUEST_URI']); //記得當前列表 url 修改商品返回使用
        $code = $request->input("Code");
        $type = $request->input("type");
        $product_all = $this->productRepository->getproduct_all($code);
        $data_nums = count($product_all); //統計總筆數
        $per = '12'; //每頁顯示項目數量
        $pages = ceil($data_nums/$per); //取得不小於值的下一個整數
        if (!isset($_GET["page"])){ //假如$_GET["page"]未設置
            $page = 1; //則在此設定起始頁數
        } else {
            $page = intval($_GET["page"]); //確認頁數只能夠是數值資料
        }
        // ajax_product
        if($type == 'ajax_product'|| $type == 'ajax_page'){
            $page = intval($request->page);
        }
        // ajax_product
        $start = ($page-1) * $per; //每一頁開始的資料序號
        $product_page_all = $this->productRepository->getproduct_page_all($code, $start, $per);
        // 前後台轉換
        switch ($type) {
           case "backstage":
             return view('admin.pages.product',compact('product_page_all', 'code', 'data_nums', 'page', 'pages'));
             break;
           case "reception":
             return view('pages.product',compact('product_page_all', 'code', 'data_nums', 'page', 'pages'));
             break;
           case "ajax_product":
             return $product_page_all;
             break;
           case "ajax_page":
             $page_data = [];
             $page_data['code'] = $code;
             $page_data['data_nums'] = $data_nums;
             $page_data['page'] = $page;
             $page_data['pages'] = $pages;
             return $page_data;
             break;
        }
    }

    public function ad_editproduct(Request $request)
    {
        $code = $request->input("Pd_id");
        $product = $this->productRepository->editproduct($code);
        return view('admin.pages.editproduct')->with('product', $product);
    }

    public function ad_editproduct_done(Request $request)
    {
        $editproduct_done = $this->productRepository->editproduct_done($request->pd_id, $request->price, $request->content, $request->status, $request->discount);
        $request_url = session()->get('request_url');
        return redirect($request_url);
    }

}
