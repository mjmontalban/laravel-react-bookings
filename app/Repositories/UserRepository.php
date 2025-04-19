<?php 
namespace App\Repositories;

use App\Repositories\Interfaces\BookingRepositoryInterface;
use App\Models\User;
use App\Http\Resources\UserResource;
class UserRepository implements UserRepositoryInterface {

    public function getUsers($request) {
        $users = User::query()
        ->with(['user'])
        ->take($request->get('limit'))
        ->skip($request->get('offset'))
        ->orderByDesc('id')
        ->get();

        return UserResource::collection($users);
    }

    public function deleteUsers($request) {

    }

}