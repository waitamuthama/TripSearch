import React from 'react';
import img from '../images/car.png'
import { Link } from 'react-router-dom'
import { MdLocationOn, MdDoNotDisturbOn } from 'react-icons/md'
import { MdLocationOff } from 'react-icons/md'
import { MdDoNotDisturb } from 'react-icons/md'
import { MdDone } from 'react-icons/md'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box'
function Trip({ trip }) {
  const { id, cost, driver_rating,
    driver_name, status, request_date,
    driver_pic, duration, pickup_location, dropoff_location, cost_unit, distance } = trip
  return (
    <div className="row">
      <div className="card  border-left-primary h-25 shadow border-orange ">
        <div className="card-header border-bottom-0">
          <span className="cost-top mt-0">{cost_unit} {cost}</span>
          <span className="mr-2">{distance} Km</span>
          {duration} mins
        </div>

        <div className="card-body text-truncate overflow-scroll">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="container mb-3">
                <span className="text-success overflow-scroll"><MdLocationOn /></span>
                {pickup_location}
              </div>
              <div className="container">
                <span className="text-danger overflow-scroll"><MdLocationOff /></span> {dropoff_location}
              </div>
              <hr />

              <div className="row">
                <div className="container mt-1">
                  <div className="" >
                    <img src={driver_pic} height="50"
                      className="img-container rounded-circle ml-2" alt="" />
                    <span ml-2> {driver_name}</span>

                    <Box className="ml-5" component="fieldset" mb={3} borderColor="transparent">
                      <Rating name="read-only" value={driver_rating} readOnly />
                    </Box>
                  </div>
                  <hr />
                </div>

                <div>
                  <span>{status}</span>
                  {status === "CANCELED" ? (<span className="text-danger cancel">
                    <MdDoNotDisturb /></span>) : (<span className="text-success success"><MdDone /></span>)}
                  <Link to={`/trips/${id}`} className="btn btn-primary ml-2">
                    Details
                  </Link>
                </div>
              </div>
              <Link to={`/trips/${id}`} className="btn-primary trip-link ">features</Link>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <span className="ml-2">{request_date}</span>
        </div>

      </div>
    </div>
  );
}

export default Trip;