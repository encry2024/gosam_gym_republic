<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Membership\Membership;
use App\Models\Payment\Payment;

/**
 * Class DashboardController.
 */
class DashboardController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $payments = Payment::with(['paymentable.coach', 'paymentable.activity', 'customer:id,first_name,last_name'])
            ->whereDate('created_at', '=', date('Y-m-d'))
            ->get();

        return view('backend.dashboard')->withPayments($payments);
    }
}
