import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Order from './components/Order'
import LandingPage from './components/LandingPage'

export default function App() {
    return (
        <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path = '/'> <LandingPage/></Route> 
                
                <Route exact path = '/cart'> <Cart /></Route> 
                <Route exact path = '/order'> <Order /></Route> 
            </Switch>
            <Footer />
        </div>
        </Router>
    )
}
