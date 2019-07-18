@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.logs.title'))

@section('content')
    <div class="card">
        <div class="card-body h-100">
            <div class="row">
                <div class="col-sm-10">
                    <h4 class="card-title mb-0">
                        {{ __('labels.backend.logs.management') }}
                    </h4>
                </div><!--col-->
            </div><!--row-->
            <br>
            <div class="row mt-4 mb-4">
                <div class="col">
                    <div class="form-group row">
                        <label for="search" class="col-2">Search Customer</label>

                        <div class="col-10">
                            <input id="search" name="search" type="text" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="col-5">
                <div class="row">
                    <div id="resultContainer" class="col-12 p-0 mb-1">
                        @include('backend.log.customer.paginate')
                    </div>
                </div>
            </div>

            <div class="col-7">
                <div class="row"></div>
            </div>
        </div><!--card-body-->
    </div><!--card-->
@endsection

@push('before-scripts')
    <script>
        const search = $("#search"),
            resultContainer = $("#resultContainer");

        $(function () {
            let html = "",
                invalidKeys = [18, 17, 16, 27, 37, 38, 39];

            search.on('keyup', function (e) {
                const customerName = $(this).val();

                if ($.inArray(e.keyCode, invalidKeys) !== -1) {

                } else {
                    let route = "{{ route('admin.customer.search', ['customerName' => ':customerName']) }}";
                    route = route.replace(':customerName', customerName);

                    $.ajax({
                        type: "GET",
                        url: route,
                        dataType: "html"
                    }).done(function (data) {
                        resultContainer.empty();

                        resultContainer.html(data);
                    });
                }
            });
        });
    </script>
@endpush
