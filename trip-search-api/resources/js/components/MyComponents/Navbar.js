import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/trip.png'
class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav nav-links">
              <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to="/trips">Trips</Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;