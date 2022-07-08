<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Advert extends Model
{
    use HasFactory;
    protected $table = 'adverts';
    protected $guarded = false;

    public function photos(){
        return $this->hasMany(AdvertPhoto::class);
    }
}
