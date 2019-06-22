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
    {{ csrf_field() }}
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

                                </select>
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                            {{ html()->label(__('validation.attributes.backend.memberships.activity_date_subscription'))
                            ->class('col-md-4 form-control-label')->for('activity_date_subscription') }}

                            <div class="col-md-8">
                                {{ html()->text('activity_date_subscription')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.memberships.activity_date_subscription'))
                                    ->attribute('maxlength', 191)
                                    ->required() }}
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
                                    ->required() }}
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
                                    ->required() }}
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
@endsection

@push('before-scripts')
    <script>
        (function ($) {
            $(function () {
                let activityField = $("#activity_id");
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
                                activity.object = activityObject

                                return;
                            }
                        });
                    }
                };
                const registerActivityBtn = $("#registerActivityBtn");

                $("select").select2({
                    placeholder: 'Select Activities...',
                    width: '100%',
                    dropdownParent: $('#registerActivityModal'),
                    theme: 'bootstrap'
                });

                activityField.on('select2:select', function (e) {
                    var selectedId = $(this).val();

                    activity.getRelatedCoaches(selectedId);
                });

                registerActivityBtn.on('click', function () {
                    for (let i=0; i<Object.keys(activity.object).length; i++) {

                    }
                });
            });
        }) ( jQuery );
    </script>
@endpush