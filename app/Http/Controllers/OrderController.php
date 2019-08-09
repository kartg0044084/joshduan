<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Repositories\OrderRepository;
use App\Services\OrderService;
class OrderController extends Controller
{

    public function __construct(OrderRepository $orderRepository, OrderService $orderService)
    {
        $this->orderRepository = $orderRepository;
        $this->orderService = $orderService;
    }

    public function getorder_all()
    {
        if(empty(session('member'))){
            return view('pages.getmember')->withErrors('請登入會員，已方便處理訂單');
        }else{
            $mb_order = $this->orderRepository->getmb_order(session('member.Mb_Id'));
            if(empty($mb_order)){
                return redirect('')->withErrors('目前無訂單狀態，將導向至首頁');
            }else{
                return view('pages.order');
            }
        }
    }

    public function getorder(Request $request)
    {
        //查詢此筆訂單是否屬於該會員 避免 get
        $order = $this->orderRepository->select_order(session('member.Mb_Id'), $request->od_id);
        if(empty($order)){
            return redirect('getorder_all')->withErrors('無此訂單');
        }else{
            return view('pages.order_view')->with('order', $order);
        }
    }

    //此筆訂單取消
    public function del_order(Request $request)
    {
        $del_order = $this->orderRepository->del_order($request->od_id);
        return $del_order;
    }
}
