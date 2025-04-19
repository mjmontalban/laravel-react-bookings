<?php 

namespace App\Services;
use App\Models\User;
use App\Traits\ResponseTrait;
use App\Repositories\Interfaces\UserRepositoryInterface;
class UserService {
    use ResponseTrait;

    private UserRepositoryInterface $userRepository;

    public function __construct(UserRepositoryInterface $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function getUsers($request) {
        return $this->userRepository->getUsers($request);
    }

}