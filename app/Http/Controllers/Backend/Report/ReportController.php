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
        $arrActivities = [];
        $overallIncome = 0;

        $incomePerActivities = DB::table('payments')
            ->select(
                'activities.name AS name',
                'activities.id',
                DB::raw('SUM(
                    IF(payments.amount_received <> "null", 
                    (payments.amount_received), "0.00")) AS total_income'
                ),
                DB::raw(
                    'SUM(
                    IF(logs.payment_type <> "Quota" AND logs.coach_id != 0, 
                        (payments.amount_received / 2), 0.00
                    )) + SUM(memberships.coach_fee) AS coaches_income'
                ),
                DB::raw('(SUM(
                    IF(payments.amount_received <> "null", 
                    (payments.amount_received), "0.00"))) - (SUM(
                    IF(logs.payment_type <> "Quota" AND logs.coach_id <> 0, 
                        (payments.amount_received / 2), 0.00
                    ))) AS net_income')
            )
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
                    ->where('logs.payment_type', '<>', 'Session');
            })
            ->groupBy('activities.name')
            ->orderBy('activities.id')
            ->whereBetween('payments.created_at', [date('Y-m-d', strtotime('first day of this month')),
                date('Y-m-d', strtotime('last day of this month'))])
            ->whereYear('payments.created_at', date('Y'))
            ->get();

        $payments = Payment::all();

        foreach ($payments as $payment) {
            if ($payment->paymentable_type == "App\\Models\\Log\\Log") {
                if ($payment->payment_type != "Quota") {
                    $overallIncome += $payment->amount_received / 2;
                } else {
                    $overallIncome += $payment->amount_received;
                }
            } else {
                $overallIncome += $payment->amount_received;
            }
        }

        foreach ($incomePerActivities as $incomePerActivity) {
            $arrActivities[] = [
                'name' => $incomePerActivity->name,
                'id' => $incomePerActivity->id,
                'data' => [
                    $incomePerActivity->total_income,
                    $incomePerActivity->net_income,
                    $incomePerActivity->coaches_income
                ]
            ];
        }

        return view('backend.auth.user.reports')
            ->withIncomePerActivities(json_encode($arrActivities))
            ->withOverallIncome($overallIncome);
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
