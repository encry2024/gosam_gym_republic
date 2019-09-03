<?php

namespace App\Models\Customer;

use App\Models\Customer\Traits\Relationship\CustomerRelationship;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer\Traits\Attribute\CustomerAttribute;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use CustomerAttribute,
        CustomerRelationship,
        SoftDeletes;
    //
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'date_of_birth',
        'age',
        'address',
        'contact_number',
        'emergency_number'
    ];

    protected $appends = ['name'];
}
