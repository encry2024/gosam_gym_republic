<?php

namespace App\Models\Payment;

use App\Models\Payment\Traits\Attribute\PaymentAttribute;
use App\Models\Payment\Traits\Relationship\PaymentRelationship;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    //
    use PaymentRelationship,
        PaymentAttribute;

    protected $appends = [
        'income'
    ];

    protected $fillable = [
        'amount',
        'customer_id'
    ];
}
