<?php

namespace App\Http\Controllers\Backend\MembershipActivity;

use App\Http\Requests\Backend\Membership\ManageMembershipRequest;
use App\Models\Membership\Membership;
use App\Repositories\Backend\MembershipRepository;
use App\Http\Controllers\Controller;

class MembershipActivityController extends Controller
{
    protected $membershipRepository;

    /**
     * MembershipActivityController constructor.
     *
     * @param $membershipRepository
     */
    public function __construct(MembershipRepository $membershipRepository)
    {
        $this->membershipRepository = $membershipRepository;
    }

    //
    public function store(ManageMembershipRequest $request, Membership $membership)
    {
        $checkRelationship = count($membership->activityMemberships);

        $membership = $this->membershipRepository->assignActivities($membership, $request->only('activities'));

        if (!$request->has('activities')) {
            return redirect()->back()
                ->withFlashSuccess(__('alerts.backend.memberships.removed_activities', ['membership' => $membership->name]));
        }

        return redirect()->back()
            ->withFlashSuccess(__('alerts.backend.memberships.assigned_activities', [
                'membership' => $membership['membership']['name'],
                'activities' => trim($membership['activities'], ", ")
            ]));
    }
}
