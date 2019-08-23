<?php

namespace App\Repositories\Backend;

use App\Events\Backend\Membership\MembershipCreated;
use App\Events\Backend\Membership\MembershipPermanentlyDeleted;
use App\Events\Backend\Membership\MembershipRestored;
use App\Events\Backend\Membership\MembershipUpdated;
use App\Events\Backend\Payment\PaymentCreated;
use App\Exceptions\GeneralException;
use App\Models\Customer\Customer;
use App\Models\Membership\Membership;
use App\Models\Payment\Payment;
use App\Repositories\BaseRepository;
use Auth;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

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
     * @param int $paged
     * @param string $orderBy
     * @param string $sort
     *
     * @return mixed
     */
    public function getActivePaginated($paged = 25, $orderBy = 'created_at', $sort = 'desc'): LengthAwarePaginator
    {
        return $this->model->with(['customer', 'coach', 'activity'])->orderBy($orderBy, $sort)
            ->paginate($paged);
    }

    /**
     * @param int $paged
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
     * @return Membership
     * @throws \Throwable
     * @throws \Exception
     */
    public function create(array $data): Customer
    {
        return DB::transaction(function () use ($data) {
            $dateOfBirth = date('Y-m-d', strtotime($data['date_of_birth']));
            $age = Carbon::parse($dateOfBirth)->age;

            $customer = new Customer();
            $customer->first_name = $data['first_name'];
            $customer->last_name = $data['last_name'];
            $customer->email = $data['email'];
            $customer->date_of_birth = $dateOfBirth;
            $customer->age = $age;
            $customer->address = $data['address'];
            $customer->contact_number = $data['contact_number'];
            $customer->emergency_number = $data['emergency_number'];

            if ($customer->save()) {
                $registeredActivities = json_decode($data['registered_activities'], true);

//                dd($registeredActivities);

                foreach ($registeredActivities as $registeredActivity) {
                    $fee = str_replace(array("PHP ", ","), "", $registeredActivity['fee']);
                    $monthlyFee = str_replace(array("PHP ", ","), "", $registeredActivity['monthly_rate']);
                    $coachFee = str_replace(array("PHP", ","), "", $registeredActivity['coach_fee']);

                    $membership = parent::create([
                        'customer_id' => $customer->id,
                        'activity_id' => $registeredActivity['activity_id'],
                        'monthly_fee' => $monthlyFee,
                        'coach_id' => $registeredActivity['coach_id'],
                        'coach_fee' => $coachFee,
                        'activity_date_subscription' => date('Y-m-d h:i:s', strtotime($registeredActivity['activity_date_subscription'])),
                        'activity_date_expiry' => date('Y-m-d h:i:s', strtotime($registeredActivity['activity_date_expiry'])),
                        'fee' => $fee,
                        'date_registered' => date('Y-m-d h:i:s', strtotime($registeredActivity['date_subscription'])),
                        'date_expiry' => date('Y-m-d h:i:s', strtotime($registeredActivity['date_expiry'])),
                        'status' => 1,
                        'date_session_renewed' => date('Y-m-d h:i:s')
                    ]);

                    $amountReceived = $membership->fee + $membership->monthly_fee;

                    $payment = new Payment(['customer_id' => $customer->id, 'amount_received' => $amountReceived]);
                    $membership->payments()->save($payment);

                    event(new PaymentCreated(Auth::user()->full_name, $amountReceived));
                }

                event(new MembershipCreated(Auth::user()->full_name, $customer->name));

                return $customer;
            }

            throw new GeneralException(__('exceptions.backend.memberships.create_error'));
        });
    }

    /**
     * @param Membership $membership
     * @param array $data
     *
     * @return Membership
     * @throws \Exception
     * @throws \Throwable
     * @throws GeneralException
     */
    public function update(Membership $membership, array $data): Membership
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
     * @return Membership
     * @throws \Exception
     * @throws \Throwable
     * @throws GeneralException
     */
    public function forceDelete(Membership $membership): Membership
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
     * @return Membership
     * @throws GeneralException
     */
    public function restore(Membership $membership): Membership
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
