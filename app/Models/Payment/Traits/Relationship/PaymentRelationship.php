<?php

namespace App\Models\Payment\Traits\Relationship;

use App\Models\Activity\Activity;
use App\Models\Coach\Coach;
use App\Models\Customer\Customer;

/**
 * Class PaymentRelationship.
 */
trait PaymentRelationship
{
    /**
     * @return mixed
     */
    public function paymentable()
    {
        return $this->morphTo();
    }

    /**
     * @return mixed
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
