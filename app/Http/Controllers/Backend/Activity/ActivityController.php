<?php

namespace App\Http\Controllers\Backend\Activity;

use App\Events\Backend\Activity\ActivityDeleted;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Activity\ManageActivityRequest;
use App\Http\Requests\Backend\Activity\StoreActivityRequest;
use App\Http\Requests\Backend\Activity\UpdateActivityRequest;
use App\Models\Activity\Activity;
use App\Repositories\Backend\ActivityRepository;
use Auth;
use Illuminate\Http\Response;

/**
 * Class ActivityController.
 */
class ActivityController extends Controller
{
    /**
     * @var ActivityRepository
     */
    protected $activityRepository;

    /**
     * ActivityController constructor.
     *
     * @param ActivityRepository $activityRepository
     */
    public function __construct(ActivityRepository $activityRepository)
    {
        $this->activityRepository = $activityRepository;
    }

    /**
     * @param ManageActivityRequest $request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(ManageActivityRequest $request)
    {
        return view('backend.activity.index')
            ->withActivities($this->activityRepository->getActivePaginated(25, 'id', 'asc'));
    }

    /**
     * @param ManageActivityRequest $request
     * @param RoleRepository        $roleRepository
     * @param PermissionRepository  $permissionRepository
     *
     * @return mixed
     */
    public function create(ManageActivityRequest $request)
    {
        return view('backend.activity.create');
    }

    /**
     * @param StoreActivityRequest $request
     *
     * @return mixed
     * @throws \Throwable
     */
    public function store(StoreActivityRequest $request)
    {
        $activity = $this->activityRepository->create($request->only(
            'name',
            'member_rate',
            'non_member_rate',
            'coach_fee',
            'monthly_rate',
            'membership_fee',
            'sessions',
            'quota'
        ));

        return redirect()->route('admin.activity.index')->withFlashSuccess(__('alerts.backend.activities.created', ['activity' => $activity->name]));
    }

    /**
     * @param ManageActivityRequest $request
     * @param Activity              $activity
     *
     * @return mixed
     */
    public function show(ManageActivityRequest $request, Activity $activity)
    {
        if ($request->ajax()) {
            return \Response::json($activity->load('activityCoaches'));
        }

        return view('backend.activity.show')
            ->withActivity($activity);
    }

    /**
     * @param ManageActivityRequest $request
     * @param PermissionRepository  $permissionRepository
     * @param Activity              $activity
     *
     * @return mixed
     */
    public function edit(ManageActivityRequest $request, Activity $activity)
    {
        return view('backend.activity.edit')->withActivity($activity);
    }

    /**
     * @param UpdateActivityRequest $request
     * @param Activity              $activity
     *
     * @return mixed
     * @throws \Throwable
     * @throws \App\Exceptions\GeneralException
     */
    public function update(UpdateActivityRequest $request, Activity $activity)
    {
        $activity = $this->activityRepository->update($activity, $request->only(
            'name',
            'member_rate',
            'non_member_rate',
            'coach_fee',
            'monthly_rate',
            'membership_fee',
            'sessions',
            'quota'
        ));

        if (!$request->ajax()) {
            return redirect()->route('admin.activity.index')->withFlashSuccess(__('alerts.backend.activities.updated', ['activity' => $activity->name]));
        }

        return json_encode($activity);
    }

    /**
     * @param ManageActivityRequest $request
     * @param Activity              $activity
     *
     * @return mixed
     * @throws \Exception
     */
    public function destroy(ManageActivityRequest $request, Activity $activity)
    {
        $activityName = $activity->name;

        $this->activityRepository->deleteById($activity->id);

        event(new ActivityDeleted(Auth::user()->full_name, $activityName));

        return redirect()->route('admin.activity.deleted')->withFlashSuccess(__('alerts.backend.activities.deleted', ['activity' => $activityName]));
    }

    /**
     * Check if the activity assigned to the coach exists.
     *
     * @param ManageActivityRequest $request
     *
     * @return mixed
     * @throws \Exception
     */
    public function checkExistingActivity(ManageActivityRequest $request)
    {
        $ifActivityExists = $this->activityRepository->checkExistingActivity($request->only('name'));

        return $ifActivityExists;
    }

    public function getRelatedCoaches($activity)
    {
        $activityCoaches = [];

        foreach ($activity->activityCoaches as $activityCoach) {
            $activityCoaches[] = [
                'id' => $activityCoach->id,
                'text' => $activityCoach->name
            ];
        }

        return json_encode(['coach' => $activityCoaches,
            'membership_fee' => $activity->membership_rate,
            'monthly_rate' => $activity->monthly_fee,
            'coach_fee' => $activity->coach_rate
        ]);
    }
}
