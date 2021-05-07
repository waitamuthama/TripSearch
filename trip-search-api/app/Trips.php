<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trips extends Model
{
    protected $fillable = [
        'id', 
        'status',
        'request_date',
        'pickup_lat',
        'pickup_lng',
        'pickup_location',
        'dropoff_lat',
        'dropoff_lng',
        'dropoff_location',
        'pickup_date',
        'dropoff_date',
        'type',
        'driver_id',
        'driver_name',
        'driver_rating',
        'driver_pic',
        'car_make',
        'car_model',
        'car_number',
        'car_year',
        'car_pic',
        'duration',
        'duration_unit',
        'distance',
        'distance_unit',
        'cost',
        'cost_unit'
    ];
}
