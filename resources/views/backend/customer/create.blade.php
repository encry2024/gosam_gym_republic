@extends('backend.layouts.app')

@section('title', __('labels.backend.customers.management') . ' | ' . __('labels.backend.customers.create'))

@section('breadcrumb-links')
    @include('backend.auth.user.includes.breadcrumb-links')
@endsection

@section('content')
{{ html()->form('POST', route('admin.customer.store'))->class('form-horizontal')->open() }}
    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4 class="card-title mb-0">
                                @lang('labels.backend.customers.management')
                                <small class="text-muted">@lang('labels.backend.customers.create')</small>
                            </h4>
                        </div><!--col-->
                    </div><!--row-->

                    <hr>

                    <div class="row mt-4 mb-4">
                        @include('backend.customer.create.tabs.customer.information')
                    </div><!--row-->
                </div><!--card-body-->
            </div><!--card-->
        </div>

        <div class="col-8">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-5">
                            <h4 class="card-title mb-0">
                                Activity Membership Registration
                            </h4>
                        </div><!--col-->

                        <div class="col-sm-7">
                            <div class="btn-toolbar float-right" role="toolbar" aria-label="@lang('labels.general.toolbar_btn_groups')">
                                <a href="#" data-toggle="modal" data-target="#registerActivitiesModal" class="btn btn-success ml-1" rel="tooltip" data-original-title="Register Activities"><i class="fas fa-plus-circle"></i></a>
                            </div><!--btn-toolbar-->
                        </div><!--col-->
                    </div><!--row-->

                    <hr>

                    <div class="row mt-4 mb-4">
                        @include('backend.customer.create.tabs.membership.activity')
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
{{ html()->form()->close() }}
@endsection
