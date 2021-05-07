import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { TripsProvider } from './context'
//import components
import App from './App'

// change the getElementId from example to app 
// render App component instead of Example

ReactDOM.render(
  <TripsProvider>
    <Router>
      <App />
    </Router>
  </TripsProvider>,
  document.getElementById('root')
);
