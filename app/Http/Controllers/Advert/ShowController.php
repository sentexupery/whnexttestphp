<?php

namespace App\Http\Controllers\Advert;

use App\Http\Controllers\Controller;
use App\Http\Resources\Advert\AdvertFullResource;
use App\Http\Resources\Advert\AdvertResource;
use App\Models\Advert;
use Illuminate\Http\Request;

class ShowController extends Controller
{
    public function __invoke(Advert $advert, Request $request)
    {
        if($request->fields == 0) {
            return new AdvertResource($advert, $request);
        } else {
            return new AdvertFullResource($advert, $request);
        }
    }
}
