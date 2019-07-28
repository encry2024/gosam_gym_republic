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

    public function hasSessions()
    {
        if ($this->sessions > 0) {
            return true;
        }

        return false;
    }
}
