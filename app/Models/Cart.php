<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    public $timestamps = false;     //如果您只需要禁用更新    updated_at
    protected $table = 'cart';
}
