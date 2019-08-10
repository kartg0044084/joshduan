// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$(document).ready(function () {
    // ajax post
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
    // ajax post

    // $('#removeModal').on('show.bs.modal', function (event) {
    //     var btn = $(event.relatedTarget);
    //     var title = btn.data('title');
    //     var price = btn.data('price');
    //     var modal = $(this);
    //     modal.find('.modal-title').text('確認刪除 ' + title);
    //     modal.find('.modal-body').text('您要刪除 ' + title + ' $ ' + price + '元 嗎?');
    // });
    // 自訂樣飾區
    $("#twzipcode").twzipcode({
    countySel: $('.address').data('city'),
    districtSel: $('.address').data('town'),
    // zipcodeIntoDistrict: true, // 郵遞區號自動顯示在地區
    css: ["city form-control live", "town form-control live", "postcode form-control live"], // 自訂 "城市"、"地區" class 名稱
    countyName: "city", // 自訂城市 select 標籤的 name 值
    districtName: "town", // 自訂地區 select 標籤的 name 值
    zipcodeName: 'postcode'
    });

    var product_content = $('.product_content').attr('value');
    $('.product_content').html(product_content);

    var twzipcode = $('#twzipcode');
    $(twzipcode).children("select").prop('required', true);
    $(twzipcode).children("input").prop('required', true);

    var total = $('.total'),
        total_all = $('.total_all'),
        val = 0;

        for (var i = 0; i < total.length; i++) {
            val = val + $(total[i]).data('total');
        }
        if(val < 500){
            val = val + 80;
        }else{
            $('.freight').addClass( "strikethrough" );
        }
        $(total_all).html('$'+val+'');
    //頁面 : inc.hender
    $('body').on("click", '#dropdownMenuButton', function () {
        $('.dropdown-menu').show();
    });
    $(document).mouseup(function (e) {
    var container =$('.dropdown-menu'); // 這邊放你想要排除的區塊
    if (!container.is(e.target) && container.has(e.target).length === 0) {
       container.hide();
    }
    });

    //頁面 : index
    //動態新增的elements要綁定事件需要用.on的方式
    $('body').on("click", '.getcategory2', function () {
        var code = $(this).attr('code'),
            parent_div = $(this).parent();

        $.ajax({
           type:'POST',
           url:'getcategory2',
           data:{"code":code},
           success:function(data){
              $(parent_div).children(".getcategory2").detach();
              $(parent_div).append('<a href="javascript:void(0);" class="list-group-item list-group-item-action active returncategory1" data-toggle="list">返回</a>');
              for (var i = 0; i < data.length; i++) {
                  var datatext = '<a href="getproduct_all?type=reception&listcode='+code+'&code='+data[i].Code+'" code="'+data[i].Code+'" class="list-group-item list-group-item-action category2" data-toggle="list">'+data[i].Category2+'</a>';
                  $(parent_div).append(datatext);
              }
           }
        });
    });

    $('body').on("click", '.returncategory1', function () {
        var parent_div = $(this).parent();
        $.ajax({
            type:'GET',
            url:'returncategory1',
            success:function(data){
                $(parent_div).children(".category2").detach();
                $(parent_div).children(".returncategory1").detach();
                  for (var i = 0; i < data.length; i++) {
                      var datatext = '<a href="javascript:void(0);" code="'+data[i].Code+'" class="list-group-item list-group-item-action getcategory2" data-toggle="list">'+data[i].Category1+'</a>';
                      $(parent_div).append(datatext);
                  }
            }
        });
    });

    //頁面 : product
    $('body').on("click", '.ajax_product', function () {
        var code = $(this).attr('code'),
            page = $(this).attr('page'),
            row_div = $(".product").parent(),
            pagination = $(this).parents("ul"),
            previous = $(pagination).children('.previous'),
            bookmark = $(pagination).children('.bookmark'),
            next = $(pagination).children('.next'),
            disabled = $(pagination).children('.disabled');
            //get_data
            ajax_product(code, page, row_div);
            //get_page
            ajax_page(code, page, pagination, previous, bookmark, next, disabled);
    });

    function ajax_page(code, page, pagination, previous, bookmark, next, disabled){
        $.ajax({
           type:'POST',
           url:'ajax_product',
           data:{"code":code, "page":page, "type":'ajax_page'},
           success:function(data){
               // 上一頁
               if(data.page != 1){
                   $(previous).children('a').detach();
                   $(previous).append('<a href="javascript:void(0);" class="page-link ajax_product" code="'+data.code+'" page="'+(data.page - 1)+'">上一頁</a>');
               }else{
                   $(previous).children('a').detach();
               }

               if(data.page != data.pages){
                   //一般頁數
                   $(bookmark).children('li').detach();
                   for( var i = 1 ; i <= data.pages ; i++ ){
                       if( data.page - 2 < i && i < data.page + 3 ){
                           $(bookmark).append('<li class="page-item bookmark"><a href="javascript:void(0);" class="page-link ajax_product" code="'+data.code+'" page="'+i+'">'+i+'</a></li>');
                       }
                   }
                   // 下一頁
                   $(next).children('a').detach();
                   $(next).append('<a href="javascript:void(0);" class="page-link ajax_product" code="'+data.code+'" page="'+(data.page + 1)+'">下一頁</a>');
               }else{
                   $(next).children('a').detach();
               }
               $(disabled).children('a').html('目前第'+data.page+'頁');
           }
        });
    }

    function ajax_product(code, page, row_div){
        $.ajax({
           type:'POST',
           url:'ajax_product',
           data:{"code":code, "page":page, "type":'ajax_product'},
           success:function(data){
              $(".product").detach();
              for (var i = 0; i < data.length; i++) {
                  var datatext1 = '<div class="col-md-4 mt-4 product">'
                                    +'<div class="card text-center h-100 border-0 box-shadow">'
                                        +'<img src="files/StoreProduct/'+data[i].Pd_Img+'" class="card-img-top" alt="'+data[i].Pd_Name+'">'
                                        +'<div class="card-body">'
                                            +'<h5 class="card-title " style="font-weight: bold;">'+data[i].Pd_Name+'</h5>'
                                        +'</div>'
                                     +'<div class="card-footer border-top-0 bg-white">'
                                        +'<div class="btn-group " role="group" aria-label="First group">';
                                                if(data[i].Pd_Discount){
                                var datatext2 = '<button type="button" class="btn btn-light btn-sm strikethrough" disabled>$'+data[i].Pd_Price+'</button>'
                                                +'<button type="button" class="btn btn-danger btn-sm" disabled>'
                                                    +'特惠'+data[i].Pd_Discount+'折'
                                                +'</button>'
                                                +'<button type="button" class="btn btn-dark btn-sm" disabled>$'+data[i].Pd_Discount_Price+'元</button>';
                                                }
                                 var datatext3 = '<button type="button" class="btn btn-dark btn-sm" disabled>$'+data[i].Pd_Price+'元</button>';

                        var datatext4 = '</div>'
                                        +'<a href="product_view?pd_id='+data[i].Pd_id+'" class="btn btn-outline-secondary btn-sm mt-2 d-block"><i class="fas fa-shopping-cart mr-1"></i>購物去</a>'
                                    +'</div>'

                                +'</div>'
                            +'</div>';
                if(data[i].Pd_Discount){
                    var datatext = ''+datatext1+''+datatext2+''+datatext4+'';
                }else{
                    var datatext = ''+datatext1+''+datatext3+''+datatext4+'';
                }
                  $(row_div).append(datatext);
              }
           }
        });
    }

    //頁面 : getmember (查詢有無重複email帳號)
    $('body').on("click", '.register_member', function (event) {
        var email_val = $('.register_email').val(),
            errormessage = $('.register_errormessage');
        $.ajax({
           type:'POST',
           url:'repeat_member',
           data:{"email":email_val},
           async:false,
           success:function(data){
               if(data == 'error'){
                   event.preventDefault();
                   event.stopPropagation();
                   $(errormessage).children('label').html('此Email信箱已有人使用，請更改Email地址');
                   $(errormessage).show();
               }
           }
        });
    });

    //頁面 : product_view
    var number_submit = $('.product_number').children(':submit');
    $(number_submit).click(function(){
        var select_val = $('.product_number').children('select').val(),
            mb_id = $(this).data('mbid'),
            mb_auth = $(this).data('mbauth'),
            pd_id = $(this).data('id'),
            pd_name = $(this).data('name'),
            pd_price = $(this).data('price'),
            pd_link = $(this).data('link'),
            pd_img = $(this).data('img');
            if(mb_id == ''){
                alert('請先登入會員，才能進行購物動作');
      }else if(mb_auth == 0){
                alert('會員目前未驗證，驗證過後才能進行購物動作');
            }else{
                $.ajax({
                   type:'POST',
                   url:'add_cart',
                   data:{"pd_number":select_val,
                         "mb_id":mb_id,
                         "pd_id":pd_id,
                         "pd_name":pd_name,
                         "pd_price":pd_price,
                         "pd_link":pd_link,
                         "pd_img":pd_img},
                   async:false,
                   success:function(data){
                       alert('已將商品 '+pd_name+' 數量 '+select_val+' 件加入會員購物車');
                       location.reload();
                   }
                });
            }
    });

    $('body').on("click", '.del_product', function (event) {
        var pd_id = $(this).data('pdid'),
            pd_name = $(this).data('name');

        if(confirm("確定刪除此件商品嗎")){
            $.ajax({
               type:'POST',
               url:'del_cart',
               data:{"pd_id":pd_id},
               async:false,
               success:function(data){
                   alert('已將商品 '+pd_name+' 移除');
                   location.reload();
               }
            });
        }
    });

    $('body').on("click", '.del_order', function (event) {
        var od_id = $(this).data('odid'),
            od_status = $(this).data('odstatus');

        if(od_status == 0){
            if(confirm("確定取消此訂單嗎")){
                $.ajax({
                   type:'POST',
                   url:'del_order',
                   data:{"od_id":od_id},
                   async:false,
                   success:function(data){
                       alert('已將此筆訂單取消');
                       location.reload();
                   }
                });
            }
        }else{
            alert('此筆訂單已付款，無法取消，如有疑問請洽克服');
        }
    });

    $('body').on("click", '.checkout', function (event) {
        if(!confirm("本平台使用信用卡付款服務，將為您導向至歐付寶進行結帳動作")){
            event.preventDefault();
            event.stopPropagation();
        }
    });

});
