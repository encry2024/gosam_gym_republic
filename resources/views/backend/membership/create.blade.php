@extends('backend.layouts.app')

@section('title', __('labels.backend.memberships.management') . ' | ' . __('labels.backend.memberships.create'))

@section('content')
{{ html()->form('POST', route('admin.membership.store'))->class('form-horizontal')->open() }}
    <div class="row">
        <div class="col-4">
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

        <div class="col-8">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-7">
                            <h4 class="card-title mb-0">
                                Activity Membership Registration
                            </h4>
                        </div><!--col-->

                        <div class="col-sm-5">
                            <div class="btn-toolbar float-right" role="toolbar" aria-label="@lang('labels.general.toolbar_btn_groups')">
                                <a href="#" data-toggle="modal" data-target="#registerActivitiesModal" class="btn btn-md btn-success ml-1" rel="tooltip" data-original-title="Register Activity"><i class="fas fa-plus-circle"></i></a>
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
@endsection
