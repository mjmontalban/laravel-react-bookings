<?php 

namespace App\Services;
use App\Models\User;
use App\Traits\ResponseTrait;
use App\Repositories\Interfaces\UserRepositoryInterface;
class UserService {
    use ResponseTrait;

    private UserRepositoryInterface $userRepo;

    public function __construct(UserRepositoryInterface $userRepo) {
        $this->userRepo = $userRepo;
    }

    public function getUsers($request) {
        return $this->$this->getUsers($request);
    }
}