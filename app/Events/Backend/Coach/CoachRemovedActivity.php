<?php

namespace App\Events\Backend\Coach;

use Illuminate\Queue\SerializesModels;

/**
 * Class CoachRemovedActivity.
 */
class CoachRemovedActivity
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
