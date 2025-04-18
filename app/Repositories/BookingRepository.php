<?php
namespace App\Repositories;

use App\Repositories\Interfaces\BookingRepositoryInterface;
use App\Models\Booking;
use App\Http\Resources\BookingResource;
class BookingRepository implements BookingRepositoryInterface {

    public function getBookings() {
        $bookings = Booking::query()->take(10)->skip(0)->get();

        return BookingResource::collection($bookings);
    }

    public function deleteBooking() {
        
    }
}