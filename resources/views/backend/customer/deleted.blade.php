@extends('backend.layouts.app')

@section('title', __('labels.backend.customers.management') . ' | ' . __('labels.backend.customers.deleted'))

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    @lang('labels.backend.customers.management')
                    <small class="text-muted">@lang('labels.backend.customers.deleted')</small>
                </h4>
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>@lang('labels.backend.customers.table.last_name')</th>
                            <th>@lang('labels.backend.customers.table.first_name')</th>
                            <th>@lang('labels.backend.customers.table.address')</th>
                            <th>@lang('labels.backend.customers.table.contact_number')</th>
                            <th>@lang('labels.backend.customers.table.deleted_at')</th>
                            <th>@lang('labels.general.actions')</th>
                        </tr>
                        </thead>
                        <tbody>

                        @if($customers->count())
                            @foreach($customers as $customer)
                                <tr>
                                    <td>{{ $customer->last_name }}</td>
                                    <td>{{ $customer->first_name }}</td>
                                    <td>{{ $customer->address }}</td>
                                    <td>{{ $customer->contact_number }}</td>
                                    <td>{{ date('F d, Y h:i A', strtotime($customer->deleted_at)) }}</td>
                                    <td>{!! $customer->action_buttons !!}</td>
                                </tr>
                            @endforeach
                        @else
                            <tr><td colspan="9"><p class="text-center">@lang('strings.backend.customers.no_deleted')</p></td></tr>
                        @endif
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
