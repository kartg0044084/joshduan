<?php

namespace App\Repositories;

use Yish\Generators\Foundation\Repository\Repository;
use App\Models\Category; //Model

class PagesRepository extends Repository
{
    // protected $model;

    private $category;

    public function __construct(Category $category)
    {
        $this->category = $category;
    }

}
