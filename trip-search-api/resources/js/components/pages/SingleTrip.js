import React, { Component } from 'react';
import Hero from '../MyComponents/Hero'
import Banner from '../MyComponents/Banner'
import { Link } from 'react-router-dom'
import Title from '../MyComponents/Title'
import { MdLocationOn, MdDoNotDisturbOn } from 'react-icons/md'
import { MdLocationOff } from 'react-icons/md'
import { MdDoNotDisturb } from 'react-icons/md'
import { MdDone } from 'react-icons/md'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box'
import SimpleMap from '../MyComponents/SimpleMap'

import { TripsContext } from '../context'

class SingleTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }
  static contextType = TripsContext;
  render() {
    const { getTrip } = this.context;
    const id = parseInt(this.state.id);
    const trip = getTrip(id);

    const { status, request_date, pickup_lat, pickup_lng, pickup_location,
      dropoff_lat, dropff_lng, dropoff_location, pickup_date, dropoff_date,
      type, driver_name, driver_rating, driver_id, driver_pic, car_model, car_number, car_year, car_pic,
      duration, duration_unit, distance, distance_unit, cost, cost_unit } = trip;
    return (
      <>
        <Hero hero="defaultHero" className=" container-fluid">
          <Banner className="" title="Trip Details"
          >
            <Link to="/trips" className="btn-primary">
              <span >return trips</span></Link>
          </Banner>
        </Hero>

        <div className="container mt-5">
          <Title title="trip details" />
          <div className="row">
            <div className="conatiner col-md-5">
              <SimpleMap />
              <hr />
            </div>
            <div className="container-fluid  col-md-6">
              <div className="row">
                <h4><span className="text-slanted">Date</span>:{request_date}</h4>
                <p className="ml-4">trip cost:{cost_unit} {" "} <span className=" badge-info p-2">{cost}</span> </p>
              </div>
              <hr />

              <div className="container location">
                <div className="container mb-3 font-weight-light">
                  <h4>from:<span className="text-success">
                    <MdLocationOn /></span> {pickup_location}</h4>
                  <span >pickup time: {pickup_date}</span>
                </div>
                <div className="container">
                  <h4> to:<span className="text-danger"><MdLocationOff />
                  </span> {dropoff_location}</h4>
                  <span >dropoff time: {dropoff_date}</span>
                </div>
                <hr />
              </div>
              <hr />
              <div className="container">
                <div className="row">
                  <img src={driver_pic} height="50"
                    className="img-container rounded-circle ml-2" alt="" />
                  <span className="ml-3"> {driver_name}</span>
                  <Box className="ml-5" component="fieldset" mb={3} borderColor="transparent">
                    <Rating className="mr-2" name="read-only" value={driver_rating} readOnly />
                  </Box>
                  <span>driver id:{driver_id}</span>
                </div>
              </div>
              <hr />

              <div className="container">
                <ul className=" list-group d-flex">
                  <li>Distance : {distance} {distance_unit}</li>
                  <li>Duration : {duration} {duration_unit}</li>
                  <li>Duration : {duration} {duration_unit}</li>

                </ul>
              </div>


            </div>
          </div>
          <hr />
          <div className="conatiner">
            <div className="row">
              <div className="container col-md-3">
                <div className="row">
                  <img src={car_pic} className=" card-img-overlay" alt="car" />
                  <div className="row container ml-3">
                    <span className="mr-2">{car_model}</span><br />
                    <span className="mr-2">{car_number}</span><br />
                    <span className="mr-2">{car_year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default SingleTrip;