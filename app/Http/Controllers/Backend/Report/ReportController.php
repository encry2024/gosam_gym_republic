<?php

namespace App\Http\Controllers\Backend\Report;

use App\Models\Activity\Activity;
use App\Models\Payment\Payment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $incomePerActivities = DB::table('payments')
            ->select('activities.name',
                'activities.id',
                'payments.amount_received',
                'payments.paymentable_type',
                'logs.payment_type')
            ->leftJoin('memberships', function ($join) {
                $join->on('memberships.id', '=', 'payments.paymentable_id')
                    ->where('payments.paymentable_type', '=', 'App\\Models\\Membership\\Membership');
            })
            ->leftJoin('logs', function ($join) {
                $join->on('logs.id', '=', 'payments.paymentable_id')
                    ->where('payments.paymentable_type', '=', 'App\\Models\\Log\\Log');
            })
            ->rightJoin('activities', function ($join) {
                $join->on('activities.id', '=', 'memberships.activity_id')
                    ->orOn('activities.id', '=', 'logs.activity_id')
                    ->where('logs.payment_type', '!=', 'Session');
            })
            ->orderBy('activities.id')
            ->get();

        /*foreach ($incomePerActivities as $incomePerActivity) {

        }*/


        /*$incomePerActivity = DB::table('payments')
            ->select('activities.name', 'activities.id', 'activities.monthly_rate', 'activities.membership_fee',
                DB::raw('SUM(payments.amount_received) AS activity_income'),
                DB::raw('SUM(memberships.coach_fee) AS coach_membership_income'),
                DB::raw('SUM(payments.amount_received) + SUM(memberships.coach_fee) AS total_income'),
                DB::raw('COUNT(IF(logs.payment_type != "Quota", 1, null)) "Non-Quota"'),
                DB::raw("COUNT(memberships.id) AS membership_count"),
                DB::raw("COUNT(logs.id) AS log_count"))
            ->leftJoin('memberships', function ($join) {
                $join->on('memberships.id', '=', 'payments.paymentable_id')
                    ->where('payments.paymentable_type', '=', 'App\\Models\\Membership\\Membership');
            })
            ->leftJoin('logs', function ($join) {
                $join->on('logs.id', '=', 'payments.paymentable_id')
                    ->where('payments.paymentable_type', '=', 'App\\Models\\Log\\Log');
            })
            ->rightJoin('activities', function ($join) {
                $join->on('activities.id', '=', 'memberships.activity_id')
                ->orOn('activities.id', '=', 'logs.activity_id')
                ->where('logs.payment_type', '!=', 'Session');
            })
            ->groupBy('activities.id')
            ->get();*/

        dd($incomePerActivities);

        return view('backend.auth.user.reports')->withPayment($incomePerActivity);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
