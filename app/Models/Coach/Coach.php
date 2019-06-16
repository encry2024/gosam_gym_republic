<?php

namespace App\Models\Coach;

use Illuminate\Database\Eloquent\Model;
use App\Models\Coach\Traits\Attribute\CoachAttribute;
use App\Models\Coach\Traits\Relationship\CoachRelationship;
use Illuminate\Database\Eloquent\SoftDeletes;
use OwenIt\Auditing\Contracts\Auditable as AuditableInterface;
use OwenIt\Auditing\Auditable;

class Coach extends Model implements AuditableInterface
{
    //
    use CoachAttribute,
        Auditable,
        CoachRelationship,
        SoftDeletes;

    protected $fillable = [
        'first_name',
        'last_name',
        'address',
        'contact_number',
        'employment_type'
    ];

    protected $appends = ['name'];

    protected $auditExclude = [
        'id'
    ];

    protected $with = ['activityCoaches'];
}
