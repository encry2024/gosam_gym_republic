<?php

namespace App\Models\Activity\Traits\Relationship;

use App\Models\Coach\Coach;

/**
 * Class ActivityRelationship.
 */
trait ActivityRelationship
{
    /**
     * @return mixed
     */
    public function activityCoach()
    {
        return $this->belongsToMany(Coach::class);
    }
}
