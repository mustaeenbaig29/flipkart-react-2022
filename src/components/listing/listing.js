import axios from "axios";
import React, { Component } from "react";
import ListingDisplay from "./listingDisplay";
import Header from '../../Header'

const catUrl = "https://flipkart-api-1.herokuapp.com/listing?category_id="

class Listing extends Component{

    constructor(){
        super()

        this.state={
            products: ''
        }
    }
    render(){
        return(
            <>
            <Header/>
          <div className="row">
          <div class="filter">
        <h4>Sort By Price</h4>

        <hr/>

        <input type="radio" name="" id="" class="checkbox"/>
        <p> Price low to high </p>

        <input type="radio" name="" id="" class="checkbox"/>
        <p> price high to low </p>

        <hr/>
        <h4>sort by reviews</h4>
        <hr/>

        <input type="checkbox" name="" id="" class="checkbox"/>
        <p> 5.0 </p>

        <input type="checkbox" name="" id="" class="checkbox"/>
        <p> 4.0 </p>

        <input type="checkbox" name="" id="" class="checkbox"/>
        <p> 3.0  </p>

        <input type="checkbox" name="" id="" class="checkbox"/>
        <p> 2.0 </p>

        <input type="checkbox" name="" id="" class="checkbox"/>
        <p> 1.0 </p>
     </div>

     <ListingDisplay listData={this.state.products}/>
            </div>
        
            </>
        )
    }

    componentDidMount(){
        let catId = this.props.match.params.id ? this.props.match.params.id:1
        sessionStorage.setItem('catId',catId)
        axios.get(`${catUrl} ${catId}`)
        .then((res) => {this.setState({products:res.data})})
    }
}

export default Listing