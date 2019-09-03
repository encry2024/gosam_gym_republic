<?php

namespace App\Events\Backend\Payment;

use Illuminate\Queue\SerializesModels;

/**
 * Class PaymentDeleted.
 */
class PaymentDeleted
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
