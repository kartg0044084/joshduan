<?php
/**
 * Yahoo 分類爬蟲
 */
class Yahoo {
      /**
     * construct
     */
    public function __construct () {}

    /**
     * 廠商API
     *
     * @param  integer $page
     * @return object|false
     */
    public function category ($url)
    {
        $result = $this->callAPI($url);
        return $result;
    }

    // public function category2 ($url)
    // {
    //     $result = $this->callAPI2($url);
    //     return $result;
    // }
  /**
     * Call API
     *
     * @param  string $url
     * @return mixed
     */
    private function callAPI ($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        //SSL信任認為認證
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch,CURLOPT_FOLLOWLOCATION,true);
        curl_setopt($ch, CURLOPT_REFERER, $url);
        //加入User Agent 模擬browser行為
        curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0");
        //Header
        curl_setopt($ch , CURLOPT_HEADER, 0);
        $result = curl_exec($ch);
        //狀態
        $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($status == 200) {
            return $result;
        }

        return false;
    }

    // private function callAPI2 ($url)
    // {
    //     $ch = curl_init();
    //     curl_setopt($ch, CURLOPT_URL, $url);
    //     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    //     //SSL信任認為認證
    //     curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    //     curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    //     //curl_setopt($ch,CURLOPT_FOLLOWLOCATION,true);
    //     curl_setopt($ch,CURLOPT_FOLLOWLOCATION,false);
    //     curl_setopt($ch, CURLOPT_REFERER, $url);
    //     //加入User Agent 模擬browser行為
    //     curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0");
    //     //Header
    //     curl_setopt($ch , CURLOPT_HEADER, 0);
    //     //curl_setopt($ch , CURLOPT_HEADER, 1);
    //     $result = curl_exec($ch);
    //     //狀態
    //     $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    //     curl_close($ch);
    //     //
    //     // echo "$url : $status<br>\n";
    //     // var_dump($result);
    //
    //     if ($status == 200) {
    //         return $result;
    //     }
    //
    //     return false;
    // }
}
 ?>
