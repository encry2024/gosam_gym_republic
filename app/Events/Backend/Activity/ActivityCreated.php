<?php

namespace App\Events\Backend\Activity;

use Illuminate\Queue\SerializesModels;

/**
 * Class ActivityCreated.
 */
class ActivityCreated
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
