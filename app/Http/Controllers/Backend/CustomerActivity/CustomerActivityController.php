<?php

namespace App\Http\Controllers\Backend\CustomerActivity;

use App\Models\Activity\Activity;
use App\Models\Customer\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Response;

class CustomerActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function show(Request $request, Customer $customer, Activity $activity)
    {
        if ($request->ajax()) {
            $activityCoaches = [];
            $customerMemberships = $customer->load(['memberships' => function ($query) use ($activity, $customer) {
                $query->whereActivityId($activity->id)->whereCustomerId($customer->id)->first();
            }]);

            foreach ($activity->activityCoaches as $activityCoach) {
                if (count($customerMemberships->memberships) != 0) {
                    $activityCoaches[] = [
                        'id' => $activityCoach->id,
                        'text' => $customerMemberships->memberships[0]->coach_id != $activityCoach->id ?
                            $activityCoach->name
                            :
                            "<span class='badge badge-info float-right' 
                                style='font-size: 12px; font-weight: 600; margin-top: 1.5px;'>PERSONAL COACH</span> " .
                            $activityCoach->name
                    ];
                } else {
                    $activityCoaches[] = [
                        'id' => $activityCoach->id,
                        'text' => $activityCoach->name
                    ];
                }
            }

            return Response::json(
                [
                    'activity' => $activity,
                    'activityCoaches' => $activityCoaches,
                    'membership' => count($customerMemberships->memberships) == 0 ? 0 : $customerMemberships->memberships[0],
                ]
            );
        }
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
