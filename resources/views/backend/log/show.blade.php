@extends('backend.layouts.app')

@section('title', __('labels.backend.customers.management') . ' | ' . __('labels.backend.customers.view', ['customer' => $customer->name]))

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 mb-0">
                            <h4 class="card-title">Log Customer
                                <small>{{ $customer->name }}</small>
                            </h4>
                        </div>
                    </div>

                    <hr>

                    <div class="row">
                        <div class="col-3">
                            <table class="table table-bordered" id="activityContainer">
                                <thead>
                                <tr>
                                    <th>Available Activities</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($activities as $activity)
                                    <tr class="customer_activity" data-activity_id="{{ $activity->id }}"
                                        data-status="{{  in_array($activity->id, $existingActivities) ?
                                            "subscribed"
                                            : "N/A" }}">
                                        <td>{{ $activity->name }}
                                            {!! in_array($activity->id, $existingActivities) ?
                                            "<span class='badge badge-info float-right mr-1'
                                            style='font-size: 12px; font-weight: 500;'>SUBSCRIBED</span>"
                                            : "" !!}
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>

                        <div class="col-9">
                            <div id="ajaxSpinnerContainer" style="display: none;">
                                <div id="ajaxSpinner"></div>
                            </div>
                            <div id="coach_container">

                            </div> <!-- row -->
                        </div> <!-- col-6 -->
                    </div> <!-- row -->
                </div> <!--card-body-->
            </div> <!--card-->
        </div> <!-- col-12 -->
    </div> <!-- row -->
@endsection

@push('before-scripts')
    <script>
        /**
         * Get all coach based on the selected activity id.
         */
        $(document).on('click', 'tr.customer_activity', function (e) {
            const customerActivity = $(this),
                coachContainer = $("#coach_container");
            let activityRoute = "{{ route('admin.activity.show', ':activityId') }}",
                html = null;
            activityRoute = activityRoute.replace(':activityId', customerActivity.data('activity_id'));

            $(".customer_activity").each(function () {
                if ($(this).hasClass('selected_activity')) {
                    $(this).removeClass('selected_activity');
                }
            });

            $(this).addClass('selected_activity');

            $.ajax({
                type: "GET",
                url: activityRoute,
                dataType: "JSON"
            }).done(function (activity) {
                console.log(activity);

                html = "<div class='card animated fadeInRight' id='activity-'" + activity.id + "'>";
                html += "<div class='card-body'>";
                html += "<div class='row'>";
                html += "<div class='col-12'>";
                html += "<h4 class='card-title'>" + activity.name + " Information</h4>";
                html += "</div> <!-- col-12 -->";
                html += "</div> <!-- row -->";

                html += "<hr>";

                html += "<div class='row'>";
                html += "<div class='col-12'>";
                html += "<form class='form-horizontal'>";
                html += "<div class='form-group row'>";
                html += "<label id='coaches' class='col-2'>Coaches</label>";

                html += "<div class='col-10'>";
                html += "<select class='form-control select2-single' name='coaches' id='coaches' value='" + activity.sessions + "'>";
                html += "<option value=''></option>";
                for (let i = 0; i < Object.keys(activity.activity_coaches).length; i++) {
                    let coach = activity.activity_coaches[i];

                    html += "<option value='" + coach.id + "'>" + coach.name + "</option>";
                }
                html += "</select>";
                html += "</div>";
                html += "</div> <!-- form-group -->";

                if (customerActivity.data('status') == "N/A") {
                    html += "<div class='form-group row'>";
                    html += "<label id='remaining_quota' class='col-2'>Remaining Quota</label>";

                    html += "<div class='col-10'>" +
                        "<input class='form-control' name='remaining_quota' id='remaining_quota' value='" + activity.quota + "' disabled> " +
                        "</div>";
                    html += "</div> <!-- form-group -->";
                }

                if (customerActivity.data('status') != "N/A") {
                    html += "<div class='form-group row'>";
                    html += "<label id='remaining_session' class='col-2'>Remaining Sessions</label>";

                    html += "<div class='col-10'>" +
                        "<input class='form-control' name='remaning_session' id='remaining_session' value='" + activity.sessions + "' disabled> " +
                        "</div>";
                    html += "</div> <!-- form-group -->";
                } else {
                    if (activity.quota != 0) {
                        html += "<div class='form-group row'>";
                        html += "<label id='remaining_session' class='col-2'>Non-Member Rate</label>";

                        html += "<div class='col-10'>" +
                            "<input class='form-control' name='remaning_session' id='remaining_session' value='" + activity.non_member_rate + "' disabled> " +
                            "</div>";
                        html += "</div> <!-- form-group -->";
                    } else {
                        let shareIncome = parseFloat(activity.non_member_rate / 2);

                        html += "<div class='form-group row'>";
                        html += "<label id='gym_income' class='col-2'>Gym Income</label>";

                        html += "<div class='col-10'>" +
                            "<input class='form-control' name='gym_income' id='gym_income' value='" + shareIncome + "' disabled> " +
                            "</div>";
                        html += "</div> <!-- form-group -->";

                        html += "<div class='form-group row'>";
                        html += "<label id='coach_income' class='col-2'>Coach Income</label>";

                        html += "<div class='col-10'>" +
                            "<input class='form-control' name='coach_income' id='coach_income' value='" + shareIncome + "' disabled> " +
                            "</div>";
                        html += "</div> <!-- form-group -->";
                    }
                }

                html += "</form>";
                html += "</div> <!-- col-12 -->";
                html += "</div> <!-- row -->";
                html += "</div> <!-- card-body -->";
                html += "</div> <!-- animated -->";

                coachContainer.html(html);
                loadSelect();
            });
        });

        function loadSelect() {
            $(document).find('select').select2({
                placeholder: "Select a coach",
                theme: "bootstrap"
            });
        }
    </script>

@endpush
