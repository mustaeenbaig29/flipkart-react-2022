import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./Header";
import Listing from "./components/listing/listing";
import Details from './components/details/ProdDetails'
import PlaceOrder from './components/Booking/PlaceOrder'
import ViewOrder from './Components/Booking/viewOrder';
import Login from './Components/login/loginComponent';
import Register from './Components/login/registerComponent'

const Routing = () => {
    return(
        <>
        <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route  path="/listing/:id" component={Listing}/>
        <Route path="/details" component={Details}/>
        <Route path="/placeOrder/:prodName" component={PlaceOrder}/>
        <Route path="/viewBooking" component={ViewOrder}/>
         <Route path="/login" component={Login}/>
         <Route path="/register" component={Register}/>
        </BrowserRouter>
        </>
    )
}

export default Routing