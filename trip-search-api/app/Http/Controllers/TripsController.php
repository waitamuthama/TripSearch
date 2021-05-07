<?php

namespace App\Http\Controllers;
use App\Trips;
use Illuminate\Http\Request;

class TripsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $trips =Trips::orderBy('id','desc')->get();
        return response()->json($trips);
    }

  

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $trip = new Trips;
        $trip->id = $request->id;
        $trip->status = $request->status;
        $trip->request_date = $request->request_date;
        $trip->pickup_lat = $request->pickup_lat;
        $trip->pickup_lng= $request->pickup_lng;
        $trip->pickup_location = $request->pickup_location;
        $trip->dropoff_lat = $request->dropoff_lat;
        $trip->dropoff_lng = $request->dropoff_lng;
        $trip->dropoff_location = $request->dropoff_location;
        $trip->pickup_date = $request->pickup_date;
        $trip->dropoff_date = $request->dropoff_date;
        $trip->type = $request->type;
        $trip->driver_id = $request->driver_id;
        $trip-> driver_name= $request->driver_name;
        $trip->driver_rating = $request->driver_rating;
        $trip->driver_pic = $request->driver_pic;
        $trip->car_make = $request->car_make;
        $trip->car_model = $request->car_model;
        $trip->car_number = $request->car_number;
        $trip->car_year = $request->car_year;
        $trip->car_pic = $request->car_pic;
        $trip->duration = $request->duration;
        $trip->duration_unit = $request->duration_unit;
        $trip->distance = $request->distance;
        $trip->distance_unit = $request->distance_unit;
        $trip->cost = $request->cost;
        $trip->cost_unit = $request->cost_unit;
        
        $trip->save();
        return response()->json($trip);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
