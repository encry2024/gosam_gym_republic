@extends('backend.layouts.app')

@section('title', __('labels.backend.activities.management') . ' | ' . __('labels.backend.activities.deleted'))

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    @lang('labels.backend.activities.management')
                    <small class="text-muted">@lang('labels.backend.activities.deleted')</small>
                </h4>
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>@lang('labels.backend.activities.table.name')</th>
                                <th>@lang('labels.backend.activities.table.member_rate')</th>
                                <th>@lang('labels.backend.activities.table.non_member_rate')</th>
                                <th>@lang('labels.backend.activities.table.coach_fee')</th>
                                <th>@lang('labels.backend.activities.table.monthly_rate')</th>
                                <th>@lang('labels.backend.activities.table.membership_fee')</th>
                                <th>@lang('labels.backend.activities.table.session')</th>
                                <th>@lang('labels.backend.activities.table.quota')</th>
                                <th>@lang('labels.backend.activities.table.updated_at')</th>
                                <th>@lang('labels.general.actions')</th>
                            </tr>
                        </thead>

                        <tbody>
                        @if($activities->count())
                            @foreach($activities as $activity)
                                <tr>
                                    <td>{{ $activity->name }}</td>
                                    <td>{{ $activity->member_fee }}</td>
                                    <td>{{ $activity->non_member_fee }}</td>
                                    <td>{{ $activity->coach_rate }}</td>
                                    <td>{{ $activity->monthly_fee }}</td>
                                    <td>{{ $activity->membership_rate }}</td>
                                    <td>{{ $activity->sessions }}</td>
                                    <td>{{ $activity->quota }}</td>
                                    <td>{{ $activity->updated_at->diffForHumans() }}</td>
                                    <td>{!! $activity->action_buttons !!}</td>
                                </tr>
                            @endforeach
                        @else
                            <tr><td colspan="9"><p class="text-center">@lang('strings.backend.activities.no_deleted')</p></td></tr>
                        @endif
                        </tbody>
                    </table>
                </div>
            </div><!--col-->
        </div><!--row-->
        <div class="row">
            <div class="col-7">
                <div class="float-left">
                    {!! $activities->total() !!} {{ trans_choice('labels.backend.activities.table.total', $activities->total()) }}
                </div>
            </div><!--col-->

            <div class="col-5">
                <div class="float-right">
                    {!! $activities->render() !!}
                </div>
            </div><!--col-->
        </div><!--row-->
    </div><!--card-body-->
</div><!--card-->
@endsection
