<?php

namespace App\Events\Backend\Coach;

use Illuminate\Queue\SerializesModels;

/**
 * Class CoachAssignActivity.
 */
class CoachAssignActivity
{
    use SerializesModels;

    /**
     * @var
     */
    public $object;
    public $activities;
    public $doer;

    /**
     * @param $object
     */
    public function __construct($doer, $activities, $object)
    {
        $this->doer   = $doer;
        $this->activities = $activities;
        $this->object = $object;
    }
}
