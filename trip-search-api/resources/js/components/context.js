import React, { Component } from 'react';
import axios from 'axios'


const TripsContext = React.createContext();

class TripsProvider extends Component {
  state = {
    trips: [],
    url: "http://127.0.0.1:8000/api/trips",
    canceledTrips: [],
    sortedTrips: [],
    loading: true,
    driver_name: '',
    status: "COMPLETED",
    distance: 0.0,
    minDistance: 0.0,
    maxDistance: 0.0,
    duration: 0.0,
    minDuration: 0.0,
    maxDuration: 0.0
  }

  //getData
  componentDidMount() {
    this.getTrips()
  }

  getTrips = async () => {
    const trips = await axios.get(this.state.url);

    const canceledTrips = trips.data.filter(trip => trip.status
      === "CANCELED");

    let completedTrips = trips.data.filter(trip => trip.status
      === "COMPLETED");

    let maxDistance = Math.max(...trips.data.map(
      item => item.distance
    ));

    let maxDuration = Math.max(...trips.data.map(
      item => item.duration
    ));

    this.setState({
      trips: trips.data,
      canceledTrips: canceledTrips,
      sortedTrips: trips.data,
      sortedTrips: completedTrips,
      loading: false,
      status: "COMPLETED",
      distance: maxDistance,
      maxDistance,
      duration: maxDuration,
      maxDuration

    });
  };

  // formatData(items) {
  //   let tempItems = items.map(item => {
  //     let trip = { ...item }
  //     return trip
  //   });
  //   return tempItems
  // }

  getTrip = (id) => {
    const trip = this.state.trips.find(trip =>
      trip.id === id);
    return trip;
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ?
      target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterTrips
    );
  }

  filterTrips = () => {
    let { trips, status, distance,
      minDistance, maxDistance,
      duration, maxDuration, minDuration, driver_name
    } = this.state;

    let tempTrips = [...trips];


    //filter by status
    if (status) {
      tempTrips = tempTrips.filter(trip => trip.status
        === "COMPLETED");
    }

    //filter by distance
    tempTrips = tempTrips.filter(
      trip => trip.distance <= distance);

    //filter by duration
    tempTrips = tempTrips.filter(
      trip => trip.duration <= duration);

 

    //change state
    this.setState({
      sortedTrips: tempTrips
    })

  }

  render() {
    return (
      <TripsContext.Provider
        value={{
          ...this.state,
          getTrip: this.getTrip,
          handleChange: this.handleChange

        }}>
        {this.props.children}
      </TripsContext.Provider>
    );
  }

}
const TripsConsumer = TripsContext.Consumer;

export function withTripsConsumer(Component) {
  return function ConsumerWrapper(props) {
    return <TripsConsumer>
      {value => <Component {...props} context={value} />}
    </TripsConsumer>
  }
}

export { TripsProvider, TripsConsumer, TripsContext };
