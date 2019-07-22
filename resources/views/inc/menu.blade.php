<div class="col-md-3">
    <div class="list-group sticky-top mt-3">
        @if(count($categories) > 0)
            @foreach($categories as $k=> $category)
        <a href="javascript:void(0);" code="{{$category['category']['Code']}}" class="list-group-item list-group-item-action getcategory2" data-toggle="list">{{$category['category']['Category1']}}</a>
            @endforeach
        @endif
    </div>
</div>
<!-- getcategory2?Code={{$category['category']['Code']}} -->
<!-- <a href="#pane-1" class="list-group-item list-group-item-action active " data-toggle="list">全部商品</a> -->
<!-- <a href="#" class="list-group-item list-group-item-action">送禮組合</a>
<a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">限時下殺</a> -->
