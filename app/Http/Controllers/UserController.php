<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\UserService;
class UserController extends Controller
{
    private UserService $userService;

    public function __construct() {
        $this->userService = (new UserService());
    }
    public function getUsers(Request $request) {
        return $this->userService->getUsers($request);
    }
}
