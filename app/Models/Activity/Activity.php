<?php

namespace App\Models\Activity;

use App\Models\Activity\Traits\Method\ActivityMethod;
use App\Models\Activity\Traits\Relationship\ActivityRelationship;
use Illuminate\Database\Eloquent\Model;
use App\Models\Activity\Traits\Attribute\ActivityAttribute;
use Illuminate\Database\Eloquent\SoftDeletes;

class Activity extends Model
{
    use ActivityMethod,
        ActivityAttribute,
        ActivityRelationship,
        SoftDeletes;

    protected $fillable = [
        'name',
        'member_rate',
        'non_member_rate',
        'coach_fee',
        'monthly_rate',
        'membership_fee',
        'sessions',
        'quota'
    ];

    protected $appends = [
        'member_fee',
        'non_member_fee',
        'coach_rate',
        'monthly_fee',
        'membership_rate'
    ];
}
