<?php

namespace App\Models\Membership\Traits\Relationship;

use App\Models\Activity\Activity;
use App\Models\Coach\Coach;
use App\Models\Customer\Customer;

/**
 * Class MembershipRelationship.
 */
trait MembershipRelationship
{
    /**
     * @return mixed
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function activity()
    {
        return $this->belongsTo(Activity::class);
    }

    public function coach()
    {
        return $this->belongsTo(Coach::class);
    }
}
