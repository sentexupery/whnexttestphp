<?php

namespace App\Http\Controllers\Advert;

use App\Http\Controllers\Controller;
use App\Http\Requests\Advert\StoreRequest;
use App\Models\Advert;
use App\Models\AdvertPhoto;


class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();

        if ($data) {
            $photos = $data['photos'];
            unset($data['photos']);
            $advert = Advert::create($data);
            foreach ($photos as $photo)
            {
                if ($photo<>'')
                {
                    AdvertPhoto::create(['advert_id'=>$advert->id,'photo_path'=>$photo]);
                }
            }
            return response()->json(['ID' => $advert->id], 200);
        } else {
            return response()->json(['errors' => 'Ошибочка'], 422);
        }

    }
}
