<?php

namespace App\Http\Controllers\Backend\Coach;

use App\Models\Coach\Coach;
use App\Http\Controllers\Controller;
use App\Repositories\Backend\CoachRepository;
use App\Http\Requests\Backend\Coach\ManageCoachRequest;
use Auth;

/**
 * Class CoachStatusController.
 */
class CoachStatusController extends Controller
{
    /**
     * @var CoachRepository
     */
    protected $coachRepository;

    /**
     * @param CoachRepository $coachRepository
     */
    public function __construct(CoachRepository $coachRepository)
    {
        $this->coachRepository = $coachRepository;
    }

    /**
     * @param ManageCoachRequest $request
     *
     * @return mixed
     */
    public function getDeleted(ManageCoachRequest $request)
    {
        return view('backend.coach.deleted')
            ->withCoaches($this->coachRepository->getDeletedPaginated(25, 'id', 'asc'));
    }

    /**
     * @param ManageCoachRequest $request
     * @param Coach              $deletedCoach
     *
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     * @return mixed
     */
    public function delete(ManageCoachRequest $request, Coach $deletedCoach)
    {
        $this->coachRepository->forceDelete($deletedCoach);

        return redirect()->route('admin.coach.deleted')->withFlashSuccess(__('alerts.backend.coaches.deleted_permanently'));
    }

    /**
     * @param ManageCoachRequest $request
     * @param Coach              $deletedCoach
     *
     * @throws \App\Exceptions\GeneralException
     * @return mixed
     */
    public function restore(ManageCoachRequest $request, Coach $deletedCoach)
    {
        $coachName = $deletedCoach->name;

        $this->coachRepository->restore($deletedCoach);

        return redirect()->route('admin.coach.index')->withFlashSuccess(__('alerts.backend.coaches.restored', ['coach' => $coachName]));
    }
}
