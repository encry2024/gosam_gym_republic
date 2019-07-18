<?php

namespace App\Models\Membership\Traits\Method;

/**
 * Trait MembershipMethod.
 */
trait MembershipMethod
{
    /**
     * @return bool
     */
    public function isActive()
    {
        return $this->active;
    }
}
