<?php

namespace App\Http\Controllers\Backend\Coach;

use App\Models\Coach\Coach;
use App\Http\Controllers\Controller;
use App\Events\Backend\Coach\CoachDeleted;
use App\Models\Log\Log;
use App\Models\Membership\Membership;
use App\Models\Payment\Payment;
use App\Repositories\Backend\CoachRepository;
use App\Http\Requests\Backend\Coach\StoreCoachRequest;
use App\Http\Requests\Backend\Coach\ManageCoachRequest;
use App\Http\Requests\Backend\Coach\UpdateCoachRequest;
use Auth;
use App\Models\Activity\Activity;
use DB;
use Illuminate\Database\Eloquent\Relations\MorphTo;

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
            'contact_number',
            'employment_type'
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
        $dailyIncomes = [];
        $sortedDailyIncome = [];

        $existingActivities = $coach->activityCoaches->pluck('name')->toArray();

        // Get daily logs with coach_id == $coach->id to Array
        $coachLogs = Log::with(['customer', 'activity', 'payments'])
            ->whereCoachId($coach->id)
            ->whereDate('created_at', date('Y-m-d'))
            ->get()
            ->toArray();

        // Get all membership with coach_id == $coach->id to Array
        $memberships = Membership::with('customer', 'activity')
            ->whereDate('created_at', date('Y-m-d'))
            ->where('coach_id', $coach->id)
            ->get()
            ->toArray();

        // Merge coachLogs and memberships
        $dailyIncomes = array_merge($coachLogs, $memberships);

        foreach ($dailyIncomes as $dailyIncome) {
            $sortedDailyIncome[$dailyIncome['created_at']] = $dailyIncome;
        }

        ksort($sortedDailyIncome);

        return view('backend.coach.show')
            ->withCoach($coach)
            ->withActivities($activities)
            ->withExistingActivities($existingActivities)
            ->withCoachLogs($sortedDailyIncome);
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
            'contact_number',
            'employment_type'
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
        $checkRelationship = count($coach->activityCoaches);

        $coach = $this->coachRepository->assignActivities($coach, $request->only('activities'));

        if (!$request->has('activities')) {
            return redirect()->back()->withFlashSuccess(__('alerts.backend.coaches.removed_activities', ['coach' => $coach->name]));
        }

        return redirect()->back()->withFlashSuccess(__('alerts.backend.coaches.assigned_activities', ['coach' => $coach['coach']['name'], 'activities' => trim($coach['activities'], ", ")]));
    }
}
