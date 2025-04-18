<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Booking extends Model
{
    //

    const UPDATED_AT = 'date_modified';
    const CREATED_AT = 'date_created';

    protected static function booted()
    {
        static::addGlobalScope('not_deleted', function (Builder $builder) {
            $builder->where('is_deleted', 0); 
        });
    }

    public function user() {
        return $this->hasOne(User::class, 'listing_id', 'agency_listing_id');
    }
}
