<?php

namespace App\Models\Coach\Traits\Relationship;

use App\Models\Activity\Activity;

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
}
