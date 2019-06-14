@extends('backend.layouts.app')

@section('title', __('labels.backend.activities.management') . ' | ' . __('labels.backend.activities.view'))

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    @lang('labels.backend.activities.management')
                    <small class="text-muted">@lang('labels.backend.activities.view', ['activity' => $activity->name])</small>
                </h4>
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4 mb-4">
            <div class="col">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-expanded="true"><i class="fas fa-activity"></i> @lang('labels.backend.activities.tabs.titles.overview')</a>
                    </li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane active" id="overview" role="tabpanel" aria-expanded="true">
                        @include('backend.activity.show.tabs.overview')
                    </div><!--tab-->
                </div><!--tab-content-->
            </div><!--col-->
        </div><!--row-->
    </div><!--card-body-->

    <div class="card-footer">
        <div class="row">
            <div class="col">
                <small class="float-right text-muted">
                    <strong>@lang('labels.backend.activities.tabs.content.overview.created_at'):</strong> {{ timezone()->convertToLocal($activity->created_at) }} ({{ $activity->created_at->diffForHumans() }}),
                    <strong>@lang('labels.backend.activities.tabs.content.overview.updated_at'):</strong> {{ timezone()->convertToLocal($activity->updated_at) }} ({{ $activity->updated_at->diffForHumans() }})
                    @if($activity->trashed())
                        <strong>@lang('labels.backend.activities.tabs.content.overview.deleted_at'):</strong> {{ timezone()->convertToLocal($activity->deleted_at) }} ({{ $activity->deleted_at->diffForHumans() }})
                    @endif
                </small>
            </div><!--col-->
        </div><!--row-->
    </div><!--card-footer-->
</div><!--card-->
@endsection
