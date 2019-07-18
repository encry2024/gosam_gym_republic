@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.backend.memberships.management'))

@section('content')
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        {{ __('labels.backend.memberships.management') }} <small class="text-muted">{{ __('labels.backend.memberships.list') }}</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->

            <div class="row mt-4">
                <div class="col">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Coach Name</th>
                                <th>Activity</th>
                                <th>Monthly Fee</th>
                                <th>Subs. Date</th>
                                <th>Subs. Expiry</th>
                                <th>Mem. Fee</th>
                                <th>Date Rgst.</th>
                                <th>Date Expiry</th>
                                <th>Status</th>
                                <th>@lang('labels.general.actions')</th>
                            </tr>
                            </thead>

                            <tbody>
                                @foreach($memberships as $membership)
                                    <tr>
                                        <td>{{ $membership->customer->name }}</td>
                                        <td>{{ $membership->coach->name}}</td>
                                        <td>{{ $membership->activity->name }}</td>
                                        <td>PHP {{ number_format($membership->monthly_fee, 2) }}</td>
                                        <td>{{ $membership->activity_date_subscription }}</td>
                                        <td>{{ $membership->activity_date_expiry }}</td>
                                        <td>PHP {{ number_format($membership->fee, 2) }}</td>
                                        <td>{{ $membership->date_registered }}</td>
                                        <td>{{ $membership->date_expiry }}</td>
                                        <td>{!! $membership->status_label !!}</td>
                                        <td>{!! $membership->action_buttons !!}</td>
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
                        {!! $memberships->total() !!} {{ trans_choice('labels.backend.memberships.table.total', $memberships->total()) }}
                    </div>
                </div><!--col-->

                <div class="col-5">
                    <div class="float-right">
                        {!! $memberships->render() !!}
                    </div>
                </div><!--col-->
            </div><!--row-->
        </div><!--card-body-->
    </div><!--card-->
@endsection
