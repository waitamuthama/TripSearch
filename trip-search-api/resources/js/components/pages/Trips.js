import React from 'react';
import { Link } from 'react-router-dom'
import Hero from '../MyComponents/Hero'
import Banner from '../MyComponents/Banner'
import TripsContainer from '../MyComponents/TripsContainer'
function Trips(props) {
  return (
    <>
      <Hero hero="tripsHero">
        <Banner
          title="search your trips here"
        >
          <Link to="/" className="btn-primary">
            <span >return home</span></Link>
        </Banner>
      </Hero>
      <TripsContainer />
    </>
  );
}

export default Trips;