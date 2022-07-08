<?php

namespace App\Http\Resources\Advert;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class AdvertResource extends JsonResource
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
            'title' => $this->title,
            'price' => $this->price,
            'photos' => AdvertResourcePhoto::collection($this->photos),
            'created_at' => Carbon::parse($this->created_at)->format('h:m d.m.Y')
        ];
    }
}
