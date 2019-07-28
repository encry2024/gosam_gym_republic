@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.backend.payments.management'))

@section('content')
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        {{ __('labels.backend.payments.management') }}
                        <small class="text-muted">{{ __('labels.backend.payments.list') }}</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->

            <div class="row mt-4">
                <div class="col">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Customer</th>
                                <th>Description</th>
                                <th>Breakdown</th>
                                <th>Date Created</th>
                            </tr>
                            </thead>

                            <tbody>
                            @foreach($payments as $payment)
                                <tr>
                                    <td>{{ $payment->income}}</td>
                                    <td>{{ $payment->customer->name }}</td>
                                    <td>
                                        @if (class_basename($payment->paymentable_type) == "Log")
                                            Daily {{ class_basename($payment->paymentable_type) }}
                                        @else
                                            {{ class_basename($payment->paymentable_type) }}
                                        @endif
                                    </td>
                                    <td>
                                        @if (class_basename($payment->paymentable_type) == "Membership")
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-dark rounded-0">Coach</a>
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-info rounded-0">{{ $payment->paymentable->coach->name }}</a>
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-success rounded-0">{{ $payment->paymentable->coach_fee_string }}</a>
                                            <br>
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-dark rounded-0">Activity</a>
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-info rounded-0">{{ $payment->paymentable->activity->name }}</a>
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-success rounded-0">{{ $payment->paymentable->monthly_fee_string }}</a>
                                            <br>
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-dark rounded-0">Membership Fee</a>
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-success rounded-0">{{ $payment->paymentable->fee_string }}</a>
                                        @endif
                                        <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-info rounded-0">{{ $payment->paymentable->name }}</a>
                                        @if (class_basename($payment->paymentable_type) == "Log")
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-dark rounded-0">Payment Type</a>
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-info rounded-0">{{ $payment->paymentable->payment_type }}</a>
                                            <br>
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-dark rounded-0">Coach</a>
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-info rounded-0">{{ $payment->paymentable->coach->name }}</a>
                                            @if ($payment->paymentable->payment_type == "Member Rate" || $payment->paymentable->payment_type == "Non-Member Rate")
                                                <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-success rounded-0">PHP {{ number_format($payment->amount_received / 2, 2) }}</a>
                                            @endif
                                            <br>
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-dark rounded-0">Activity</a>
                                            <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-info rounded-0">{{ $payment->paymentable->activity->name }}</a>
                                            @if ($payment->paymentable->payment_type == "Member Rate" || $payment->paymentable->payment_type == "Non-Member Rate")
                                                <a href="javascript:exit(0)" style="font-size: 11px; font-weight: 600;" class="badge badge-success rounded-0">PHP {{ number_format($payment->amount_received / 2, 2) }}</a>
                                            @endif
                                        @endif
                                    </td>
                                    <td>{{ date('F d, Y H:i A', strtotime($payment->created_at)) }}</td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div><!--col-->
            </div><!--row-->
            <div class="row">
                <div class="col-7">
                    <div class="float-left">
                        {!! $payments->total() !!} {{ trans_choice('labels.backend.payments.table.total', $payments->total()) }}
                    </div>
                </div><!--col-->

                <div class="col-5">
                    <div class="float-right">
                        {!! $payments->render() !!}
                    </div>
                </div><!--col-->
            </div><!--row-->
        </div><!--card-body-->
    </div><!--card-->
@endsection
