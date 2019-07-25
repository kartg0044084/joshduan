<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h2>{{ $name }} 您好:</h2>
        <div>您收到這封郵件，是因為在我們網站的新用戶註冊</div>
        <div>----------------------------------------</div>
        <div>帳號啟用說明</div>
        <div>----------------------------------------</div>
        <div>您是我們網站的新用戶，我們需要對您註冊的有效性進行驗證以避免垃圾郵件或地址被濫用。</div>
        <div>您只需點擊下面的連結即可啟用您的帳號:</div>
        <div>http://local.joshduan.com/member_verification?string={{ $string }}</div>
        <div>(如果上面不是連結形式，請將網址手工複製到瀏覽器網址欄再訪問，請於15分鐘內完成訪問)</div>
        <div>感謝您的訪問，祝您使用愉快</div>
    </body>
</html>
