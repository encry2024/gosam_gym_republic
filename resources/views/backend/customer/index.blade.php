@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.backend.customers.management'))

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    {{ __('labels.backend.customers.management') }} <small class="text-muted">{{ __('labels.backend.customers.list') }}</small>
                </h4>
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>@lang('labels.backend.customers.table.last_name')</th>
                            <th>@lang('labels.backend.customers.table.first_name')</th>
                            <th>@lang('labels.backend.customers.table.membership_status')</th>
                            <th>@lang('labels.backend.customers.table.contact_number')</th>
                            <th>@lang('labels.backend.customers.table.updated_at')</th>
                            <th>@lang('labels.general.actions')</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($customers as $customer)
                            <tr>
                                <td>{{ $customer->last_name }}</td>
                                <td>{{ $customer->first_name }}</td>
                                <td>{{ $customer->membership_status }}</td>
                                <td>{{ $customer->contact_number }}</td>
                                <td>{{ $customer->updated_at->diffForHumans() }}</td>
                                <td>{!! $customer->action_buttons !!}</td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div><!--col-->
        </div><!--row-->
        <div class="row">
            <div class="col-7">
                <div class="float-left">
                    {!! $customers->total() !!} {{ trans_choice('labels.backend.customers.table.total', $customers->total()) }}
                </div>
            </div><!--col-->

            <div class="col-5">
                <div class="float-right">
                    {!! $customers->render() !!}
                </div>
            </div><!--col-->
        </div><!--row-->
    </div><!--card-body-->
</div><!--card-->
@endsection
