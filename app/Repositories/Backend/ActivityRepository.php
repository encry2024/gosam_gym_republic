<?php

namespace App\Repositories\Backend;

use App\Models\Activity\Activity;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use App\Events\Backend\Activity\ActivityCreated;
use App\Events\Backend\Activity\ActivityUpdated;
use App\Events\Backend\Activity\ActivityRestored;
use Illuminate\Pagination\LengthAwarePaginator;
use Auth;
use Psy\Util\Json;

/**
 * Class ActivityRepository.
 */
class ActivityRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Activity::class;
    }

    /**
     * @param int    $paged
     * @param string $orderBy
     * @param string $sort
     *
     * @return mixed
     */
    public function getActivePaginated($paged = 25, $orderBy = 'created_at', $sort = 'desc'): LengthAwarePaginator
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
    public function getDeletedPaginated($paged = 25, $orderBy = 'created_at', $sort = 'desc'): LengthAwarePaginator
    {
        return $this->model
            ->onlyTrashed()
            ->orderBy($orderBy, $sort)
            ->paginate($paged);
    }

    /**
     * @param array $data
     *
     * @return Activity
     * @throws \Throwable
     * @throws \Exception
     */
    public function create(array $data): Activity
    {
        return DB::transaction(function () use ($data) {
            $activity = new Activity();
            $activity->fill($data)->save();

            if ($activity) {
                $activityName = $activity->name;
                event(new ActivityCreated(Auth::user()->full_name, $activityName));

                return $activity;
            }

            throw new GeneralException(__('exceptions.backend.activities.create_error'));
        });
    }

    /**
     * @param Activity $activity
     * @param array    $data
     *
     * @return Activity
     * @throws \Exception
     * @throws \Throwable
     * @throws GeneralException
     */
    public function update(Activity $activity, array $data): Activity
    {
        return DB::transaction(function () use ($activity, $data) {
            if ($activity->update($data)) {

                $activityName = $activity->name;
                event(new ActivityUpdated(Auth::user()->full_name, $activityName));

                return $activity;
            }

            throw new GeneralException(__('exceptions.backend.activities.update_error'));
        });
    }

    /**
     * @param Activity $activity
     *
     * @return Activity
     * @throws \Exception
     * @throws \Throwable
     * @throws GeneralException
     */
    public function forceDelete(Activity $activity): Activity
    {
        $activityName = $activity->name;

        if ($activity->deleted_at === null) {
            throw new GeneralException(__('exceptions.backend.activities.delete_first'));
        }

        return DB::transaction(function () use ($activity, $activityName) {
            if ($activity->forceDelete()) {
                event(new ActivityPermanentlyDeleted(Auth::user()->full_name, $activityName));

                return $activity;
            }

            throw new GeneralException(__('exceptions.backend.activities.delete_error'));
        });
    }

    /**
     * @param Activity $activity
     *
     * @return Activity
     * @throws GeneralException
     */
    public function restore(Activity $activity): Activity
    {
        $activityName = $activity->name;

        if ($activity->deleted_at === null) {
            throw new GeneralException(__('exceptions.backend.activities.cant_restore'));
        }

        if ($activity->restore()) {
            event(new ActivityRestored(Auth::user()->full_name, $activityName));

            return $activity;
        }

        throw new GeneralException(__('exceptions.backend.activities.restore_error'));
    }

    /**
     * @param array $data
     *
     * @return Json
     */
    public function checkExistingActivity(array $data): Json
    {
        $activity = Activity::whereName($data['name'])->first();

        return DB::transaction(function () use ($activity, $data) {
            if (!$activity) {
                $newActivity = new Activity();
                $newActivity->name = $data['name'];

                if ($newActivity->save()) {
                    return json_encode(["status" => "success", "activity" => $newActivity]);
                }
            }

            return json_encode($activity);
        });
    }
}
