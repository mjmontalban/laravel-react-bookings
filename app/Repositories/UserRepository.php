<?php 
namespace App\Repositories;

use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Models\User;
use App\Http\Resources\UserResource;
class UserRepository implements UserRepositoryInterface {

    public function getUsers($request) {
        $users = User::query()
        ->take($request->get('limit'))
        ->skip($request->get('offset'))
        ->orderByDesc('listing_id')
        ->get();

        return UserResource::collection($users);
    }

    public function deleteUsers($request) {

    }

}