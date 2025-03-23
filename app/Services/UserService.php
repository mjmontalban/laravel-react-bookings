<?php 

namespace App\Services;
use App\Models\User;
use App\Traits\ResponseTrait;

class UserService {
    use ResponseTrait;

    public function getUsers() {
        $users = User::all();
        return $this->apiResponse([
            'status' => true,
            'data' => $users
        ]);
    }
}