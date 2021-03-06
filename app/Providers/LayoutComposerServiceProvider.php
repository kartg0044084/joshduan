<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Category; //Model
use Illuminate\Http\Request; //這行很重要，因為它會載入request類別

class LayoutComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot(Request $request)
    {
        //视图间共享数据
        $categories = $this->getcategory();
        if(!empty($request->listcode)){
            //menu2
            $listcode = $request->listcode;
            $code = $request->code;
            $categories2 = $this->getChildCategories($listcode);
            view()->share(compact('categories', 'categories2','listcode', 'code'));
        }else{
            //menu
            view()->share('categories', $categories);
        }
        // print_r($categories);
        // view()->share('categories', compact('categories'));
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
    //menu
    // 第一次取得的是最上層
    protected function getcategory($select = 'Category1')
    {
        $item = [];
        $categorys = Category::whereRaw(''.$select.' != "" AND Category_Type = 1')->orderBy('Cate_id','asc')->get()->toArray();
        // 遞迴取得所有下層子分類
        foreach ($categorys as $category) {
            $childs = $this->getChildCategories($category['Code']);
            // 有下層子分類才納入分類選單中
            if(!empty($childs)){
                $item[] = compact('category', 'childs');
            }
        }
        return $item;
    }


    // 第二次取得所有下層子分類
    protected function getChildCategories($code)
    {
        $childs = Category::whereRaw('MappingId = '.$code.' AND Category1 = "" AND Category_Type = 1')->orderBy('Cate_id','asc')->get();
        $childs = $childs->toArray();
        return $childs;
    }

}
