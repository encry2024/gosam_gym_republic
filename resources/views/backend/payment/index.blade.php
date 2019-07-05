@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.backend.payments.management'))

@section('content')
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">
                        {{ __('labels.backend.payments.management') }} <small class="text-muted">{{ __('labels.backend.payments.list') }}</small>
                    </h4>
                </div><!--col-->
            </div><!--row-->

            <div class="row mt-4">
                <div class="col">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Customer</th>
                                    <th>Description</th>
                                    <th>Detail</th>
                                    <th>Date Created</th>
                                </tr>
                            </thead>

                            <tbody>
                                @foreach($payments as $payment)
                                    <tr>
                                        <td>{{ $payment->income }}</td>
                                        <td>{{ $payment->customer->name }}</td>
                                        <td>{{ class_basename($payment->paymentable_type) }}</td>
                                        <td>{{ $payment->paymentable->name ? $payment->paymentable->name : 'Membership Fee' }}</td>
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
