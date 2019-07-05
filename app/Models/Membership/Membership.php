<?php

namespace App\Models\Membership;

use App\Models\Membership\Traits\Relationship\MembershipRelationship;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Membership extends Model
{
    //
    use MembershipRelationship,
        SoftDeletes;

    protected $fillable = [
        'customer_id',
        'activity_id',
        'coach_id',
        'monthly_fee',
        'activity_date_subscription',
        'activity_date_expiry',
        'fee',
        'date_registered',
        'date_expiry'
    ];
}
