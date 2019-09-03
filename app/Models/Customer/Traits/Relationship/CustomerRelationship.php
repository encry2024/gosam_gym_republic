<?php

namespace App\Models\Customer\Traits\Relationship;

use App\Models\Membership\Membership;
use App\Models\Payment\Payment;

/**
 * Class CustomerRelationship.
 */
trait CustomerRelationship
{
    /**
     * @return mixed
     */
    public function memberships()
    {
        return $this->hasMany(Membership::class);
    }

    public function payments()
    {
        return $this->morphMany(Payment::class, 'paymentable');
    }

    public function transactions()
    {
        return $this->hasMany(Payment::class);
    }
}
