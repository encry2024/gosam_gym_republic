@extends('backend.layouts.app')

@section('title', __('labels.backend.coaches.management') . ' | ' . __('labels.backend.coaches.deleted'))

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    @lang('labels.backend.coaches.management')
                    <small class="text-muted">@lang('labels.backend.coaches.deleted')</small>
                </h4>
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>@lang('labels.backend.coaches.table.last_name')</th>
                            <th>@lang('labels.backend.coaches.table.first_name')</th>
                            <th>@lang('labels.backend.coaches.table.address')</th>
                            <th>@lang('labels.backend.coaches.table.contact_number')</th>
                            <th>@lang('labels.backend.coaches.table.updated_at')</th>
                            <th>@lang('labels.general.actions')</th>
                        </tr>
                        </thead>
                        <tbody>

                        @if($coaches->count())
                            @foreach($coaches as $coach)
                                <tr>
                                    <td>{{ $coach->last_name }}</td>
                                    <td>{{ $coach->first_name }}</td>
                                    <td>{{ $coach->address }}</td>
                                    <td>{{ $coach->contact_number }}</td>
                                    <td>{{ date('F d, Y h:i A', strtotime($coach->email)) }}</td>
                                    <td>{!! $coach->action_buttons !!}</td>
                                </tr>
                            @endforeach
                        @else
                            <tr><td colspan="9"><p class="text-center">@lang('strings.backend.coaches.no_deleted')</p></td></tr>
                        @endif
                        </tbody>
                    </table>
                </div>
            </div><!--col-->
        </div><!--row-->
        <div class="row">
            <div class="col-7">
                <div class="float-left">
                    {!! $coaches->total() !!} {{ trans_choice('labels.backend.coaches.table.total', $coaches->total()) }}
                </div>
            </div><!--col-->

            <div class="col-5">
                <div class="float-right">
                    {!! $coaches->render() !!}
                </div>
            </div><!--col-->
        </div><!--row-->
    </div><!--card-body-->
</div><!--card-->
@endsection
