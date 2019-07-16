@extends('backend.layouts.app')

@section('title', __('labels.backend.activities.management') . ' | ' . __('labels.backend.activities.create'))

@section('content')
    {{ html()->form('POST', route('admin.activity.store'))->class('form-horizontal')->open() }}
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-5">
                        <h4 class="card-title mb-0">
                            @lang('labels.backend.activities.management')
                            <small class="text-muted">@lang('labels.backend.activities.create')</small>
                        </h4>
                    </div><!--col-->
                </div><!--row-->

                <hr>

                <div class="row mt-4 mb-4">
                    <div class="col">
                        <div class="form-group row">
                            {{ html()->label(__('validation.attributes.backend.activities.name'))->class('col-md-2 form-control-label')->for('name') }}

                            <div class="col-md-10">
                                {{ html()->text('name')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.activities.name'))
                                    ->attribute('maxlength', 191)
                                    ->required()
                                    ->autofocus() }}
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.activities.member_rate'))->class('col-md-2 form-control-label')->for('member_rate') }}

                            <div class="col-md-10">
                                {{ html()->text('member_rate')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.activities.member_rate'))
                                    ->attribute('maxlength', 191)
                                    ->required() }}
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.activities.non_member_rate'))->class('col-md-2 form-control-label')->for('non_member_rate') }}
                            <div class="col-md-10">
                                {{ html()->text('non_member_rate')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.activities.non_member_rate'))
                                    ->attribute('maxlength', 191)
                                    ->required() }}
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.activities.monthly_rate'))->class('col-md-2 form-control-label')->for('monthly_rate') }}

                            <div class="col-md-10">
                                {{ html()->text('monthly_rate')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.activities.monthly_rate'))
                                    ->attribute('maxlength', 191)
                                    ->required() }}
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.activities.coach_fee'))->class('col-md-2 form-control-label')->for('coach_fee') }}

                            <div class="col-md-10">
                                {{ html()->text('coach_fee')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.activities.coach_fee'))
                                    ->attribute('maxlength', 191)
                                    ->required() }}
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.activities.membership_fee'))->class('col-md-2 form-control-label')->for('membership_fee') }}

                            <div class="col-md-10">
                                {{ html()->text('membership_fee')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.activities.membership_fee'))
                                    ->attribute('maxlength', 191)
                                    ->required() }}
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.activities.sessions'))->class('col-md-2 form-control-label')->for('sessions') }}

                            <div class="col-md-10">
                                {{ html()->text('sessions')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.activities.sessions'))
                                    ->attribute('maxlength', 191)
                                    ->value('12')
                                    ->required() }}
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                        {{ html()->label(__('validation.attributes.backend.activities.quota'))->class('col-md-2 form-control-label')->for('quota') }}

                            <div class="col-md-10">
                                {{ html()->text('quota')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.activities.quota'))
                                    ->attribute('maxlength', 191)
                                    ->value('2')
                                    ->required() }}
                            </div><!--col-->
                        </div><!--form-group-->
                    </div><!--col-->
                </div><!--row-->
            </div><!--card-body-->

            <div class="card-footer clearfix">
                <div class="row">
                    <div class="col">
                        {{ form_cancel(route('admin.activity.index'), __('buttons.general.cancel')) }}
                    </div><!--col-->

                    <div class="col text-right">
                        {{ form_submit(__('buttons.general.crud.create')) }}
                    </div><!--col-->
                </div><!--row-->
            </div><!--card-footer-->
        </div><!--card-->
    {{ html()->form()->close() }}
@endsection

@push('before-scripts')
<script></script>
@endpush