<?php

namespace App\Events\Backend\Customer;

use Illuminate\Queue\SerializesModels;

/**
 * Class CustomerCreated.
 */
class CustomerCreated
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
