<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- ajax post -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- ajax post -->
    <link rel="stylesheet" href="{{asset('css/app.css')}}" />
    <script src="{{asset('js/app.js')}}"></script>
    <title>{{config('app.name', '購物平台')}}</title>
</head>

<body>
    @yield('content')
</body>

</html>
