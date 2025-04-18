<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "bookingNo" => $this->booking_no,
            "bookingCost" => $this->agency_budget_amount,
            "bookingCostCurrency" => $this->agency_budget_currency_code,
            "status" => $this->status,
            "user" => $this->whenLoaded("user", function($user) {
                return new UserResource($user);
            })
        ];
    }
}
