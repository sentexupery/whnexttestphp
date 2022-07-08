<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdvertPhoto extends Model
{
    use HasFactory;
    protected $table = 'advert_photos';
    protected $guarded = false;
}
