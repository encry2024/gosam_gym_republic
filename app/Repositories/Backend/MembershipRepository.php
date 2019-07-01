<?php

namespace App\Repositories\Backend;

use App\Models\Membership\Membership;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use App\Events\Backend\Membership\MembershipCreated;
use App\Events\Backend\Membership\MembershipUpdated;
use App\Events\Backend\Membership\MembershipRestored;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Events\Backend\Membership\MembershipPermanentlyDeleted;
use Illuminate\Support\Carbon;
use Auth;

/**
 * Class MembershipRepository.
 */
class MembershipRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Membership::class;
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
     * @return Membership
     */
    public function create(array $data) : Membership
    {
        return DB::transaction(function () use ($data) {
            $dateOfBirth = date('Y-m-d', strtotime($data['date_of_birth']));
            $age = Carbon::parse($dateOfBirth)->age;

            $membership = parent::create([
                'customer_id' => $data['customer'],
                'activity_id' => $data['activity'],
                'coach_id' => $data['coach'],
                'activity_date_subscription' => date('Y-m-d h:i:s', strtotime($data['activity_date_subscription'])),
                'activity_date_expiry' => date('Y-m-d h:i:s', strtotime($data['activity_date_expiry'])),
                'fee' => $data['fee'],
                'date_registered' => date('Y-m-d h:i:s', strtotime($data['date_registered'])),
                'date_expiry' => date('Y-m-d h:i:s', strtotime($data['date_expiry']))
            ]);

            if ($membership) {
                event(new MembershipCreated(Auth::user()->full_name, $membership->name));

                return $membership;
            }

            throw new GeneralException(__('exceptions.backend.memberships.create_error'));
        });
    }

    /**
     * @param Membership  $membership
     * @param array $data
     *
     * @throws GeneralException
     * @throws \Exception
     * @throws \Throwable
     * @return Membership
     */
    public function update(Membership $membership, array $data) : Membership
    {
        return DB::transaction(function () use ($membership, $data) {
            $dateOfBirth = date('Y-m-d', strtotime($data['date_of_birth']));
            $age = Carbon::parse($dateOfBirth)->age;

            if ($membership->update([
                'customer_id' => $data['customer'],
                'activity_id' => $data['activity'],
                'coach_id' => $data['coach'],
                'activity_date_subscription' => date('Y-m-d h:i:s', strtotime($data['activity_date_subscription'])),
                'activity_date_expiry' => date('Y-m-d h:i:s', strtotime($data['activity_date_expiry'])),
                'fee' => $data['fee'],
                'date_registered' => date('Y-m-d h:i:s', strtotime($data['date_registered'])),
                'date_expiry' => date('Y-m-d h:i:s', strtotime($data['date_expiry']))
            ])) {
                event(new MembershipUpdated(Auth::user()->full_name, $membership->name));

                return $membership;
            }

            throw new GeneralException(__('exceptions.backend.memberships.update_error'));
        });
    }

    /**
     * @param Membership $membership
     *
     * @throws GeneralException
     * @throws \Exception
     * @throws \Throwable
     * @return Membership
     */
    public function forceDelete(Membership $membership) : Membership
    {
        if ($membership->deleted_at === null) {
            throw new GeneralException(__('exceptions.backend.memberships.delete_first'));
        }

        return DB::transaction(function () use ($membership) {
            if ($membership->forceDelete()) {
                event(new MembershipPermanentlyDeleted(Auth::user()->full_name, $membership->name));

                return $membership;
            }

            throw new GeneralException(__('exceptions.backend.memberships.delete_error'));
        });
    }

    /**
     * @param Membership $membership
     *
     * @throws GeneralException
     * @return Membership
     */
    public function restore(Membership $membership) : Membership
    {
        if ($membership->deleted_at === null) {
            throw new GeneralException(__('exceptions.backend.memberships.cant_restore'));
        }

        if ($membership->restore()) {
            event(new MembershipRestored(Auth::user()->full_name, $membership->name));

            return $membership;
        }

        throw new GeneralException(__('exceptions.backend.memberships.restore_error'));
    }
}
