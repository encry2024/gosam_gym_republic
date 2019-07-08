<?php

namespace App\Models\Membership;

use App\Models\Membership\Traits\Attribute\MembershipAttribute;
use App\Models\Membership\Traits\Relationship\MembershipRelationship;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Membership extends Model
{
    //
    use MembershipAttribute,
        MembershipRelationship,
        SoftDeletes;

    protected $fillable = [
        'customer_id',
        'activity_id',
        'monthly_fee',
        'coach_id',
        'coach_fee',
        'activity_date_subscription',
        'activity_date_expiry',
        'fee',
        'date_registered',
        'date_expiry'
    ];

    protected $appends = [
        'fee_string',
        'monthly_fee_string',
        'coach_fee_string'
    ];
}
