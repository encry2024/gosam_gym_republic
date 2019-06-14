<div class="col">
    <div class="row">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <th>Name</th>
                    <th>Sessions</th>
                    <th>Quota</th>
                </thead>

                <tbody>
                    @foreach ($coach->activityCoaches as $activityCoach)
                    <tr>
                        <td>{{ $activityCoach->name }}</td>
                        <td>{{ $activityCoach->sessions }}</td>
                        <td>{{ $activityCoach->quota }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>