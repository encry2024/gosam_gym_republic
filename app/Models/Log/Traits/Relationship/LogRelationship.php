<?php

namespace App\Models\Log\Traits\Relationship;

use App\Models\Activity\Activity;
use App\Models\Coach\Coach;
use App\Models\Customer\Customer;
use App\Models\Membership\Membership;
use App\Models\Payment\Payment;

/**
 * Class LogRelationship.
 */
trait LogRelationship
{

    public function payments()
    {
        return $this->morphMany(Payment::class, 'paymentable');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function membership()
    {
        return $this->belongsTo(Membership::class);
    }

    public function coach()
    {
        return $this->belongsTo(Coach::class);
    }

    public function activity()
    {
        return $this->belongsTo(Activity::class);
    }


}
