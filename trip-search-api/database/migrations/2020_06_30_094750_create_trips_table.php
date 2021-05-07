<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->integer('id');
            $table->string('status');
            $table->dateTime('request_date');
            $table->decimal('pickup_lat');
            $table->decimal('pickup_lng');
            $table->string('pickup_location');
            $table->decimal('dropoff_lat');
            $table->decimal('dropoff_lng');
            $table->string('dropoff_location');
            $table->dateTime('pickup_date');
            $table->dateTime('dropoff_date');
            $table->string('type');
            $table->decimal('driver_id');
            $table->string('driver_name');
            $table->decimal('driver_rating');
            $table->string('driver_pic');
            $table->string('car_model');
            $table->string('car_make');
            $table->string('car_number');
            $table->integer('car_year');
            $table->string('car_pic');
            $table->integer('duration');
            $table->string('duration_unit');
            $table->decimal('distance');
            $table->string('distance_unit');
            $table->decimal('cost');
            $table->string('cost_unit');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trips');
    }
}
