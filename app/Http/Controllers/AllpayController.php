<?php

namespace App\Http\Controllers;
use App\Repositories\OrderRepository;
//歐付寶 api
use Illuminate\Http\Request;
use AllInOne;
use EncryptType;
use OpayPaymentMethod;
use Exception;
use PaymentMethod;
use OpayAllInOne;
use OpayEncryptType;

class AllpayController extends Controller
{
    protected $orderRepository;

    public function __construct(OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    public function allpaycheckout($order_no, $amount, $data)
    {
        try {
            $obj = new AllInOne();
            //服務參數
            $obj->ServiceURL  = "https://payment-stage.opay.tw/Cashier/AioCheckOut/V5";
            //服務位置
            $obj->HashKey     = env('HASHKEY');
            //測試用Hashkey，請自行帶入AllPay提供的HashKey
            $obj->HashIV      = env('HASHIV');
            //測試用HashIV，請自行帶入AllPay提供的HashIV
            $obj->MerchantID  = env('MERCHANTID');
            //測試用MerchantID，請自行帶入AllPay提供的MerchantID
            $obj->EncryptType = EncryptType::ENC_SHA256;
            //CheckMacValue加密類型，請固定填入1，使用SHA256加密
            //基本參數(請依系統規劃自行調整)
            $obj->Send['ReturnURL'] = env('ALLPAYRETURNURL');
            //付款完成通知回傳的網址
            $obj->Send['MerchantTradeNo']   = $order_no;
            //訂單編號
            $obj->Send['MerchantTradeDate'] = date('Y/m/d H:i:s');
            //交易時間
            $obj->Send['TotalAmount']       = $amount;
            //交易金額
            $obj->Send['TradeDesc']         = "josh 購物商城付款";
            //交易描述
            $obj->Send['ChoosePayment']     = OpayPaymentMethod::Credit ;
            //付款方式:WebATM
            //訂單的商品資料
            foreach ($data as $k => $value) {
                array_push($obj->Send['Items'], $value);
            }
            //產生訂單(auto submit至AllPay)
            $obj->CheckOut();

        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function allpayrecevie(Request $request)
    {
        try {
            $obj = new OpayAllInOne();
            /* 服務參數 */
            $obj->HashKey     = env('HASHKEY');
            $obj->HashIV      =  env('HASHIV');
            $obj->MerchantID  = env('MERCHANTID');
            $obj->EncryptType = OpayEncryptType::ENC_SHA256;
            /* 取得回傳參數 */
            $arFeedback = $obj->CheckOutFeedback();
            // 參數寫入檔案
            if(true){
                $sLog_Path  = __DIR__.'/allpay_log/sample_payment_return.log' ; // LOG路徑
                $sLog = '+++++++++++++++++++++++++++++++++++++++ 接收回傳參數 ' . date('Y-m-d H:i:s') . ' ++++++++++++++++++++++++++++++++++++++++++++' . "\n";
                $fp=fopen($sLog_Path, "a+");
                fputs($fp, $sLog);
                fclose($fp);
                $sLog_File =  print_r($arFeedback, true). "\n";
                $fp=fopen($sLog_Path, "a+");
                fputs($fp, $sLog_File);
                fclose($fp);
            }
            echo '1|OK' ;
            //回傳成功時，更改此一訂單之狀態
            $editorder_status = $this->orderRepository->editorder_status($request->MerchantTradeNo);
            } catch (Exception $e) {
                if(true){
                    $sLog_Path  = __DIR__.'/allpay_log/sample_payment_return.log' ; // LOG路徑
                    $sLog = '+++++++++++++++++++++++++++++++++++++++ 接收回傳參數(ERROR) ' . date('Y-m-d H:i:s') . ' ++++++++++++++++++++++++++++++++++++++++++++' . "\n";
                    $fp=fopen($sLog_Path, "a+");
                    fputs($fp, $sLog);
                    fclose($fp);
                    $sLog_File =  $e->getMessage(). "\n";
                    $fp=fopen($sLog_Path, "a+");
                    fputs($fp, $sLog_File);
                    fclose($fp);
                }
            }
    }
}
