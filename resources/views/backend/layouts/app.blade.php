<!DOCTYPE html>
@langrtl
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
@else
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@endlangrtl
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>@yield('title', app_name())</title>
        <meta name="description" content="@yield('meta_description', 'Laravel 5 Boilerplate')">
        <meta name="author" content="@yield('meta_author', 'Anthony Rappa')">
        <link rel="stylesheet" href="{{ asset('css/global_custom.css') }}">
        <link rel="stylesheet" href="{{ asset('select2-4.0.7/dist/css/select2.css') }}">
        <link rel="stylesheet" href="{{ asset('fontawesome-free-5.9.0-web/fontawesome-free-5.9.0-web/css/fontawesome.css') }}">

        @yield('meta')

        {{-- See https://laravel.com/docs/5.5/blade#stacks for usage --}}
        {{--@stack('before-styles')--}}

        <!-- Check if the language is set to RTL, so apply the RTL layouts -->
        <!-- Otherwise apply the normal LTR layouts -->
    <!-- Material Design Bootstrap -->

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <!-- Bootstrap core CSS -->
        <link href="{{ asset('material-ui-css/css/bootstrap.css') }}" rel="stylesheet">
        {{ style(mix('css/backend.css')) }}
        {{--@stack('after-styles')--}}

        <script src="{{ asset('js/jquery-3.4.1.min.js') }}"></script>
        <script src="{{ asset('select2-4.0.7/dist/js/select2.full.min.js') }}" type="text/javascript"></script>
        <script type="text/javascript" src="{{ asset('material-ui-css/js/bootstrap.min.js') }}"></script>
    </head>

    <body class="grey lighten-3  {{ config('backend.body_classes') }}">
        @include('backend.includes.header')
        @include('backend.includes.sidebar')
        <div class="app-body" style="position: relative; min-height: 100vh;">
            <main class="mx-lg-5 pt-5" style="padding-bottom: 100px; ">
                {{--@include('includes.partials.demo')
                @include('includes.partials.logged-in-as')
                {!! Breadcrumbs::render() !!}--}}

                <div class="container-fluid mt-5">
                    <div class="animated fadeIn">
                        <div class="content-header">
                            @yield('page-header')
                        </div><!--content-header-->

                        @include('includes.partials.messages')
                        @yield('content')
                    </div><!--animated-->
                </div><!--container-fluid-->
            </main><!--main-->
            @include('backend.includes.footer')
        </div>

        <!-- Scripts -->
        @stack('before-scripts')
        {!! script(mix('js/manifest.js')) !!}
        {!! script(mix('js/vendor.js')) !!}
        {!! script(mix('js/backend.js')) !!}
        @stack('after-scripts')


        <script type="text/javascript" src="{{ asset('material-ui-css/js/popper.min.js') }}"></script>
        <!-- Bootstrap core JavaScript -->

        <!-- MDB core JavaScript -->
        <script type="text/javascript" src="{{ asset('material-ui-css/js/mdb.min.js') }}"></script>
        <!-- Initializations -->
        <script type="text/javascript">
            // Animations initialization
            new WOW().init();
        </script>
    </body>
</html>
