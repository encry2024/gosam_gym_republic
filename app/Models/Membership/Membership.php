<?php

namespace App\Models\Membership;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Membership extends Model
{
    //
    use SoftDeletes;

    protected $fillable = [
        'customer_id',
        'activity_id',
        'coach_id',
        'activity_date_subscription',
        'activity_date_expiry',
        'fee',
        'date_registered',
        'date_expiry'
    ];
}
