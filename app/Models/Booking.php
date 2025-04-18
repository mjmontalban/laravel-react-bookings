<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    //

    public function user() {
        return $this->hasOne(User::class, 'listing_id', 'agency_listing_id');
    }
}
