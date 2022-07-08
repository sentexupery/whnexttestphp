<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdvertPhotosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('advert_photos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('advert_id');
            $table->text('photo_path');
            $table->timestamps();
            $table->index('advert_id','advert_idx');
            $table->foreign('advert_id','advert_fk')->on('adverts')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('advert_photos');
    }
}
