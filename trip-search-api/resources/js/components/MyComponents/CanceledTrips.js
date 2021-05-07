import React, { Component } from 'react';
import { TripsContext } from '../context'
import Trip from './Trip'
import Title from './Title'

class CanceledTrips extends Component {
  static contextType = TripsContext;
  render() {
    let { canceledTrips } = this.context;
    console.log(canceledTrips);
    canceledTrips = canceledTrips.map(trip => {
      return <Trip
        key={trip.id} trip={trip} />
    });
    return (
      <section className="featured-trips">
        <Title title="canceled trips" />
        <div className="featured-trips-center">
          {canceledTrips}
        </div>
      </section>
    )

  }
}

export default CanceledTrips;