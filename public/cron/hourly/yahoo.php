<?php
include dirname(dirname(__FILE__)) . '/DB_config.php';
include dirname(dirname(__FILE__)) . '/DB_class.php';
include_once 'Crawler_yahoo.php';

$yahoo = new Yahoo();
$debug = false;

$StoreProduct_dir = dirname(dirname(dirname(__FILE__))) . '/files/StoreProduct_';

if (!is_dir($StoreProduct_dir)) {
    mkdir($StoreProduct_dir);
}

$query = "SELECT Category2, Code, Url, MappingId FROM yahoocategory WHERE Category_Type = 1 AND Category1 ='' ORDER BY rand() LIMIT 1";
// $query = "SELECT * FROM yahoocategory WHERE Cate_id = '164'";

$query = $db->query($query);
$rows = $db->fetch_array_all($query);

foreach ($rows as $row) {
        $products = get_product($row['Url']);
        foreach ($products as $product) {
            $query = "SELECT * FROM product_data WHERE Pd_Url ='" . $db->escape($product['url']) . "'";
            $old_product = $db->query($query);
            $old_product = $db->fetch_array($old_product);

            if(!empty($old_product)){
                $record = true;
                $img = downloadproduct($product, $record, $old_product['Pd_Img']);
                if($product['name'] != $old_product['Pd_Name'] || $product['price'] != $old_product['Pd_Price'] ||
                    $product['content'] != $old_product['Pd_Content'] || $img != $old_product['Pd_Img']){

                        $col = [];
                        $col[] = "Pd_Name='" . $db->escape($product['name']) . "'";
                        $col[] = "Pd_Price='" . $db->escape($product['price']) . "'";
                        $col[] = "Pd_Content='" . $db->escape($product['content']) . "'";
                        $col[] = "Pd_Img='" . $db->escape($img) . "'";
                        $col[] = "Pd_ModifiedTime=NOW()";
                        $query = "UPDATE product_data SET " . implode(',', $col) . " WHERE Pd_Name='" . $db->escape($old_product['Pd_Name']) . "'";
                        $db->query($query);
                    }

            } else {
                $record = false;
                $img = downloadproduct($product, $record, $old_product);
                $col = $val = [];
                $col[] = 'Pd_Category1';            $val[] = "'" . $db->escape($row['MappingId']) . "'";
                $col[] = 'Pd_Category2';            $val[] = "'" . $db->escape($row['Code']) . "'";
                $col[] = 'Pd_Name';            $val[] = "'" . $db->escape($product['name']) . "'";
                $col[] = 'Pd_Url';            $val[] = "'" . $db->escape($product['url']) . "'";
                $col[] = 'Pd_Price';            $val[] = "'" . $db->escape($product['price']) . "'";
                $col[] = 'Pd_Content';            $val[] = "'" . $db->escape($product['content']) . "'";
                $col[] = 'Pd_Img';             $val[] = "'" . $db->escape($img) . "'";
                $col[] = 'Pd_Status';             $val[] = "'" . $db->escape(1) . "'";
                $col[] = 'Pd_CreatedTime';     $val[] = 'NOW()';
                $query = "INSERT INTO product_data (" . implode(',', $col) . ") VALUES (" . implode(',', $val) . ")";
                $db->query($query);
            }
        }
}

function get_product($Url)
{
    global $db;

    $pages = 1;
    $products = [];

    for ($i = 1; $i <= $pages; $i++) {
        $url = $Url . '?pg=' . $i;

        debugMsg("URL $url");
        //抓取網頁內容
        $html = file_get_contents($url);

        if ($i == 1) {
            $pages = get_pages_number($html); //末頁
        }
        // 抓取各商品內頁連結
        preg_match_all('/<a class="BaseGridItem\w\wcontent\w\w\w3LORP" href="(.*?)">/', $html, $match);
        $products_url = $match[1];

        $page_products = get_page_product($products_url); //抓取商品陣列
        $count_products = count($page_products);  //商品數量

        debugMsg($count_products . " products");

        foreach ($page_products as $page_product) { //商品包裝陣列
            $products[] = $page_product;
        }
    }

    return $products;
}

function get_pages_number($html) //頁數 ok
{
    if (preg_match_all('/<a class="Pagination\w\wnumberBtn\w\w\w3HrVf Pagination\w\wbutton\w\w\wfFc6Y" href=".*">(\d+)<\/a>/', $html, $matche)) {
        $last_page = intval(end($matche[1]));

        return $last_page > 1 ? $last_page : 1;
    }

    return 1;
}

function get_page_product($products_url) //結構 ok
{
    $products = [];
    foreach ($products_url as $k => $url) {
        // 抓取各商品內頁連結
        $html = file_get_contents($url);
        // name
        if(preg_match_all('/<h1 class="HeroInfo\w\wtitle\w\w\w2cEgL\sHeroInfo\w\wtextTooLong\w\w\w39Fck">(.*?)<\/h1>/', $html, $match_name)){
            // 二次過濾
            if(preg_match_all('/<h1 class="HeroInfo\w\wtitle\w\w\w2cEgL\sHeroInfo\w\wtextTooLong\w\w\w39Fck"><span class="HeroInfo\w\wfastDelivery\w\w\w35Adx"><\/span>(.*?)<\/h1>/', $html, $filter_name)){
                $name = $filter_name[1][0];
            }else{
                $name = $match_name[1][0];
            }
        } else {
            debugMsg("$k name unmatch");
            continue;
        }
        // price
        if(preg_match_all('/<div class="HeroInfo\w\wmainPrice\w\w\wH9A5r">\$(.*?)<\/div>/', $html, $match_price)){
           $price = str_replace(",","",$match_price[1][0]);
        } else {
            debugMsg("$k price unmatch");
            continue;
        }
        // content
        if(preg_match_all('/<div class="ShoppingProductFeatures\w\wproductFeatureWrapper\w\w\w1D0EZ"><h3>.*<\/h3><ul>(.*?)<\/ul><\/div><\/div>/', $html, $match_content)){
           $content = $match_content[1][0];
        } else {
            debugMsg("$k content unmatch");
            continue;
        }
        // img
        if(preg_match_all('/<div class="ProductImageSwipe\w\wimage\w\w\w1Ap7U" style="float:left;width:100%;position:relative;transition-property:transform;background-image:url\((.*?)\)"><\/div>/', $html, $match_img)){
           $img = $match_img[1][0];
        } else {
            debugMsg("$k img unmatch");
            continue;
        }
        $products[] = [
            'name' => $name,
            'url' => $url,
            'price' => $price,
            'content' => $content,
            'img' => $img,
        ];
    }

    return $products;
}

function downloadproduct($product, $record, $old_Img)
{
  global $db;
  global $StoreProduct_dir;

  $image_array = explode("/",$product['img']);

  // url末段
  $img = array_pop ($image_array);
  if(preg_match_all('/(.*)/', $img, $match_img)){
      // 二次過濾
      if(preg_match_all('/(.*).jpg/', $img, $filter_img)){
          $img = $filter_img[1][0];
      } else {
          $img = $match_img[1][0];
      }
  }
  $img = "$img.jpg";

  if($record){
      if($img != $old_Img){
          copy($product['img'] , $StoreProduct_dir.'/'.$img);
      }
      return $img;
  } else {
      copy($product['img'] , $StoreProduct_dir.'/'.$img);
  }

  return $img;
}

// function mappingClass($id)
// {
//     global $db, $allclass;
//
//     $ret = [];
//
//     foreach ($allclass->rows as $productclass) {
//         if ($productclass['PC_Serial'] == $id) {
//             $pre_pid = null;
//             $parent_id = intval($productclass['PC_ParentId']);
//             $deep = 4;
//             $ret[] = $productclass;
//
//             while ($pre_pid != $parent_id && $parent_id != -1 && $deep > 0) {
//                 $pre_pid = $parent_id;
//                 foreach ($allclass->rows as $productclass) {
//                     if ($productclass['PC_Serial'] == $parent_id) {
//                         array_unshift($ret, $productclass);
//                         $parent_id = $productclass['PC_ParentId'];
//                         break;
//                     }
//                 }
//
//                 $deep--;
//             }
//             break;
//         }
//     }
//
//     return count($ret) > 0 && $ret[0]['PC_ParentId'] == -1 ? $ret : [];
// }

function debugMsg($msg)
{
    global $debug;

    if ($debug) {
        echo $msg . "\n";
    }
}
