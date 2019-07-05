<?php

namespace App\Models\Coach\Traits\Relationship;

use App\Models\Activity\Activity;
use App\Models\Membership\Membership;
use App\Models\Payment\Payment;

/**
 * Class CoachRelationship.
 */
trait CoachRelationship
{
    /**
     * @return mixed
     */
    public function activityCoaches()
    {
        return $this->belongsToMany(Activity::class);
    }

    public function payments()
    {
        return $this->morphMany(Payment::class, "paymentable");
    }

    public function memberships()
    {
        return $this->hasMany(Membership::class);
    }
}
