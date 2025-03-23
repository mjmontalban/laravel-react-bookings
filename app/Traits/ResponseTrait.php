<?php 
namespace App\Traits;

trait ResponseTrait {
    public function apiResponse($data) {
        return response()->json([
            'status' => true,
            'data' => $data
        ]);
    }
}