<div class="col-md-3">
    <div class="list-group sticky-top mt-3">
        <a href="javascript:void(0);" class="list-group-item list-group-item-action active returncategory1" data-toggle="list">返回</a>
        @if(count($categories2) > 0)
            @foreach($categories2 as $k=> $category2)

            @if($Code == $category2['Code'])
            <a href="getproduct_all?type=reception&ListCode={{$ListCode}}&Code={{$category2['Code']}}" code="{{$category2['Code']}}" class="list-group-item list-group-item-action list-group-item-primary category2" data-toggle="list">{{$category2['Category2']}}</a>
            @else
            <a href="getproduct_all?type=reception&ListCode={{$ListCode}}&Code={{$category2['Code']}}" code="{{$category2['Code']}}" class="list-group-item list-group-item-action category2" data-toggle="list">{{$category2['Category2']}}</a>
            @endif

            @endforeach
        @endif
    </div>
</div>
