<?php

namespace App\Repositories\Backend;

use App\Events\Backend\Membership\MembershipCreated;
use App\Events\Backend\Membership\MembershipPermanentlyDeleted;
use App\Events\Backend\Membership\MembershipRestored;
use App\Events\Backend\Membership\MembershipUpdated;
use App\Events\Backend\Payment\PaymentCreated;
use App\Exceptions\GeneralException;
use App\Models\Activity\Activity;
use App\Models\Coach\Coach;
use App\Models\Customer\Customer;
use App\Models\Membership\Membership;
use App\Models\Payment\Payment;
use App\Repositories\BaseRepository;
use Auth;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\Log\Log;

/**
 * Class LogRepository.
 */
class LogRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Log::class;
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

    public function getDailyLogPaginated($paged = 25, $orderBy = 'created_at', $sort = 'desc'): LengthAwarePaginator
    {
        return $this
            ->model
            ->with(['customer'])
            ->whereDate('created_at', date('Y-m-d'))
            ->orderBy($orderBy, $sort)
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
    public function create(array $data): Log
    {
        return DB::transaction(function () use ($data) {
            $customer = Customer::find($data['customer_id']);
            $activity = Activity::find($data['activity_id']);
            $coach = Coach::find($data['coach']);
            $amount = 0.00;
            $payment_type = "";

            $log = new Log;
            $log->customer_id = $data['customer_id'];
            $log->membership_id = $data['membership_id'];
            $log->activity_id = $data['activity_id'];
            $log->coach_id = $data['coach'];

            /*if ($activity->hasQuota()) {
                // Check if the membership_id field value is 0...
                if ($data['membership_id'] == 0) {
                    $amount = $activity->non_member_rate;
                    $log->payment_type = 'Non-Member Rate';

                    if ($log->save()) {
                        $payment = new Payment(['customer_id' => $customer->id, 'amount_received' => $amount]);

                        if ($log->payments()->save($payment)) {
                            return $log;
                        }

                        throw new GeneralException("Something went wrong when logging the non-member rate payment.");
                    }

                    throw new GeneralException("Something went wrong when saving the log for Customer \"{$customer->name}\"");
                }

                // Find membership data through ID.
                $membership = Membership::find($data['membership_id']);

                if ($membership->isActive()) {
                    if ($membership->hasSessions()) {
                        $amount = 0.00;
                        $log->payment_type = 'Session';

                        if ($log->save()) {
                            $payment = new Payment(['customer_id' => $customer->id, 'amount_received' => $amount]);

                            if ($log->payments()->save($payment)) {
                                return $log;
                            }

                            throw new GeneralException("Something went wrong when logging the member rate payment.");
                        }
                    }

                    // Non Sessions
                    $amount = $activity->non_member_rate;
                    $log->payment_type = 'Non-Member Rate';

                    if ($log->save()) {
                        $payment = new Payment(['customer_id' => $customer->id, 'amount_received' => $amount]);

                        if ($log->payments()->save($payment)) {
                            return $log;
                        }

                        throw new GeneralException("Something went wrong when logging the non-member rate payment.");
                    }

                    throw new GeneralException("Something went wrong when saving the log for Customer \"{$customer->name}\"");
                }
            }*/

            // Current code...
            if ($data['membership_id'] != 0) {
                $membership = Membership::find($data['membership_id']);

                if ($membership->isActive()) {
                    if ($membership->sessions > 0) {
                        $update = $membership->update(['sessions' => $membership->sessions - 1]);

                        if ($update) {
                            $amount = 0.00;
                            $payment_type = 'Session';
                            $log->payment_type = 'N/A';
                        }
                    } else {
                        $amount = $activity->member_rate;
                        $payment_type = 'Member Rate';
                        $log->payment_type = 'N/A';
                    }
                } else {
                    $amount = $activity->non_member_rate;
                    $payment_type = 'Non-Member Rate';
                    $log->payment_type = 'N/A';
                }
            } else {
                $amount = $activity->non_member_rate;
                $payment_type = 'Non-Member Rate';
                $log->payment_type = 'N/A';
            }

            if ($log->save()) {
                if ($activity->quota > 0) {
                    if ($payment_type != "Session") {
                        $updateQuota = $activity->update(['quota' => $activity->quota - 1]);

                        if (!$updateQuota) {
                            throw new GeneralException('Failed to update quota log transaction.');
                        }

                        $updateLog = $log->update(['payment_type' => 'Quota']);

                        if ($updateLog) {
                            $payment = new Payment(['customer_id' => $customer->id, 'amount_received' => $amount]);
                            $log->payments()->save($payment);

                            return $log;
                        } else {
                            throw new GeneralException("Failed to update {$activity->name} Quota.");
                        }
                    }

                    $updateLog = $log->update(['payment_type' => $payment_type]);

                    if ($updateLog) {
                        $payment = new Payment(['customer_id' => $customer->id, 'amount_received' => $amount]);
                        $log->payments()->save($payment);

                        return $log;
                    }
                } else {
                    $updateLog = $log->update(['payment_type' => $payment_type]);

                    if ($updateLog) {
                        $payment = new Payment(['customer_id' => $customer->id, 'amount_received' => $amount]);
                        $log->payments()->save($payment);

                        return $log;
                    } else {
                        throw new GeneralException('Failed to update non-quota log transaction.');
                    }
                }
            }

            throw new GeneralException("Failed to log Customer \"{$customer->name}\".");
        });
    }
}
