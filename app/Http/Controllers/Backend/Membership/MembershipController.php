<?php

namespace App\Http\Controllers\Backend\Membership;

use App\Events\Backend\Membership\MembershipDeleted;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Membership\ManageMembershipRequest;
use App\Http\Requests\Backend\Membership\StoreMembershipRequest;
use App\Http\Requests\Backend\Membership\UpdateMembershipRequest;
use App\Models\Activity\Activity;
use App\Models\Membership\Membership;
use App\Repositories\Backend\MembershipRepository;
use Auth;

/**
 * Class MembershipController.
 */
class MembershipController extends Controller
{
    /**
     * @var MembershipRepository
     */
    protected $membershipRepository;

    /**
     * MembershipController constructor.
     *
     * @param MembershipRepository $membershipRepository
     */
    public function __construct(MembershipRepository $membershipRepository)
    {
        $this->membershipRepository = $membershipRepository;
    }

    /**
     * @param ManageMembershipRequest $request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(ManageMembershipRequest $request)
    {
        return view('backend.membership.index')
            ->withMemberships($this->membershipRepository->getActivePaginated(25, 'id', 'asc'));
    }

    /**
     * @param ManageMembershipRequest $request
     * @param RoleRepository $roleRepository
     * @param PermissionRepository $permissionRepository
     *
     * @return mixed
     */
    public function create(ManageMembershipRequest $request)
    {
        $activities = Activity::all();

        return view('backend.membership.create')->withActivities($activities);
    }

    /**
     * @param StoreMembershipRequest $request
     *
     * @throws \Throwable
     * @return mixed
     */
    public function store(StoreMembershipRequest $request)
    {
        $membership = $this->membershipRepository->create($request->only(
            'first_name',
            'last_name',
            'address',
            'contact_number',
            'emergency_number',
            'date_of_birth',
            'email',
            'registered_activities'
        ));

        return redirect()->route('admin.membership.index')
            ->withFlashSuccess(__('alerts.backend.memberships.created', ['membership' => $membership->name]));
    }

    /**
     * @param ManageMembershipRequest $request
     * @param Membership $membership
     *
     * @return mixed
     */
    public function show(ManageMembershipRequest $request, Membership $membership)
    {
        return view('backend.membership.show');
    }

    /**
     * @param ManageMembershipRequest $request
     * @param PermissionRepository $permissionRepository
     * @param Membership $membership
     *
     * @return mixed
     */
    public function edit(ManageMembershipRequest $request, Membership $membership)
    {
        return view('backend.membership.edit')->withMembership($membership);
    }

    /**
     * @param UpdateMembershipRequest $request
     * @param Membership $membership
     *
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     * @return mixed
     */
    public function update(UpdateMembershipRequest $request, Membership $membership)
    {
        $membership = $this->membershipRepository->update($membership, $request->only(
            'first_name',
            'last_name',
            'address',
            'contact_number',
            'employment_type'
        ));

        return redirect()->route('admin.membership.index')->withFlashSuccess(__('alerts.backend.memberships.updated', ['membership' => $membership->name]));
    }

    /**
     * @param ManageMembershipRequest $request
     * @param Membership $membership
     *
     * @throws \Exception
     * @return mixed
     */
    public function destroy(ManageMembershipRequest $request, Membership $membership)
    {
        $membershipName = $membership->name;

        $membership = $this->membershipRepository->deleteById($membership->id);

        event(new MembershipDeleted(Auth::user()->full_name, $membership));

        return redirect()->route('admin.membership.deleted')->withFlashSuccess(__('alerts.backend.memberships.deleted', ['membership' => $membershipName]));
    }

    public function assignActivities(ManageMembershipRequest $request, Membership $membership)
    {
        $checkRelationship = count($membership->activityMemberships);

        $membership = $this->membershipRepository->assignActivities($membership, $request->only('activities'));

        if (!$request->has('activities')) {
            return redirect()->back()->withFlashSuccess(__('alerts.backend.memberships.removed_activities', ['membership' => $membership->name]));
        }

        return redirect()->back()->withFlashSuccess(__('alerts.backend.memberships.assigned_activities', ['membership' => $membership['membership']['name'], 'activities' => trim($membership['activities'], ", ")]));
    }
}
