<?php

namespace App\Http\Controllers\Backend\Coach;

use App\Models\Coach\Coach;
use App\Http\Controllers\Controller;
use App\Events\Backend\Coach\CoachDeleted;
use App\Repositories\Backend\CoachRepository;
use App\Http\Requests\Backend\Coach\StoreCoachRequest;
use App\Http\Requests\Backend\Coach\ManageCoachRequest;
use App\Http\Requests\Backend\Coach\UpdateCoachRequest;
use Auth;
use App\Models\Activity\Activity;

/**
 * Class CoachController.
 */
class CoachController extends Controller
{
    /**
     * @var CoachRepository
     */
    protected $coachRepository;

    /**
     * CoachController constructor.
     *
     * @param CoachRepository $coachRepository
     */
    public function __construct(CoachRepository $coachRepository)
    {
        $this->coachRepository = $coachRepository;
    }

    /**
     * @param ManageCoachRequest $request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(ManageCoachRequest $request)
    {
        return view('backend.coach.index')
            ->withCoaches($this->coachRepository->getActivePaginated(25, 'id', 'asc'));
    }

    /**
     * @param ManageCoachRequest    $request
     * @param RoleRepository       $roleRepository
     * @param PermissionRepository $permissionRepository
     *
     * @return mixed
     */
    public function create(ManageCoachRequest $request)
    {
        return view('backend.coach.create');
    }

    /**
     * @param StoreCoachRequest $request
     *
     * @throws \Throwable
     * @return mixed
     */
    public function store(StoreCoachRequest $request)
    {
        $coach = $this->coachRepository->create($request->only(
            'first_name',
            'last_name',
            'address',
            'contact_number'
        ));

        return redirect()->route('admin.coach.index')->withFlashSuccess(__('alerts.backend.coaches.created', ['coach' => $coach->name]));
    }

    /**
     * @param ManageCoachRequest $request
     * @param Coach              $coach
     *
     * @return mixed
     */
    public function show(ManageCoachRequest $request, Coach $coach)
    {
        $activities = Activity::all();
        $existingActivities = [];

        $existingActivities = $coach->activityCoaches->pluck('name')->toArray();
        // dd($existingActivities);

        return view('backend.coach.show')
            ->withCoach($coach)
            ->withActivities($activities)
            ->withExistingActivities($existingActivities);
    }

    /**
     * @param ManageCoachRequest    $request
     * @param PermissionRepository $permissionRepository
     * @param Coach                 $coach
     *
     * @return mixed
     */
    public function edit(ManageCoachRequest $request, Coach $coach)
    {
        return view('backend.coach.edit')->withCoach($coach);
    }

    /**
     * @param UpdateCoachRequest $request
     * @param Coach              $coach
     *
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     * @return mixed
     */
    public function update(UpdateCoachRequest $request, Coach $coach)
    {
        $coach = $this->coachRepository->update($coach, $request->only(
            'first_name',
            'last_name',
            'address',
            'contact_number'
        ));

        return redirect()->route('admin.coach.index')->withFlashSuccess(__('alerts.backend.coaches.updated', ['coach' => $coach->name]));
    }

    /**
     * @param ManageCoachRequest $request
     * @param Coach              $coach
     *
     * @throws \Exception
     * @return mixed
     */
    public function destroy(ManageCoachRequest $request, Coach $coach)
    {
        $coachName = $coach->name;

        $coach = $this->coachRepository->deleteById($coach->id);

        event(new CoachDeleted(Auth::user()->full_name, $coach));

        return redirect()->route('admin.coach.deleted')->withFlashSuccess(__('alerts.backend.coaches.deleted', ['coach' => $coachName]));
    }

    public function assignActivities(ManageCoachRequest $request, Coach $coach)
    {
        $coach = $this->coachRepository->assignActivities($coach, $request->only('activities'));

        return redirect()->back()->withFlashSuccess('Activities was successfully added to coach.');
    }
}
