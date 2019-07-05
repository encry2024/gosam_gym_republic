<?php

namespace App\Models\Customer\Traits\Relationship;

use App\Models\Membership\Membership;

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
}
