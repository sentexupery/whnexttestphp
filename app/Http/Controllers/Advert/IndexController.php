<?php

namespace App\Http\Controllers\Advert;

use App\Http\Controllers\Controller;
use App\Http\Resources\Advert\AdvertResource;
use App\Models\Advert;
use Illuminate\Http\Request;


class IndexController extends Controller
{
    public function __invoke(Request $request)
    {
        $adverts = Advert::orderBy($request->column, $request->order)->paginate($request->per_page);
        return AdvertResource::collection($adverts);
    }
}
