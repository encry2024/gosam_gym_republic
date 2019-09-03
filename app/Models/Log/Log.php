<?php

namespace App\Models\Log;

use App\Models\Log\Traits\Relationship\LogRelationship;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    //
    use LogRelationship;

    protected $fillable = [
        'customer_id',
        'coach_id',
        'membership_id',
        'activity_id',
        'payment_type'
    ];
}
