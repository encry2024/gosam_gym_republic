<div class="table-responsive">
    <table class="table">
        <thead>
            <th>Activity</th>
            <th>Coach</th>
            <th>Sessions</th>
            <th>Activity Expiration</th>
            <th>Membership Status</th>
        </thead>
        <tbody>
            @foreach($customer->memberships as $membership)
                <tr>
                    <td>{{ $membership->activity->name }}</td>
                    <td>{{ $membership->coach_id == 0 ? "N/A" : $membership->coach->name }}</td>
                    <td>{{ $membership->sessions }}</td>
                    <td>{{ date('F d, Y', strtotime($membership->activity_date_expiry)) }}</td>
                    <td>{!!  $membership->status_label !!}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
