<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Log\Log;
use App\Models\Membership\Membership;
use App\Models\Payment\Payment;
use Illuminate\Database\Eloquent\Relations\MorphTo;

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
        $payments = Payment::with(['paymentable' => function (MorphTo $morphTo) {
            $morphTo->morphWith([
                Membership::class => ['coach', 'activity', 'customer'],
                Log::class => ['coach', 'activity', 'customer']
            ]);
            }, 'customer:id,first_name,last_name'])
            ->whereDate('created_at', '=', date('Y-m-d'))
            ->get();

        return view('backend.dashboard')->withPayments($payments);
    }
}
