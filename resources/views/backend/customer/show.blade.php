@extends('backend.layouts.app')

@section('title', __('labels.backend.customers.management') . ' | ' . __('labels.backend.customers.view', ['customer' => $customer->name]))

@section('content')
<div class="row">
    <div class="col-3">
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    <h5>Customer Information</h5>
                </div>
                <hr>
                @include('backend.customer.show.tabs.overview')
            </div><!--card-body-->
        </div><!--card-->
    </div> <!--col-4-->

    <div class="col-9">
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    <h5>Customer's Membership Activities</h5>
                </div>
                <hr>
                @include('backend.customer.show.tabs.membership_activities')
            </div><!--card-body-->
        </div><!--card-->
    </div> <!--col-4-->
</div> <!-- row -->
@endsection

@push('before-scripts')
<script>

</script>
@endpush