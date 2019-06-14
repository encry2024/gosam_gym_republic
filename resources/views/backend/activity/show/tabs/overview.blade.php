<div class="col">
    <div class="table-responsive">
        <table class="table table-hover">
            <tr>
                <th>@lang('labels.backend.activities.tabs.content.overview.name')</th>
                <td>{{ $activity->name }}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.activities.tabs.content.overview.member_rate')</th>
                <td>{{ $activity->member_fee }}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.activities.tabs.content.overview.non_member_rate')</th>
                <td>{{ $activity->non_member_fee }}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.activities.tabs.content.overview.coach_fee')</th>
                <td>{{ $activity->coach_rate }}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.activities.tabs.content.overview.monthly_rate')</th>
                <td>{{ $activity->monthly_fee }}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.activities.tabs.content.overview.membership_fee')</th>
                <td>{{ $activity->membership_rate }}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.activities.tabs.content.overview.sessions')</th>
                <td>{{ $activity->sessions }}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.activities.tabs.content.overview.quota')</th>
                <td>{{ $activity->quota }}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.activities.tabs.content.overview.created_at')</th>
                <td>{{ date('F d, Y h:i A', strtotime($activity->created_at)) }}</td>
            </tr>

            <tr>
                <th>@lang('labels.backend.activities.tabs.content.overview.updated_at')</th>
                <td>{{ date('F d, Y h:i A', strtotime($activity->updated_at)) }}</td>
            </tr>
        </table>
    </div>
</div><!--table-responsive-->
