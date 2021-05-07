import React from 'react'
import CanceledTrips from '../MyComponents/CanceledTrips'
import { Link } from 'react-router-dom'
import Hero from '../MyComponents/Hero'
import Banner from '../MyComponents/Banner'
function Home(props) {
  return (
    <>
      <Hero hero="defaultHero" className=" container-fluid">
        <Banner className="" title="Welcome to Hava"
          subtitle="we drive you ride"
        >
          <Link to="/trips" className="btn-primary">
            <span >Search trips</span></Link>
        </Banner>
      </Hero>
      <CanceledTrips />

    </>
  );
}

export default Home;