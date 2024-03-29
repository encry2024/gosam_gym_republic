@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.dashboard.title'))

@section('content')
    @include('backend.dashboard.daily_reports')
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <strong>Daily Transactions</strong>
                </div><!--card-header-->
                <div class="card-body">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Transaction #</th>
                                    <th>Customer</th>
                                    <th>Amount</th>
                                    <th>Description</th>
                                    <th>Activity</th>
                                    <th>Coach</th>
                                    <th>Log Date</th>
                                </tr>
                                </thead>

                                <tbody>
                                @foreach($payments as $payment)
                                    <tr>
                                        <td>{{ $payment->id }}</td>
                                        <td>{{ $payment->customer->first_name }} {{ $payment->customer->last_name }}</td>
                                        <td>{{ $payment->income }}</td>
                                        <td>
                                            @if (class_basename($payment->paymentable_type) == "Log")
                                                {{ $payment->paymentable->payment_type != "Session" ? "Daily" : "Monthly" }} {{ class_basename($payment->paymentable->payment_type) }}
                                            @else
                                                {{ class_basename($payment->paymentable_type) }}
                                            @endif
                                        </td>
                                        @if(class_basename($payment->paymentable_type) == "Membership")
                                            <td>{{ $payment->paymentable->activity->name }}</td>
                                            <td>{{ is_null($payment->paymentable->coach) ?
                                            "N/A" : $payment->paymentable->coach->name }}</td>
                                        @elseif(class_basename($payment->paymentable_type) == "Log")
                                            <td>{{ $payment->paymentable->activity->name }}</td>
                                            <td>{{ $payment->paymentable->coach_id == 0 ? "N/A" : $payment->paymentable->coach->name }}</td>
                                        @endif
                                        <td>{{ date('F d, Y h:i A', strtotime($payment->created_at)) }}</td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div><!--card-body-->
            </div><!--card-->
        </div><!--col-->
    </div><!--row-->
    @include('backend.dashboard.charts')
    <br>
    <script>
        // Create the chart
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Daily Income Per Activity'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total Income Per Activity'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: 'PHP {point.y:,.1f}'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: PHP <b>{point.y:,.2f}</b><br/>'
            },

            series: [
                {
                    name: "Activity",
                    colorByPoint: true,
                    data: {!! $dailyIncomeActivityArr !!}
                }
            ]
        });
    </script>
@endsection
