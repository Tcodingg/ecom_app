import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Cart from './components/Cart'
import LandingPage from './components/LandingPage'

export default function App() {
    return (
        <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path = '/'> <LandingPage/></Route> 
                
                <Route exact path = '/cart'> <Cart /></Route> 
            </Switch>
        </div>
        </Router>
    )
}
