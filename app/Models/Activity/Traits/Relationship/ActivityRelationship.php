<?php

namespace App\Models\Activity\Traits\Relationship;

use App\Models\Coach\Coach;
use App\Models\Membership\Membership;
use App\Models\Payment\Payment;

/**
 * Class ActivityRelationship.
 */
trait ActivityRelationship
{
    /**
     * @return mixed
     */
    public function activityCoaches()
    {
        return $this->belongsToMany(Coach::class);
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
