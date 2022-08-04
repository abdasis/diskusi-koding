<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>UBold - Responsive Admin Dashboard & Landing Page Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
    <meta content="Coderthemes" name="author" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- App favicon -->
    <link rel="shortcut icon" href="images/favicon.ico">

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}" type="text/css">

    <!--Material Icon -->
    <link rel="stylesheet" type="text/css" href="{{asset('css/materialdesignicons.min.css')}}" />

    <!-- Custom  sCss -->
    <link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}" />

    @vite(['resources/js/app.js'])

</head>

<body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="78">

<!--Navbar Start-->
<x-client-header/>
<!-- Navbar End -->

{{$slot}}

<!-- footer start -->
<x-client-footer/>
<!-- footer end -->

<!-- Back to top -->
<!-- <a href="#" class="back-to-top" id="back-to-top"> <i class="mdi mdi-chevron-up"> </i> </a> -->
<!-- Back to top -->
<a href="#" onclick="topFunction()" class="back-to-top-btn btn btn-primary" id="back-to-top-btn"><i class="mdi mdi-chevron-up"></i></a>

<!-- javascript -->

<script src="{{asset('js/bootstrap.bundle.min.js')}}"></script>

<!-- custom js -->
<script src="{{asset('js/app.js')}}"></script>
</body>

</html>
