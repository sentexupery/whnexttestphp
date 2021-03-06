<?php

namespace Tests\Feature\Controllers;

use App\Models\Advert;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class AdvertControllerTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testIndexController()
    {
        $response = $this->json('get','/api/advert',['page' => 1, 'column' => 'price', 'order' => 'asc', 'per_page' => 10]);
        $response->assertOk()
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'title',
                        'price',
                        'photos',
                        'created_at',
                    ]
                ]
            ]);
    }
    public function testIShowControllerWithFields()
    {
        $data = [
            'title' => 'Title message',
            'description' => 'Content message Content message',
            'price' => '2000',

        ];
        $advert = Advert::create($data);
        $response = $this->json('get',"/api/advert/$advert->id",['fields' => '1']);
        $response->assertOk()
            ->assertJsonStructure([
                'data' => [
                        'id',
                        'title',
                        'description',
                        'price',
                        'photos',
                        'created_at',
                ]
            ])->assertJson(fn (AssertableJson $json) =>
            $json->has(1)
                ->first(fn ($json) =>
                $json->where('id', $advert->id)
                    ->where('title', $advert->title)
                    ->where('description', $advert->description)
                    ->etc()
                )
            );
    }
    public function testIShowControllerWithOutFields()
    {
        $data = [
            'title' => 'Title message',
            'description' => 'Content message Content message',
            'price' => '2000',

        ];
        $advert = Advert::create($data);
        $response = $this->json('get',"/api/advert/$advert->id",['fields' => '0']);
        $response->assertOk()
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'title',
                    'price',
                    'photos',
                    'created_at',
                ]
            ])
            ->assertJson(fn (AssertableJson $json) =>
            $json->has(1)
                ->first(fn ($json) =>
                $json->where('id', $advert->id)
                    ->where('title', $advert->title)
                    ->missing('description')
                    ->etc()
                )
            );
    }
    public function testStoreControllerTrueArray()
    {
        $response = $this->json('post','/api/advert',['title' => 'TITLE TITLE', 'description' => 'DESCRIPTION DESCRIPTION DESCRIPTION', 'price' => '2000', 'photos' => ['URL PHOTO 1','URL PHOTO 2']]);
        $response->assertStatus(201);
    }
    public function testStoreControllerFalseArray()
    {
        $response = $this->json('post','/api/advert',['title' => 'TITLE', 'description' => 'DESCRIPTION DESCRIPTION DESCRIPTION', 'price' => '2000', 'photos' => ['URL PHOTO 1','URL PHOTO 2']]);
        $response->assertStatus(422);
    }
}
