<table class='table table-bordered table-hover'>
    <tbody>
    @foreach($customers as $customer)
        <tr class="customer_links" data-customer-id="{{ $customer->id }}">
            <td>{{ $customer->name }}
            @if (count($customer->memberships) > 0)
                <span class="badge badge-primary float-right" style="font-size: 13px; font-weight: 500;">Member</span>
            @else
                <span class="badge badge-primary float-right" style="font-size: 13px; font-weight: 500;">Non-Member</span>
            @endif
            </td>
        </tr>
    @endforeach
    </tbody>
</table>

{!! $customers->appends(['search' => Request::get('search')])->render() !!}
