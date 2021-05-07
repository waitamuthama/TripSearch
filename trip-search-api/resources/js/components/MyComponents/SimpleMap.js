import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

import { TripsConsumer } from '../context'
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -1.32409440,
      lng: 36.84429720
    },
    zoom: 11
  };

  render() {
    return (
      // <TripsConsumer>
      //   {value => {
      //     const { pickup_lat, pickup_lng } = value
      //     console.log(pickup_lat);
      //   }}
      // </TripsConsumer>
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBaAVYDHrAaSAJPpPVkU6yFyBvo7hJkLpA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;