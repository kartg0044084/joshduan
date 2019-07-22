<!DOCTYPE HTML>
<html>
<head>
<title>後台管理系統</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
{{-- css --}}
<link rel="stylesheet" href="{{asset('css/admin/admin_app.css')}}" />
{{-- js --}}
<script src="{{asset('js/admin/admin_app.js')}}"></script>
<script src="{{asset('js/admin/jquery.validate.min.js')}}"></script>
</head>
<body>
	@yield('content')
</body>
</html>
