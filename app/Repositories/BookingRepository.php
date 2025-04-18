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

    public function deleteBooking($request) {

        try {
            $booking = Booking::find($request->get('id'));

            $booking->is_deleted = 1;

            $booking->save();
        } catch (\Exception $e) {
            return response()->json([
                "status" => false,
                "message" => $e->getMessage()
            ]);
        }

        return response()->json([
            "status" => true,
            "message" => "Booking Deleted Successfully."
        ]);
    }
}