<?php

namespace App\Http\Resources\Advert;

use Illuminate\Http\Resources\Json\JsonResource;

class AdvertResourcePhoto extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'photo_path' => $this->photo_path,
        ];
    }
}
