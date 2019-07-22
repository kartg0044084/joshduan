<?php
include dirname(dirname(__FILE__)) . '/DB_config.php';
include dirname(dirname(__FILE__)) . '/DB_class.php';
include_once 'Crawler_yahoo.php';

$yahoo = new Yahoo();
$save_db = new Save_db();
//category1處理
$aims_url = 'https://tw.buy.yahoo.com/category/4385943';
$aims_page = $yahoo->category($aims_url);
$product_category1 = array();

preg_match_all('!<a data-vars-category-id=".*" class="track-category-list siblings-link W\(132px\) H\(18px\) D\(ib\) Ov\(h\) Fz\(14px\) C\(#26282a\).*" href=".*">(.*?)<\/a>!', $aims_page, $match);
$product_category1['name'] = $match[1];

preg_match_all('!<a data-vars-category-id="(.*?)" class="track-category-list siblings-link W\(132px\) H\(18px\) D\(ib\) Ov\(h\) Fz\(14px\) C\(#26282a\).*" href=".*">.*<\/a>!', $aims_page, $match);
$product_category1['id'] = $match[1];

for ($i = 0; $i <count($product_category1['name']); $i++) {
  //category1
  $k = $i;
  $category_name1 = $product_category1['name'][$i];
  $category_id1 = $product_category1['id'][$k];
  $category_url1 = "https://tw.buy.yahoo.com/category/".$product_category1['id'][$k];

  $saved = $save_db->save_category1($db, $category_name1, $category_url1, $category_id1);

  //category2
  $category2_aims_url = $category_url1;
  $category2_aims_page = $yahoo->category($category2_aims_url);
  $product_category2 = array();

  preg_match_all('!<a data-vars-category-id=".*" href=".*" target="_blank" rel="noopener" class="track-category-item-link level2-item-text disable-in-tablet Bxz\(bb\) Pb\(6px\) Pt\(6px\) Pstart\(24px\) Pend\(24px\) C\(#ffffff\) Fz\(16px\) D\(ib\) W\(176px\) H\(30px\) Ov\(h\) C\(#7a00a7\):h Fw\(500\) D\(n\)--md D\(b\)--sm Pend\(10px\)--sm">(.*?)<\/a>!', $category2_aims_page, $match);
  $product_category2['name'] = $match[1];

  preg_match_all('!<a data-vars-category-id="(.*?)" href=".*" target="_blank" rel="noopener" class="track-category-item-link level2-item-text disable-in-tablet Bxz\(bb\) Pb\(6px\) Pt\(6px\) Pstart\(24px\) Pend\(24px\) C\(#ffffff\) Fz\(16px\) D\(ib\) W\(176px\) H\(30px\) Ov\(h\) C\(#7a00a7\):h Fw\(500\) D\(n\)--md D\(b\)--sm Pend\(10px\)--sm">.*<\/a>!', $category2_aims_page, $match);
  $product_category2['id'] = $match[1];

  foreach ($product_category2['name'] as $j => $category_name2) {
    $category_id2 = $product_category2['id'][$j];
    $category_url2 = 'https://tw.buy.yahoo.com/category/'.$product_category2['id'][$j];

    $saved2 = $save_db->save_category2($db, $category_id1, $category_name2, $category_url2, $category_id2);
  }
}
// ok

// Category1 其餘 tag 處理
// $query = $db->query("SELECT * FROM yahoocategory");
// $rows = $db->fetch_array_all($query);
//
// foreach($rows as $k => $row){
//     $url = $row['Url'];
//     $other_id1 = $row['Code'];
//
//     $other_category2 = $yahoo->category($url);
//     $product_category2 = array();
//     preg_match_all('!<a class="FilterGroups\w\woption\w\w\w2mrT\w" href=".*?"><span class="FilterGroups\w\wlistItemTitle\w\w\wbaYt8">(.*?)<\/span>!', $other_category2, $match);
//     $product_category2['name'] = $match[1];
//
//     preg_match_all('!<a class="FilterGroups\w\woption\w\w\w2mrT\w" href="(.*?)"><span class="FilterGroups\w\wlistItemTitle\w\w\wbaYt8">.*?<\/span>!', $other_category2, $match);
//     $product_category2['url'] = $match[1];
//
//       foreach ($product_category2['name'] as $k => $other_name2) {
//         $other_url2 = 'https://tw.buy.yahoo.com'.$product_category2['url'][$k];
//         $other_id2 = str_replace ('/category/','', $product_category2['url'][$k]);
//
//         $saved2 = $save_db->save_category2($db, $other_id1, $other_name2, $other_url2, $other_id2);
//       }
// }
// ok



class Save_db {

    public function __construct()
    {
        global $_DB;
    }

    public function save_category1($db, $name1, $url1, $id1)
    {
        $col = $val = [];

        $col[] = 'Category1';            $val[] = "'" . $db->escape($name1) . "'";
        $col[] = 'Code';                  $val[] = "'" . $db->escape($id1) . "'";
        $col[] = 'Url';                  $val[] = "'" . $db->escape($url1) . "'";
        $col[] = 'MappingId';            $val[] = "'" . $db->escape($id1) . "'";
        $col[] = 'Category_Type';            $val[] = "'" . $db->escape(1) . "'";
        $col[] = 'LastModified';       $val[] = 'NOW()';
        $query = "INSERT INTO YahooCategory (" . implode(',', $col) . ") VALUES (" . implode(',', $val) . ")";
        $db->query($query);
    }

    public function save_category2($db, $id1, $name2, $url2, $id2)
    {
        $col = $val = [];
        $col[] = 'Category2';            $val[] = "'" . $db->escape($name2) . "'";
        $col[] = 'Code';                  $val[] = "'" . $db->escape($id2) . "'";
        $col[] = 'Url';                  $val[] = "'" . $db->escape($url2) . "'";
        $col[] = 'MappingId';            $val[] = "'" . $db->escape($id1) . "'";
        $col[] = 'Category_Type';            $val[] = "'" . $db->escape(1) . "'";
        $col[] = 'LastModified';       $val[] = 'NOW()';
        $query = "INSERT INTO YahooCategory (" . implode(',', $col) . ") VALUES (" . implode(',', $val) . ")";
        $db->query($query);
    }
}
?>
