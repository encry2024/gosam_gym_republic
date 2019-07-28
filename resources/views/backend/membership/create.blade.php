@extends('backend.layouts.app')

@section('title', __('labels.backend.memberships.management') . ' | ' . __('labels.backend.memberships.create'))

@section('content')

    {{ html()->form('POST', route('admin.membership.store'))->class('form-horizontal')->open() }}
    <input type="hidden" name="registered_activities" id="registered_activities">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4 class="card-title mb-0">
                                Customer Information
                            </h4>
                        </div><!--col-->
                    </div><!--row-->

                    <hr>

                    <div class="row mt-4 mb-4">
                        @include('backend.membership.create.tabs.customer.information')
                    </div><!--row-->
                </div><!--card-body-->
            </div><!--card-->
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-7">
                            <h4 class="card-title mb-0">
                                Activity Membership Registration
                            </h4>
                        </div><!--col-->

                        <div class="col-sm-5">
                            <div class="btn-toolbar float-right" role="toolbar"
                                 aria-label="@lang('labels.general.toolbar_btn_groups')">
                                <a href="#" data-toggle="modal"
                                   data-target="#registerActivityModal"
                                   class="btn btn-md btn-success ml-1"
                                   rel="tooltip"
                                   data-original-title="Register Activity">
                                    <i class="fas fa-plus-circle"></i></a>
                            </div><!--btn-toolbar-->
                        </div><!--col-->
                    </div><!--row-->

                    <hr>

                    <div class="row mt-4 mb-4">
                        @include('backend.membership.create.tabs.membership.activity')
                    </div><!--row-->
                </div><!--card-body-->
            </div><!--card-->
        </div>
    </div>

    <div class="card-footer clearfix">
        <div class="row">
            <div class="col">
                {{ form_cancel(route('admin.customer.index'), __('buttons.general.cancel')) }}
            </div><!--col-->

            <div class="col text-right">
                {{ form_submit(__('buttons.general.crud.create')) }}
            </div><!--col-->
        </div><!--row-->
    </div><!--card-footer-->
    <br>
    {{ html()->form()->close() }}

    <!-- Register Activity Modal -->
    <div class="modal fade in" tabindex="-1" role="dialog" id="registerActivityModal">
        <div id="ajaxSpinnerContainer" style="display: none;">
            <div id="ajaxSpinner"></div>
        </div>
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Register Activity</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="row mt-4 mb-4">
                        <div class="col">
                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.activity_id'))
                                ->class('col-md-4 form-control-label')->for('activity_id') }}

                                <div class="col-md-8">
                                    <select name="activity_id" id="activity_id" class="form-control select2-single">
                                        <option value=""></option>
                                        @foreach ($activities as $activity)
                                            <option value="{{ $activity->id }}">{{ $activity->name }}</option>
                                        @endforeach
                                    </select>
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.activities.monthly_rate'))
                                ->class('col-md-4 form-control-label')->for('monthly_rate') }}

                                <div class="col-md-8">
                                    {{ html()->text('monthly_rate')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.activities.monthly_rate'))
                                        ->attribute('maxlength', 191)
                                        ->required() }}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.coach_id'))
                                ->class('col-md-4 form-control-label')->for('coach_id') }}

                                <div class="col-md-8">
                                    <select name="coach_id" id="coach_id" class="form-control select2-single">
                                        <option value=""></option>
                                    </select>
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.activities.coach_fee'))
                                ->class('col-md-4 form-control-label')->for('coach_fee') }}

                                <div class="col-md-8">
                                    {{ html()->text('coach_fee')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.activities.coach_fee'))
                                        ->attribute('maxlength', 191)
                                        ->required() }}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.activity_date_subscription'))
                                ->class('col-md-4 form-control-label')->for('activity_date_subscription') }}

                                <div class="col-md-8">
                                    {{ html()->date('activity_date_subscription')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.memberships.activity_date_subscription'))
                                        ->attribute('maxlength', 191)
                                        ->required()
                                        ->value(date('Y-m-d')) }}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.activity_date_expiry'))
                                ->class('col-md-4 form-control-label')->for('activity_date_expiry') }}

                                <div class="col-md-8">
                                    {{ html()->date('activity_date_expiry')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.memberships.activity_date_expiry'))
                                        ->attribute('maxlength', 191)
                                        ->required()
                                         ->value(date('Y-m-d', strtotime("+1 month")))}}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.fee'))
                                ->class('col-md-4 form-control-label')->for('fee') }}

                                <div class="col-md-8">
                                    {{ html()->text('fee')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.memberships.fee'))
                                        ->attribute('maxlength', 191)
                                        ->required() }}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.date_subscription'))
                                ->class('col-md-4 form-control-label')->for('date_subscription') }}

                                <div class="col-md-8">
                                    {{ html()->date('date_subscription')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.memberships.date_subscription'))
                                        ->attribute('maxlength', 191)
                                        ->required()
                                         ->value(date('Y-m-d')) }}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.date_expiry'))
                                ->class('col-md-4 form-control-label')->for('date_expiry') }}

                                <div class="col-md-8">
                                    {{ html()->date('date_expiry')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.memberships.date_expiry'))
                                        ->attribute('maxlength', 191)
                                        ->required()
                                         ->value(date('Y-m-d', strtotime("+1 year"))) }}
                                </div><!--col-->
                            </div><!--form-group-->
                        </div><!--col-->
                    </div><!--row-->
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success" id="registerActivityBtn">Save Activities</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modify Selected Activity Modal -->
    <div class="modal fade in" tabindex="-2" role="dialog" id="modifySelectedActivityModal">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Update Selected Activity</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="row mt-4 mb-4">
                        <div class="col">
                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.activity_id'))
                                ->class('col-md-4 form-control-label')->for('activity_id') }}

                                <div class="col-md-8">
                                    <select name="activity_id" id="update_activity_id"
                                            class="form-control select2-single">
                                        <option value=""></option>
                                        @foreach ($activities as $activity)
                                            <option value="{{ $activity->id }}">{{ $activity->name }}</option>
                                        @endforeach
                                    </select>
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.activities.monthly_rate'))
                                ->class('col-md-4 form-control-label')->for('update_monthly_rate') }}

                                <div class="col-md-8">
                                    {{ html()->text('update_monthly_rate')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.activities.monthly_rate'))
                                        ->attribute('maxlength', 191)
                                        ->required() }}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.coach_id'))
                                ->class('col-md-4 form-control-label')->for('coach_id') }}

                                <div class="col-md-8">
                                    <select name="coach_id" id="update_coach_id" class="form-control select2-single">
                                        <option value=""></option>
                                    </select>
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.activities.coach_fee'))
                                ->class('col-md-4 form-control-label')->for('update_coach_fee') }}

                                <div class="col-md-8">
                                    {{ html()->text('update_coach_fee')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.activities.monthly_rate'))
                                        ->attribute('maxlength', 191)
                                        ->required() }}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.activity_date_subscription'))
                                ->class('col-md-4 form-control-label')->for('update_activity_date_subscription') }}

                                <div class="col-md-8">
                                    {{ html()->date('update_activity_date_subscription')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.memberships.activity_date_subscription'))
                                        ->attribute('maxlength', 191)
                                        ->required()
                                        ->value(date('Y-m-d')) }}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.activity_date_expiry'))
                                ->class('col-md-4 form-control-label')->for('update_activity_date_expiry') }}

                                <div class="col-md-8">
                                    {{ html()->date('update_activity_date_expiry')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.memberships.activity_date_expiry'))
                                        ->attribute('maxlength', 191)
                                        ->required()
                                         ->value(date('Y-m-d', strtotime("+1 month")))}}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.fee'))
                                ->class('col-md-4 form-control-label')->for('update_fee') }}

                                <div class="col-md-8">
                                    {{ html()->text('update_fee')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.memberships.fee'))
                                        ->attribute('maxlength', 191)
                                        ->required() }}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.date_subscription'))
                                ->class('col-md-4 form-control-label')->for('update_date_subscription') }}

                                <div class="col-md-8">
                                    {{ html()->date('update_date_subscription')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.memberships.date_subscription'))
                                        ->attribute('maxlength', 191)
                                        ->required()
                                         ->value(date('Y-m-d')) }}
                                </div><!--col-->
                            </div><!--form-group-->

                            <div class="form-group row">
                                {{ html()->label(__('validation.attributes.backend.memberships.date_expiry'))
                                ->class('col-md-4 form-control-label')->for('update_date_expiry') }}

                                <div class="col-md-8">
                                    {{ html()->date('update_date_expiry')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.backend.memberships.date_expiry'))
                                        ->attribute('maxlength', 191)
                                        ->required()
                                         ->value(date('Y-m-d', strtotime("+1 year"))) }}
                                </div><!--col-->
                            </div><!--form-group-->
                        </div><!--col-->
                    </div><!--row-->
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger" id="removeActivityBtn">Remove</button>
                    <button type="button" class="btn btn-info" id="updateActivityBtn">Update</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('after-scripts')
    <script>
        const registerActivityBtn = $("#registerActivityBtn"),
            activityField = $("#activity_id"),
            registeredActivitiesField = $("#registeredActivities"),
            coachField = $("#coach_id"),
            activityDateSubscriptionField = $("#activity_date_subscription"),
            activityDateExpiryField = $("#activity_date_expiry"),
            membershipFeeField = $("#fee"),
            dateSubscriptionField = $("#date_subscription"),
            monthlyRateField = $("#monthly_rate"),
            dateExpiryField = $("#date_expiry"),
            coachFeeField = $("#coach_fee"),
            updateActivityBtn = $("#updateActivityBtn"),
            removeActivityBtn = $("#removeActivityBtn"),
            modifySelectedActivityModal = $("#modifySelectedActivityModal"),

            updateActivityField = $("#update_activity_id"),
            updateCoachField = $("#update_coach_id"),
            updateActivityDateSubscriptionField = $("#update_activity_date_subscription"),
            updateActivityDateExpiryField = $("#update_activity_date_expiry"),
            updateMembershipFeeField = $("#update_fee"),
            updateDateSubscriptionField = $("#update_date_subscription"),
            updateMonthlyRateField = $("#update_monthly_rate"),
            updateCoachFeeField = $("#update_coach_fee"),
            updateDateExpiryField = $("#update_date_expiry");

        let activity = {
                object: {},
                coach_id: 0
            },
            html = null;

        let selectedIndex = null;

        activityField.select2({
            placeholder: 'Select Activities...',
            width: '100%',
            dropdownParent: $('#registerActivityModal'),
            theme: 'bootstrap'
        });

        coachField.select2({
            placeholder: "Select Coache s...",
            theme: "bootstrap",
            dropdownParent: $("#registerActivityModal")
        });

        activityField.on('select2:select', function () {
            const selectedId = $(this).val();
            coachField.html("");

            let url = "{{ route('admin.activity.getRelatedCoaches', ':activity') }}";
            url = url.replace(':activity', selectedId);

            $.ajax({
                type: "GET",
                url: url,
                dataType: "JSON",
                success: function (activityObject) {
                    coachField.select2({
                        data: activityObject.coach,
                        placeholder: "Select Coaches...",
                        theme: "bootstrap",
                        dropdownParent: $("#registerActivityModal")
                    }).trigger('change');

                    membershipFeeField.val(activityObject.membership_fee);
                    monthlyRateField.val(activityObject.monthly_rate);
                    coachFeeField.val(activityObject.coach_fee);
                }
            });
        });

        updateActivityField.select2({
            placeholder: "Select Activities...",
            theme: "bootstrap",
            dropdownParent: $("#modifySelectedActivityModal")
        }).on('select2:select', function () {
            const selectedId = $(this).val(),
                coachId = activity.coach_id;

            let url = "{{ route('admin.activity.getRelatedCoaches', ':activity') }}";
            url = url.replace(':activity', selectedId);

            updateCoachField.html("");
            updateCoachField.select();

            $.ajax({
                type: "GET",
                url: url,
                dataType: "JSON",
                success: function (activityObject) {
                    let coaches = [];

                    for (let i = 0; i < Object.keys(activityObject.coach).length; i++) {
                        let data = activityObject.coach[i];

                        if (data.id == coachId) {
                            coaches.push({
                                id: data.id,
                                text: data.text,
                                selected: true
                            });
                        } else {
                            coaches.push({
                                id: data.id,
                                text: data.text
                            });
                        }
                    }

                    updateCoachField.select2({
                        data: coaches,
                        placeholder: "Select Coaches...",
                        theme: "bootstrap",
                        dropdownParent: modifySelectedActivityModal
                    }).trigger('change');
                }
            });

            $("#updateActivityBtn").data('activity-object-id', selectedIndex).attr('data-activity-object-id', selectedId + "-" + updateCoachField.val());
        });

        updateCoachField.select2({
            placeholder: "Select Coaches...",
            theme: "bootstrap",
            dropdownParent: $("#modifySelectedActivityModal")
        }).on('select2:select', function () {
            const index = updateActivityField.val() + "-" + updateCoachField.val();

            $("#updateActivityBtn").data('activity-object-id', selectedIndex).attr('data-activity-object-id', index);
        });

        registerActivityBtn.on('click', function () {
            const index = activityField.val() + "-" + coachField.val();

            if (!activity.object[index]) {
                Swal.fire({
                    title: "Register selected activity?",
                    showCancelButton: true,
                    confirmButtonText: 'Register',
                    cancelButtonText: 'Cancel',
                    type: 'info'
                }).then((result) => {
                    if (result.value) {
                        html = "<tr data-id='" + activityField.val() + "-" + coachField.val() + "' data-toggle='modal' data-target='#modifySelectedActivityModal'>";
                        html += "<td>" + $("#activity_id option:selected").html() + "</td>";
                        html += "<td>" + monthlyRateField.val() + "</td>";
                        html += "<td>" + $("#coach_id option:selected").html() + "</td>";
                        html += "<td>" + coachFeeField.val() + "</td>";
                        html += "<td>" + activityDateSubscriptionField.val() + "</td>";
                        html += "<td>" + activityDateExpiryField.val() + "</td>";
                        html += "<td>" + membershipFeeField.val() + "</td>";
                        html += "<td>" + dateSubscriptionField.val() + "</td>";
                        html += "<td>" + dateExpiryField.val() + "</td>";
                        html += "</tr>";

                        registeredActivitiesField.append(html);
                    }
                });
            } else {
                Swal.fire({
                    title: "You already have selected this Coach and Activity",
                    type: 'warning'
                });
            }

            activity.object[activityField.val() + "-" + coachField.val()] = {
                activity_id: activityField.val(),
                monthly_rate: monthlyRateField.val(),
                coach_id: coachField.val(),
                coach_fee: coachFeeField.val(),
                activity_date_subscription: activityDateSubscriptionField.val(),
                activity_date_expiry: activityDateExpiryField.val(),
                fee: membershipFeeField.val(),
                date_subscription: dateSubscriptionField.val(),
                date_expiry: dateExpiryField.val()
            };

            $("#registered_activities").val(JSON.stringify(activity.object));
        });

        // tr open modify
        $('body').on('click', 'tr', '.selectable_activity', function (e) {
            const selectedId = activity.object[$(this).data('id')].activity_id,
                coachId = activity.object[$(this).data('id')].coach_id;

            activity.coach_id = coachId;

            let url = "{{ route('admin.activity.getRelatedCoaches', ':activity') }}";
            url = url.replace(':activity', selectedId);

            updateCoachField.html("");
            updateCoachField.select();

            $.ajax({
                type: "GET",
                url: url,
                dataType: "JSON",
                success: function (activityObject) {
                    let coaches = [];

                    for (let i = 0; i < Object.keys(activityObject.coach).length; i++) {
                        let data = activityObject.coach[i];

                        if (data.id == coachId) {
                            coaches.push({
                                id: data.id,
                                text: data.text,
                                selected: true
                            });
                        } else {
                            coaches.push({
                                id: data.id,
                                text: data.text
                            });
                        }
                    }

                    console.log(coaches);

                    updateCoachField.select2({
                        data: coaches,
                        placeholder: "Select Coaches...",
                        theme: "bootstrap",
                        dropdownParent: modifySelectedActivityModal
                    }).trigger('change');
                }
            });

            selectedIndex = $(this).data('id');

            modifySelectedActivityModal.find("#update_activity_id").val(activity.object[selectedIndex].activity_id);
            modifySelectedActivityModal.find("#update_activity_id").select2({
                placeholder: "Select Activity...",
                theme: "bootstrap",
                dropdownParent: $("#modifySelectedActivityModal")
            }).trigger('change');
            modifySelectedActivityModal.find("#update_coach_id").val(activity.object[selectedIndex].coach_id);
            modifySelectedActivityModal.find("#update_coach_id").select2({
                placeholder: "Select Coach...",
                theme: "bootstrap",
                dropdownParent: modifySelectedActivityModal
            }).trigger('change');

            modifySelectedActivityModal.find("#update_monthly_fee")
                .val(activity.object[selectedIndex].coach_id);
            modifySelectedActivityModal.find("#update_monthly_fee")
                .val(activity.object[selectedIndex].coach_fee);
            modifySelectedActivityModal.find("#update_activity_date_subscription")
                .val(activity.object[selectedIndex].activity_date_subscription);
            modifySelectedActivityModal.find("#update_activity_date_expiry")
                .val(activity.object[selectedIndex].activity_date_subscription);
            modifySelectedActivityModal.find("#update_fee")
                .val(activity.object[selectedIndex].fee);
            modifySelectedActivityModal.find("#update_date_subscription")
                .val(activity.object[selectedIndex].date_subscription);
            modifySelectedActivityModal.find("#update_monthly_rate")
                .val(activity.object[selectedIndex].monthly_rate);
            modifySelectedActivityModal.find("#update_date_expiry")
                .val(activity.object[selectedIndex].activity_date_expiry);
        });

        updateActivityBtn.on('click', function () {
            const currentIndex = updateActivityField.val() + "-" + updateCoachField.val();

            if (!activity.object[currentIndex]) {
                Swal.fire({
                    title: "Update selected activity?",
                    showCancelButton: true,
                    confirmButtonText: 'Update',
                    cancelButtonText: 'Cancel',
                    type: 'info'
                }).then((result) => {
                    if (result.value) {
                        delete activity.object[selectedIndex];

                        activity.object[currentIndex] = {
                            activity_id: updateActivityField.val(),
                            monthly_rate: updateMonthlyRateField.val(),
                            coach_id: updateCoachField.val(),
                            coach_fee: updateCoachFeeField.val(),
                            activity_date_subscription: updateActivityDateSubscriptionField.val(),
                            activity_date_expiry: updateActivityDateExpiryField.val(),
                            fee: updateMembershipFeeField.val(),
                            date_subscription: updateDateSubscriptionField.val(),
                            date_expiry: updateDateExpiryField.val()
                        };

                        html = "<td>" + $("#update_activity_id option:selected").html() + "</td>";
                        html += "<td>" + $("#update_monthly_rate").val() + "</td>";
                        html += "<td>" + $("#update_coach_id option:selected").html() + "</td>";
                        html += "<td>" + $("#update_coach_fee").val() + "</td>";
                        html += "<td>" + $("#update_activity_date_subscription").val() + "</td>";
                        html += "<td>" + $("#update_activity_date_expiry").val() + "</td>";
                        html += "<td>" + $("#update_fee").val() + "</td>";
                        html += "<td>" + $("#update_date_subscription").val() + "</td>";
                        html += "<td>" + $("#update_date_expiry").val() + "</td>";
                        html += "</tr>";

                        registeredActivitiesField.find('[data-id="' + $(this).data('activity-object-id') + '"]')
                            .attr('data-id', currentIndex)
                            .html(html);

                        selectedIndex = currentIndex;

                        $("#registered_activities").val(activity.object);
                    }
                });
            } else {
                Swal.fire({
                    title: "Update",
                    text: "The selected activity already exists. Would you like to update the existing activity information instead?",
                    showCancelButton: true,
                    confirmButtonText: 'Update',
                    cancelButtonText: 'Cancel',
                    type: 'info'
                }).then((result) => {
                    if (result.value) {
                        activity.object[currentIndex] = {
                            activity_id: updateActivityField.val(),
                            coach_id: updateCoachField.val(),
                            monthly_rate: updateMonthlyRateField.val(),
                            activity_date_subscription: updateActivityDateSubscriptionField.val(),
                            activity_date_expiry: updateActivityDateExpiryField.val(),
                            fee: updateMembershipFeeField.val(),
                            date_subscription: updateDateSubscriptionField.val(),
                            date_expiry: updateDateExpiryField.val()
                        };

                        html = "<td>" + $("#update_activity_id option:selected").html() + "</td>";
                        html += "<td>" + $("#update_coach_id option:selected").html() + "</td>";
                        html += "<td>" + $("#update_monthly_rate").val() + "</td>";
                        html += "<td>" + $("#update_activity_date_subscription").val() + "</td>";
                        html += "<td>" + $("#update_activity_date_expiry").val() + "</td>";
                        html += "<td>" + $("#update_fee").val() + "</td>";
                        html += "<td>" + $("#update_date_subscription").val() + "</td>";
                        html += "<td>" + $("#update_date_expiry").val() + "</td>";
                        html += "</tr>";

                        registeredActivitiesField.find('[data-id="' + currentIndex + '"]').html(html);

                        Swal.fire({
                            title: "Activity was updated successful!",
                            confirmButtonText: 'confirm',
                            type: 'success'
                        })
                    }
                });
            }

            $("#registered_activities").val(activity.object);
        });

        removeActivityBtn.on('click', function () {
            let currentIndex = updateActivityField.val() + "-" + updateCoachField.val();

            Swal.fire({
                title: "Delete Activity",
                text: "Are you sure you want to delete this activity and coach?",
                showCancelButton: true,
                confirmButtonText: 'Delete',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then((result) => {
                if (result.value) {
                    if (activity.object[currentIndex]) {
                        delete activity.object[currentIndex];

                        registeredActivitiesField.find('[data-id="' + currentIndex + '"]').remove();

                        Swal.fire({
                            title: "Activity and coach was deleted successful!",
                            confirmButtonText: 'confirm',
                            type: 'success'
                        });
                    } else {
                        Swal.fire({
                            title: "The selected activity and coach does not exists.",
                            confirmButtonText: 'error',
                            type: 'error'
                        });
                    }
                }
            });
        });
    </script>
@endpush
