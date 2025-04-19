<?php 
namespace App\Repositories\Interfaces;

interface UserRepositoryInterface {
    public function getUsers($request);

    public function deleteUsers($request);
}