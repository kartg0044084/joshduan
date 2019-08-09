<?php

namespace App\Presenters;
use App\Repositories\OrderRepository;
class OrderPresenter
{
    protected $orderRepository;

    public function __construct(OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    public function showorder()
    {
        $data = '<table class="table table-sm">';
        if(!empty(session('member'))){
            $mb_order = $this->orderRepository->getmb_order(session('member.Mb_Id'));
            if(!empty($mb_order)){
                $data.=     '<h6>訂單</h6>';
                $data.=     '<tbody>';
                $data.=         '<tr>';
                $data.=             '<td class="align-middle text-right"><a href="getorder_all">觀看訂單</a></td>';
                $data.=         '</tr>';
                $data.=     '</tbody>';
            }else{
                $data.=     '<h6>尚無訂單</h6>';
            }
        }else{
            $data.=     '<h6>尚未登入無法觀看訂單</h6>';
        }
        $data.='</table>';

        return $data;
    }

    public function showorder_data(){
        $mb_order = $this->orderRepository->getmb_order(session('member.Mb_Id'));

        $data = '';
        foreach ($mb_order as $value) {
        $data.= '<tr>';
        $data.=     '<td class="align-middle"><a href="javascript:void(0);" class="del_order" data-odid="'.$value['Od_Id'].'" data-odstatus="'.$value['Od_Status'].'"><i class="far fa-trash-alt mr-3"></i></a></td>';
        $data.=     '<td class="align-middle">'.$value['Od_Id'].'</td>';
        $data.=     '<td class="align-middle">$'.$value['Od_Price'].'</td>';
        $data.=     '<td class="align-middle">'.$this->showstatus($value['Od_Status']).'</td>';
        $data.=     '<td class="align-middle">'.$value['Od_CreatedTime'].'</td>';
        if(empty($value['Od_ModifiedTime'])){
            $data.=     '<td class="align-middle">無更新</td>';
        }else{
            $data.=     '<td class="align-middle">'.$value['Od_ModifiedTime'].'</td>';
        }
        $data.=     '<td class="align-middle text-right"><a href="getorder?od_id='.$value['Od_Id'].'">進入</td>';
        $data.= '</tr>';
        }

        return $data;
    }

    public function showorder_cart($carts)
    {
        $carts = json_decode($carts, true);
            $data = '';
            foreach ($carts as $value) {
            $data.= '<tr>';
            $data.=     '<td class="align-middle"></td>';
            $data.=     '<td class="align-middle">';
            $data.=         '<div class="card p-1 card-bottom">';
            $data.=             '<img src="'.$value['pd_img'].'" alt="..." width="80px;">';
            $data.=         '</div>';
            $data.=     '</td>';
            $data.=     '<td class="align-middle">'.$value['pd_name'].'</td>';
            $data.=     '<td class="align-middle">$'.$value['pd_price'].'</td>';
            $data.=     '<td class="align-middle">'.$value['pd_number'].'件</td>';
            $data.=     '<td class="align-middle text-right total" data-total="'.$value['pd_price'] * $value['pd_number'].'">$'.$value['pd_price'] * $value['pd_number'].'</td>';
            $data.= '</tr>';
            }
            return $data;
    }

    public function showstatus($status)
    {
        switch ($status) {
            case '0':
                $status = '未付款';
                break;
            case '1':
                $status = '已付款';
                break;
            case '6':
                $status = '已取消';
                break;
        }

        return $status;
    }

}
