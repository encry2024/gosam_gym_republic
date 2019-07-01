<?php

namespace App\Events\Backend\Membership;

use Illuminate\Queue\SerializesModels;

/**
 * Class MembershipCreated.
 */
class MembershipCreated
{
    use SerializesModels;

    /**
     * @var
     */
    public $object;
    public $doer;

    /**
     * @param $object
     */
    public function __construct($doer, $object)
    {
        $this->doer   = $doer;
        $this->object = $object;
    }
}
