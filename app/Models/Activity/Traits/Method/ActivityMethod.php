<?php

namespace App\Models\Activity\Traits\Method;

/**
 * Trait ActivityMethod.
 */
trait ActivityMethod
{
    public function hasQuota()
    {
        if ($this->quota > 0) {
            return true;
        }

        return false;
    }
}
