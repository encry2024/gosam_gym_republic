<div class="row">
    <div class="col">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4 bg-indigo">
                    <i class="fas fa-users float-right" style="
                    font-size: 4.5rem;
                    margin-top: 2.5rem;
                    margin-right: 0.2rem;
                    "></i>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Daily Clients</h5>
                        <h4 class="card-text">{{ count($totalNumberOfDailyCustomers) }}</h4>
                        <p class="card-text">
                            <small>
                                ( {{ $totalNumberOfDailyCustomers->where('membership_id', '!=', 0)->count() }} | Member )
                                <br>
                                ( {{ $totalNumberOfDailyCustomers->where('membership_id', 0)->count() }} | Non-Member )
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4 bg-info">
                    <i class="fas fa-calendar float-right" style="
                    font-size: 4.5rem;
                    margin-top: 2.5rem;
                    margin-right: 1rem;
                    "></i>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Expiring Clients</h5>
                        <h4 class="card-text">{{ $totalNumberOfExpiringCustomers->where('activity_date_expiry', date('Y-m-d'))->count() }}</h4>
                        <small>
                            ( {{ $totalNumberOfExpiringCustomers->where('activity_date_expiry', '<', date('Y-m-d', strtotime("+2 weeks")))->count() }} | Next 2 Weeks )
                        </small>
                        <br>
                        <small><a href="#"><i class="fa fa-arrow-circle-left"></i> Filter customers</a></small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4 bg-success">
                    <i class="fas fa-money-check-alt float-right" style="
                    font-size: 4.5rem;
                    margin-top: 2.5rem;
                    margin-right: 0.2rem;
                    "></i>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Gym Income</h5>
                        <h4 class="card-text">PHP {{ number_format($totalGymIncome, 2) }}</h4>
                        <br>
                        <small>as of {{ date('F d, Y') }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4 bg-primary">
                    <i class="fas fa-user-check float-right" style="
                    font-size: 4.5rem;
                    margin-top: 2.5rem;
                    margin-right: 0.2rem;
                    "></i>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Active Members</h5>
                        <h4 class="card-text">{{ $totalNumberOfActiveMembers->count() }}</h4>
                        <br>
                        <small>as of month {{ date('F') }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
