<?php
namespace App\Repositories;

use App\Repositories\Interfaces\BookingRepositoryInterface;
use App\Models\Booking;
use App\Http\Resources\BookingResource;
class BookingRepository implements BookingRepositoryInterface {

    public function getBookings() {
        $bookings = Booking::query()
        ->with(['user'])
        ->take(10)
        ->skip(0)
        ->orderByDesc('id')
        ->get();

        return BookingResource::collection($bookings);
    }

    public function deleteBooking() {
        
    }
}