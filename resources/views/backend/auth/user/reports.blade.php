@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.dashboard.title'))

@section('content')
    @include('backend.auth.user.includes.cards')

    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <strong>Daily Transactions</strong>
                </div><!--card-header-->
                <div class="card-body">
                    @include('backend.dashboard.charts')
                </div><!--card-body-->
            </div><!--card-->
        </div><!--col-->
    </div><!--row-->

    <script>
        let daysInMonth = [];

        for(let i=1; i<=moment().daysInMonth(); i++) {
            daysInMonth.push("Day " + i);
        }
        console.log(daysInMonth);
        // Create the chart
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly Activities Income as of ' + moment().format("MMMM, YYYY")
            },
            xAxis: {
                text: 'Days ',
                categories: daysInMonth
            },
            yAxis: {
                min: 0,
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>PHP {point.y:,.2f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: {!! $incomePerActivities !!}
        });
    </script>
@endsection
