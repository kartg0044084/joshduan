<div class="col-md-3">
    <div class="list-group sticky-top mt-3">
        @if(count($categories) > 0)
            @foreach($categories as $k=> $category)
        <a href="javascript:void(0);" code="{{$category['category']['Code']}}" class="list-group-item list-group-item-action getcategory2" data-toggle="list">{{$category['category']['Category1']}}</a>
            @endforeach
        @endif
    </div>
</div>
