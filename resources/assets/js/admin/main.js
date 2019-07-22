$(function(){
    // 後台登入驗證
  $("#loginfrom").validate({
      rules:{
          email:{
              required: true,
              email:true
          },
          password:{
              required: true,
              rangelength:[6,10]
          },
          captcha:{
              required: true
          }
      },
      messages:{
          email:{
              required:'請輸入管理者帳號',
              email:'請符合email格式'
          },
          password:{
              required:'請輸入管理者密碼',
              rangelength:'長度範圍為 6 到 10 個字符'
          },
          captcha:{
              required:'請輸入驗證碼'
          }
      }
	});
    // login 驗證碼重製
    $('.btn-refresh').click(function(){
        $.ajax({
            type:'GET',
            url:'ad_refresh_captcha',
            dataType: 'html',
            success:function(data){
                $('.captcha_img').html(data);
            }
        });
    });
    // table
    $('#table').basictable();
    //文字框
    ClassicEditor
    .create(document.querySelector('#editor'))
    .then(editor => {
        console.log(editor);
    })
});
