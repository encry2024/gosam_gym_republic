<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\Payment\Payment;
use OwenIt\Auditing\Models\Audit;

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
        $payments = Payment::with(['customer'])->whereDate('created_at', '=', date('Y-m-d'))->get();

        return view('backend.dashboard')->withPayments($payments);
    }
}
