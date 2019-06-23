@extends('backend.layouts.app')

@section('title', __('labels.backend.memberships.management') . ' | ' . __('labels.backend.memberships.create'))

@section('content')
{{ html()->form('POST', route('admin.membership.store'))->class('form-horizontal')->open() }}
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
                            {{ html()->label(__('validation.attributes.backend.memberships.coach_id'))
                            ->class('col-md-4 form-control-label')->for('coach_id') }}

                            <div class="col-md-8">
                                <select name="coach_id" id="coach_id" class="form-control select2-single">
                                    <option value=""></option>
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
<div class="modal fade in" tabindex="-1" role="dialog" id="modifySelectedActivityModal">
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
                                <select name="activity_id" id="update_activity_id" class="form-control select2-single">
                                    <option value=""></option>
                                    @foreach ($activities as $activity)
                                        <option value="{{ $activity->id }}">{{ $activity->name }}</option>
                                    @endforeach
                                </select>
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
                <button type="button" class="btn btn-danger">Remove</button>
                <button type="button" class="btn btn-info" id="updateActivityBtn">Update</button>
            </div>
        </div>
    </div>
</div>
@endsection

@push('before-scripts')
    <script>
        (function ($) {
            $(function () {
                const registerActivityBtn = $("#registerActivityBtn"),
                activityField = $("#activity_id"),
                registeredActivitiesField = $("#registeredActivities"),
                coachField = $("#coach_id"),
                activityDateSubscriptionField = $("#activity_date_subscription"),
                activityDateExpiryField = $("#activity_date_expiry"),
                membershipFeeField = $("#fee"),
                dateSubscriptionField = $("#date_subscription"),
                monthlyRateField = $("#monthly_rate"),
                dateExpiryField = $("#date_expiry");

                var activity = {
                    object: {},
                    getRelatedCoaches: function (activityId) {
                        var url = "{{ route('admin.activity.getRelatedCoaches', ':activity') }}";
                            url = url.replace(':activity', activityId);

                        $.ajax({
                            type: "GET",
                            url: url,
                            dataType: "JSON",
                            success: function (activityObject) {
                                coachField.html("");
                                coachField.select2({
                                    data: activityObject.coach,
                                    placeholder: "Select Coaches...",
                                    theme: "bootstrap",
                                    dropdownParent: $("#registerActivityModal")
                                });

                                $("#update_coach_id").select2({
                                    data: activityObject.coach,
                                    placeholder: "Select Coaches...",
                                    theme: "bootstrap",
                                    dropdownParent: $("#modifySelectedActivityModal")
                                });

                                membershipFeeField.val(activityObject.membership_fee);
                                monthlyRateField.val(activityObject.monthly_rate);
                                console.log(activity);
                            }
                        });
                    },
                }
                html = null;
                let index = 0;

                activityField.select2({
                    placeholder: 'Select Activities...',
                    width: '100%',
                    dropdownParent: $('#registerActivityModal'),
                    theme: 'bootstrap'
                });

                coachField.select2({
                    placeholder: "Select Coaches...",
                    theme: "bootstrap",
                    dropdownParent: $("#registerActivityModal")
                });

                activityField.on('select2:select', function (e) {
                    var selectedId = $(this).val();

                    activity.getRelatedCoaches(selectedId);
                    console.log($("tr").data('id'));
                });

                $("#update_activity_id").select2({
                    placeholder: "Select Coaches...",
                    theme: "bootstrap",
                    dropdownParent: $("#registerActivityModal")
                }).on('select2:select', function () {
                    var selectedId = $(this).val();

                    activity.getRelatedCoaches(selectedId);
                });

                $("#update_coach_id").select2({
                    placeholder: "Select Coaches...",
                    theme: "bootstrap",
                    dropdownParent: $("#registerActivityModal")
                });

                registerActivityBtn.on('click', function () {
                    if (!activity.object[activityField.val()+"-"+coachField.val()]) {
                        html = "<tr data-id='"+activityField.val()+"-"+coachField.val()+"' data-toggle='modal' data-target='#modifySelectedActivityModal'>";
                        html += "<td>"+$("#activity_id option:selected").html()+"</td>";
                        html += "<td>"+$("#coach_id option:selected").html()+"</td>";
                        html += "<td>"+monthlyRateField.val()+"</td>";
                        html += "<td>"+activityDateSubscriptionField.val()+"</td>";
                        html += "<td>"+activityDateExpiryField.val()+"</td>";
                        html += "<td>"+membershipFeeField.val()+"</td>";
                        html += "<td>"+dateSubscriptionField.val()+"</td>";
                        html += "<td>"+dateExpiryField.val()+"</td>";
                        html += "</tr>";

                        registeredActivitiesField.append(html);
                    } else {
                        Swal.fire({
                            title: "You already have selected this Coach and Activity",
                            type: 'warning'
                        });
                    }

                    activity.object[activityField.val()+"-"+coachField.val()] = {
                        activity_id: activityField.val(),
                        coach_id: coachField.val(),
                        activity_date_subscription: activityDateSubscriptionField.val(),
                        activity_date_expiry: activityDateExpiryField.val(),
                        fee: membershipFeeField.val(),
                        date_subscription: dateSubscriptionField.val()
                    };

                    index++;

                    console.log(activity.object);
                });

                $(document).on('click', 'tr', '.selectable_activity', function () {
                    $("#modifySelectedActivityModal").find("#update_activity_id").val(activity.object[$(this).data('id')].activity_id);
                    $("#modifySelectedActivityModal").find("#update_activity_id").select2({
                        placeholder: "Select Activity...",
                        theme: "bootstrap",
                        dropdownParent: $("#modifySelectedActivityModal")
                    }).trigger('change');
                    $("#modifySelectedActivityModal").find("#update_coach_id").val(activity.object[$(this).data('id')].coach_id);
                    $("#modifySelectedActivityModal").find("#update_coach_id").select2({
                        placeholder: "Select Coach...",
                        theme: "bootstrap",
                        dropdownParent: $("#modifySelectedActivityModal")
                    }).trigger('change');
                    // registeredActivitiesField = $("#registeredActivities"),
                    //     coachField = $("#coach_id"),
                    //     activityDateSubscriptionField = $("#activity_date_subscription"),
                    //     activityDateExpiryField = $("#activity_date_expiry"),
                    //     membershipFeeField = $("#fee"),
                    //     dateSubscriptionField = $("#date_subscription"),
                    //     monthlyRateField = $("#monthly_rate"),
                    //     dateExpiryField = $("#date_expiry");
                    $("#modifySelectedActivityModal").find("#update_monthly_fee")
                        .val(activity.object[$(this).data('id')].coach_id);
                    $("#modifySelectedActivityModal").find("#update_activity_date_subscription")
                        .val(activity.object[$(this).data('id')].activity_date_subscription);
                    $("#modifySelectedActivityModal").find("#update_activity_date_expiry")
                        .val(activity.object[$(this).data('id')].activity_date_subscription);
                    $("#modifySelectedActivityModal").find("#update_fee")
                        .val(activity.object[$(this).data('id')].fee);
                    $("#modifySelectedActivityModal").find("#update_date_subscription")
                        .val(activity.object[$(this).data('id')].fee);
                    $("#modifySelectedActivityModal").find("#update_monthly_rate")
                        .val(activity.object[$(this).data('id')].monthly_rate);
                    $("#modifySelectedActivityModal").find("#update_date_expiry")
                        .val(activity.object[$(this).data('id')].date_expiry);
                });
            });
        }) ( jQuery );
    </script>
@endpush