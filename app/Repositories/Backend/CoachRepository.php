<?php

namespace App\Repositories\Backend;

use App\Models\Coach\Coach;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use App\Events\Backend\Coach\CoachCreated;
use App\Events\Backend\Coach\CoachUpdated;
use App\Events\Backend\Coach\CoachRestored;
use Illuminate\Pagination\LengthAwarePaginator;
use Auth;
use App\Models\Activity\Activity;
use App\Events\Backend\Coach\CoachAssignActivity;
use App\Events\Backend\Coach\CoachRemovedActivity;

/**
 * Class CoachRepository.
 */
class CoachRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Coach::class;
    }

    /**
     * @param int    $paged
     * @param string $orderBy
     * @param string $sort
     *
     * @return mixed
     */
    public function getActivePaginated($paged = 25, $orderBy = 'created_at', $sort = 'desc') : LengthAwarePaginator
    {
        return $this->model
            ->orderBy($orderBy, $sort)
            ->paginate($paged);
    }

    /**
     * @param int    $paged
     * @param string $orderBy
     * @param string $sort
     *
     * @return LengthAwarePaginator
     */
    public function getDeletedPaginated($paged = 25, $orderBy = 'created_at', $sort = 'desc') : LengthAwarePaginator
    {
        return $this->model
            ->onlyTrashed()
            ->orderBy($orderBy, $sort)
            ->paginate($paged);
    }

    /**
     * @param array $data
     *
     * @throws \Exception
     * @throws \Throwable
     * @return Coach
     */
    public function create(array $data) : Coach
    {
        return DB::transaction(function () use ($data) {
            $coach = parent::create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'address' => $data['address'],
                'contact_number' => $data['contact_number'],
                'employment_type' => $data['employment_type']
            ]);

            if ($coach) {
                event(new CoachCreated(Auth::user()->full_name, $coach->name));

                return $coach;
            }

            throw new GeneralException(__('exceptions.backend.coaches.create_error'));
        });
    }

    /**
     * @param Coach  $coach
     * @param array $data
     *
     * @throws GeneralException
     * @throws \Exception
     * @throws \Throwable
     * @return Coach
     */
    public function update(Coach $coach, array $data) : Coach
    {
        return DB::transaction(function () use ($coach, $data) {
            if ($coach->update([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'address' => $data['address'],
                'contact_number' => $data['contact_number'],
                'employment_type' => $data['employment_type']
            ])) {
                event(new CoachUpdated(Auth::user()->full_name, $coach));

                return $coach;
            }

            throw new GeneralException(__('exceptions.backend.coaches.update_error'));
        });
    }

    /**
     * @param Coach $coach
     *
     * @throws GeneralException
     * @throws \Exception
     * @throws \Throwable
     * @return Coach
     */
    public function forceDelete(Coach $coach) : Coach
    {
        if ($coach->deleted_at === null) {
            throw new GeneralException(__('exceptions.backend.coaches.delete_first'));
        }

        return DB::transaction(function () use ($coach) {
            if ($coach->forceDelete()) {
                event(new CoachPermanentlyDeleted(Auth::user()->full_name, $coach));

                return $coach;
            }

            throw new GeneralException(__('exceptions.backend.coaches.delete_error'));
        });
    }

    /**
     * @param Coach $coach
     *
     * @throws GeneralException
     * @return Coach
     */
    public function restore(Coach $coach) : Coach
    {
        if ($coach->deleted_at === null) {
            throw new GeneralException(__('exceptions.backend.coaches.cant_restore'));
        }

        if ($coach->restore()) {
            event(new CoachRestored(Auth::user()->full_name, $coach));

            return $coach;
        }

        throw new GeneralException(__('exceptions.backend.coaches.restore_error'));
    }

    public function assignActivities($coach, array $data)
    {
        $activityIdArr = array();
        $activities = "";

        return DB::transaction(function () use ($coach, $data, $activityIdArr, $activities) {


            if (count($data) == 0) {
                $coach->activityCoaches()->detach();

                event(new CoachRemovedActivity(Auth::user()->name, $activities, $coach->name));

                return $coach;
            }

            $activities = implode(", ", $data['activities']);

            foreach ($data['activities'] as $activity) {
                $findActivity = Activity::whereName($activity)->first();

                $activityIdArr[] = $findActivity->id;
            }

            $coach->activityCoaches()->sync($activityIdArr);

            event(new CoachAssignActivity(Auth::user()->name, $activities, $coach->name));

            return ['coach' => $coach, 'activities' => $activities];
        });
    }
}
