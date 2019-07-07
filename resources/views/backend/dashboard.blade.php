@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.dashboard.title'))

@section('content')
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <strong>Daily Transactions</strong>
                </div><!--card-header-->
                <div class="card-body">
                    @php
                        $customerName = "";
                        $procureLabel = array();
                        $coachName = "";
                    @endphp
                    <div class="col-7">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Total Amount</th>
                                    @foreach($payments as $payment)
                                        @if(class_basename($payment->paymentable_type) != "Membership")
                                            @if(!in_array(class_basename($payment->paymentable_type), $procureLabel))
                                                <th>{{ class_basename($payment->paymentable_type) }}</th>

                                                @php
                                                    array_push($procureLabel, class_basename($payment->paymentable_type));
                                                @endphp
                                            @endif
                                        @endif
                                    @endforeach
                                </tr>
                                </thead>

                                <tbody>
                                @foreach($payments as $payment)
                                    <tr>
                                        <td>{{ $payment->id }}</td>
                                        <td>{{ $payment->customer->name }}</td>
                                        <td>PHP {{ number_format($payment->customer->transactions->sum('amount'), 2) }}</td>
                                        <td>{{ $payment->paymentable->name }}</td>
                                        <td>
                                            {{ $coachName }}
                                        </td>
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
@endsection
