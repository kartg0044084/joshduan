<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Repositories\PagesRepository;
use App\Repositories\ProductRepository;

class PagesController extends Controller
{
    public function __construct(PagesRepository $pagesRepository, ProductRepository $productRepository)
    {
        $this->pagesRepository = $pagesRepository;
        $this->productRepository = $productRepository;
    }

    public function index(){
        $discount_product = $this->productRepository->getdiscount_product();
        return view('index',compact('discount_product'));
    }

    public function getcategory2(Request $request)
    {
        $getcategory2 = $this->productRepository->getcategory2($request->code);
        return $getcategory2;
    }

    public function returncategory1()
    {
        $getcategory1 = $this->productRepository->getcategory1();
        return $getcategory1;
    }
}
