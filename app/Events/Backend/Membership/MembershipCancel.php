<?php

namespace App\Events\Backend\Membership;

use Illuminate\Queue\SerializesModels;

/**
 * Class MembershipCancel.
 */
class MembershipCancel
{
    use SerializesModels;

    /**
     * @var
     */
    public $object;
    public $activity;
    public $doer;

    /**
     * @param $object
     */
    public function __construct($doer, $activity, $object)
    {
        $this->doer   = $doer;
        $this->activity = $activity;
        $this->object = $object;
    }
}
