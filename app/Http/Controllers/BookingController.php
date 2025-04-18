<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\BookingService;
class BookingController extends Controller
{
    private BookingService $bookingService;

    public function __construct(BookingService $bookingService) {
        $this->bookingService = $bookingService;
    }

    public function get_bookings(Request $request) {
        return $this->bookingService->getBookings($request);
    }
}
