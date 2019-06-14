<?php

namespace App\Events\Backend\Activity;

use Illuminate\Queue\SerializesModels;

/**
 * Class ActivityRestored.
 */
class ActivityRestored
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
