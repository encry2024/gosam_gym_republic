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
                    <form>
                        <div class="form-group row">
                            <label for="search" class="col-2">Search Customer</label>

                            <div class="col-7">
                                <input id="search" name="search" type="text" class="form-control"
                                       value="{{ Request::get('search') }}">
                            </div>

                            <button class="btn btn-indigo" type="submit">SEARCH</button>
                            <a class="btn btn-secondary ml-1" href="{{ route('admin.logs.index') }}">CLEAR FILTER</a>
                            <button class="btn btn-dark ml-1" type="button" data-toggle="modal" data-target="#walkInModal">WALK-IN</button>
                        </div>
                    </form>
                </div>
            </div>

            <hr>

            @if (Request::has('search'))
                <div class="row">
                    <div class="col-12">
                        <label>Filtered Results: <span class="badge badge-info" style="font-weight: 400; font-size: 15px;">{{ Request::get('search') }}</span></label>
                    </div>
                </div>
            @endif

            <div class="row">
                <div class="col-5">
                    <div class="animated fadeInUp mt-2">
                        @include('backend.log.customer.paginate')
                    </div>
                </div>

                <div class="col">
                    <div id="ajaxSpinnerContainer" style="display: none;">
                        <div id="ajaxSpinner"></div>
                    </div>
                    <div id="customer_information_container">

                    </div>
                </div>
            </div>
        </div><!--card-body-->
    </div><!--card-->

    <!-- Register Walk-in Customer Modal -->
    <form class="modal fade in" tabindex="-1" role="dialog" id="walkInModal" action="{{ route('admin.customer.store') }}"
        method="POST">
        {{ csrf_field() }}

        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Walk-in Customer Information</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="row mt-4 mb-4">
                        <div class="col">
                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.customers.first_name'))->class('col-md-4 form-control-label')->for('first_name') }}

                                <div class="col-md-8">
                                    {{ html()->text('first_name')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.customers.first_name'))
                                        ->attribute('maxlength', 191)
                                        ->required()
                                        ->autofocus() }}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.customers.last_name'))->class('col-md-4 form-control-label')->for('last_name') }}

                                <div class="col-md-8">
                                    {{ html()->text('last_name')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.customers.last_name'))
                                        ->attribute('maxlength', 191)
                                        ->required() }}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.customers.contact_number'))->class('col-md-4 form-control-label')->for('contact_number') }}

                                <div class="col-md-8">
                                    {{ html()->text('contact_number')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.customers.contact_number'))
                                        ->attribute('maxlength', 191)
                                        ->required() }}
                                </div><!--col-->
                            </div><!--form-group-->
                        </div><!--col-->
                    </div><!--row-->
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-success" id="registerActivityBtn">Save</button>
                </div>
            </div>
        </div>
    </form>
@endsection

@push('before-scripts')
    <script>
        const customer_information_container = $("#customer_information_container");

        $(document).on('click', 'tr.customer_links', function (e) {
            const customer_id = $(this).data('customer-id');
            let route = "{{ route('admin.customer.show', ':customer_id') }}";
            route = route.replace(':customer_id', customer_id);

            $(".customer_links").each(function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            });

            $(this).addClass('active');

            customer_information_container.empty();
            $.ajax({
                type: "GET",
                url: route,
                dataType: "JSON"
            }).done(function (customer) {
                let showLogRoute = "{{ route('admin.logs.customer.show', ':customer_id') }}";
                showLogRoute = showLogRoute.replace(':customer_id', customer.id);

                html = "<div class='card animated fadeInRight'>";
                html += "<div class='card-body'>";
                html += "<h5 class='card-title'>Customer Information</h5>";
                html += "<hr>";
                html += "<div class='form-group row'>";
                html += "<label for='customer_name' class='col-5'>Name</label>";
                html += "<div class='col-7'>";
                html += "<input class='form-control' id='customer_name' name='customer_name' value='" + customer.name + "' disabled>";
                html += "</div>";
                html += "</div>";

                html += "<div class='form-group row'>";
                html += "<label for='customer_address' class='col-5'>Address</label>";
                html += "<div class='col-7'>";
                html += "<textarea class='form-control' id='customer_address' name='customer_address' disabled>" + customer.address + "</textarea>";
                html += "</div>";
                html += "</div>";

                html += "<div class='form-group row'>";
                html += "<label for='customer_email' class='col-5'>E-mail</label>";
                html += "<div class='col-7'>";
                html += "<input class='form-control' id='customer_email' name='customer_email' value='" + customer.email + "' disabled>";
                html += "</div>";
                html += "</div>";

                html += "<div class='form-group row'>";
                html += "<label for='customer_dob' class='col-5'>Date of Birth</label>";
                html += "<div class='col-7'>";
                html += "<input class='form-control' id='customer_dob' name='customer_dob' value='" + customer.date_of_birth + "' disabled>";
                html += "</div>";
                html += "</div>";

                html += "<div class='form-group row'>";
                html += "<label for='customer_emergency_number' class='col-5'>Emergency Number</label>";
                html += "<div class='col-7'>";
                html += "<input class='form-control' id='customer_emergency_number' name='customer_emergency_number' value='" + customer.emergency_number + "' disabled>";
                html += "</div>";
                html += "</div>";

                html += "<br>";
                html += "<h5>Memberships</h5>";
                html += "<hr>";

                html += "<table class='table table-bordered' id='customer_activities'>";
                html += "<thead>";
                html += "<tr>";
                html += "<th>Membership Status</th>";
                html += "<th>Activities</th>";
                html += "<th>Coaches</th>";
                html += "<th>Remaining Sessions</th>";
                html += "</tr>";
                html += "</thead>";

                html += "<tbody>";
                for (let i = 0; i < Object.keys(customer.memberships).length; i++) {
                    let membership = customer.memberships[i];
                    let coachName = null;

                    if (membership.coach_id == 0) {
                        coachName = "N/A"
                    } else {
                        coachName = membership.coach.name;
                    }

                    html += "<tr class='customer_activity' data-membership_id='" + membership.activity.id + "'>";
                    html += "<td>" + membership.status_label + "</td>";
                    html += "<td>" + membership.activity.name + "</td>";
                    html += "<td>" + coachName + "</td>";
                    html += "<td>" + membership.sessions + "</td>";
                    html += "</tr>";
                }
                html += "</tbody>";

                html += "</table>";
                html += "<hr>";
                html += "<a type='button' class='btn btn-primary btn-lg btn-block' href='" + showLogRoute + "'>LOG CUSTOMER</a>";
                html += "</div>";
                html += "</div>";

                customer_information_container.html(html);
            });
        });
    </script>
@endpush
