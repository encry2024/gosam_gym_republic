<div class="table-responsive">
    <table class="table">
        <thead>
            <th>Activity</th>
            <th>Coach</th>
            <th>Monthly Fee</th>
            <th>Activity Date Subscription</th>
            <th>Expiry</th>
            <th>Membership Subscription</th>
            <th>Expiry</th>
        </thead>
        <tbody>
            @foreach($customer->memberships as $membership)
                <tr>
                    <td>{{ $membership->activity->name }}</td>
                    <td>{{ $membership->coach->name }}</td>
                    <td>{{ number_format($membership->monthly_fee, 2) }}</td>
                    <td>{{ date('F d, Y', strtotime($membership->activity_date_subscription)) }}</td>
                    <td>{{ date('F d, Y', strtotime($membership->activity_date_expiry)) }}</td>
                    <td>{{ date('F d, Y', strtotime($membership->date_registered)) }}</td>
                    <td>{{ date('F d, Y', strtotime($membership->date_expiry)) }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>