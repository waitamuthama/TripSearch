<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Trip Search</title>
  <!-- styles-->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">

  <!-- Fonts to support Material Design -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  <!-- Icons to support Material Design -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

  <script src="https://npmcdn.com/react@0.14.2/dist/react.min.js"></script>
  <script src="https://npmcdn.com/react-dom@0.14.2/dist/react-dom.min.js"></script>
  <script src="https://npmcdn.com/google-map-react@1.0.1/dist/GoogleMapReact.js"></script>

</head>

<body class="container-fluid">
  @yield('content')

  <div id="root"></div>


  <script src="{{ asset('js/app.js') }}"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
  </script>
</body>

</html>