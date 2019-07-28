<?php

namespace App\Repositories\Backend;

use App\Events\Backend\Payment\PaymentUpdated;
use App\Models\Activity\Activity;
use App\Models\Coach\Coach;
use App\Models\Log\Log;
use App\Models\Membership\Membership;
use App\Models\Payment\Payment;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * Class PaymentRepository.
 */
class PaymentRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Payment::class;
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
        return $this->model->query()
            ->with(['paymentable' => function (MorphTo $morphTo) {
                $morphTo->morphWith([
                    Membership::class => ['coach:id,first_name,last_name', 'activity'],
                    Log::class => ['coach:id,first_name,last_name', 'activity', 'customer'],
                ]);
            }, 'customer:id,first_name,last_name'])
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
}
