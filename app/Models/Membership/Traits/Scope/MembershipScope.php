<?php

namespace App\Models\Membership\Traits\Scope;

/**
 * Class MembershipScope.
 */
trait MembershipScope
{
    /**
     * @param $query
     * @param bool $status
     *
     * @return mixed
     */
    public function scopeActive($query, $status = true)
    {
        return $query->where('status', $status);
    }
}
