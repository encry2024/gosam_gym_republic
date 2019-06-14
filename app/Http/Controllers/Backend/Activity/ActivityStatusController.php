<?php

namespace App\Http\Controllers\Backend\Activity;

use App\Models\Activity\Activity;
use App\Http\Controllers\Controller;
use App\Repositories\Backend\ActivityRepository;
use App\Http\Requests\Backend\Activity\ManageActivityRequest;
use Auth;

/**
 * Class ActivityStatusController.
 */
class ActivityStatusController extends Controller
{
    /**
     * @var ActivityRepository
     */
    protected $activityRepository;

    /**
     * @param ActivityRepository $activityRepository
     */
    public function __construct(ActivityRepository $activityRepository)
    {
        $this->activityRepository = $activityRepository;
    }

    /**
     * @param ManageActivityRequest $request
     *
     * @return mixed
     */
    public function getDeleted(ManageActivityRequest $request)
    {
        return view('backend.activity.deleted')
            ->withActivities($this->activityRepository->getDeletedPaginated(25, 'id', 'asc'));
    }

    /**
     * @param ManageActivityRequest $request
     * @param Activity              $deletedActivity
     *
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     * @return mixed
     */
    public function delete(ManageActivityRequest $request, Activity $deletedActivity)
    {
        $this->activityRepository->forceDelete($deletedActivity);

        return redirect()->route('admin.activity.deleted')->withFlashSuccess(__('alerts.backend.activities.deleted_permanently'));
    }

    /**
     * @param ManageActivityRequest $request
     * @param Activity              $deletedActivity
     *
     * @throws \App\Exceptions\GeneralException
     * @return mixed
     */
    public function restore(ManageActivityRequest $request, Activity $deletedActivity)
    {
        $activityName = $deletedActivity->name;

        $this->activityRepository->restore($deletedActivity);

        return redirect()->route('admin.activity.index')->withFlashSuccess(__('alerts.backend.activities.restored', ['activity' => $activityName]));
    }
}
