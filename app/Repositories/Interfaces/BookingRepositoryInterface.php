<?php
namespace App\Repositories\Interfaces;

interface BookingRepositoryInterface {

    public function getBookings ($request);

    public function deleteBooking ($request);

}