import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './myComponents/Navbar'
import Trips from './pages/Trips.js'
import Error from './pages/Error'
import SingleTrip from './pages/SingleTrip'

class App extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/search-trips" component={SearchTrip} /> */}
                    <Route exact path="/trips" component={Trips} />
                    <Route exact path="/trips/:id" component={SingleTrip} />
                    <Route exact component={Error} />

                </Switch>
            </>
        );
    }
}

export default App;