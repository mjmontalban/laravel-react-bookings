<?php

namespace App\Services;

use App\Repositories\Interfaces\BookingRepositoryInterface;
class BookingService {

    private BookingRepositoryInterface $bookingRepository;
    public function __construct(BookingRepositoryInterface $bookingRepository) {
        $this->bookingRepository = $bookingRepository;
    }

    public function getBookings($request) {
        return $this->bookingRepository->getBookings($request);
    }

    public function deleteBooking($request) {
      
    }
}