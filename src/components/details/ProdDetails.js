import React,{Component} from 'react';
import axios from 'axios';
import './details.css';
import {Link} from 'react-router-dom';
import CartDisplay from './CartDisplay';
import Header from '../../Header'

const url = "https://flipkart-api-1.herokuapp.com/details"
const menuUrl = "https://flipkart-api-1.herokuapp.com/cart?unique_id=1"

class ProdDetails extends Component {

    constructor(){
        super()

        this.state={
            details:'',
            cartList:'',
            userItem:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1
        }
    }

    addToCart = (data) => {
        this.setState({userItem:data})
    }

    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.product_name}`)
    }

    render(){
        //let details = this.state.details
        let {details} = this.state
        console.log(this.state.userItem)
        return(
            <>
            <Header/>
            
<div class="product_images">
   <img src= {details.product_thumb} alt=""/>
</div>


<div class="product_description">
  <div class="pro_descp">
   <h3> {this.state.details.product_name} </h3>
   <p class="rate"> {this.state.details.rating}   </p>
   <h3>₹ {this.state.details.cost} </h3>

   <div class="prod_button">
       <button class="add_to_cart" onClick={this.proceed}> ADD TO CART </button>
       <button class="buy_now"><a href="">BUY NOW</a></button>
   </div>
  </div>

  <div class="offer">
   <h4>Available offers</h4>
   <hr/>
   <p>Bank Offer₹4000 Instant Discount on HDFC Credit Card, Credit and Debit EMI TransactionsT&C</p>
   <p>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p>
   <p>Bank OfferFlat ₹100 Off* On 1st Transaction through Flipkart Pay LaterT&C
   </p>
   <p>Special PriceGet extra ₹5901 off (price inclusive of discount)T&C</p>
  </div>
  <hr/>
  <div class="highlights">
   <h4>Highlights</h4>
   <hr/>
   <p> {this.state.details.specs1} </p>
   <p> {this.state.details.specs2} </p>
   <p> {this.state.details.specs3} </p>
   <p>{this.state.details.specs4}</p>
  </div>
  <hr/>

  <div class="specification">
   <h4>In The Box</h4>
   <hr/>
   <p> {this.state.details.Box1} </p>
   <p> {this.state.details.Box2} </p>
   <p> {this.state.details.Box3} </p>
   <p> {this.state.details.Box4} </p>
  </div>
</div>


<div class="mobile_prod_images">
   <img src="categories/mobiles_286x180.jpg" alt=""/>

   <div class="mobile_prod_button">
       <button class="add_to_cart"> ADD TO CART </button>
       <button class="buy_now"> <a href="">BUY NOW</a> </button>
   </div>
</div>


<div class="mob_prod_descp">
   <h3>APPLE iPhone 13 (Blue, 128 GB)</h3>
   <p class="rate"> 4.6   </p>
   <h3>₹ 73,789</h3>
   

   <h4>Available offers</h4>
   
   <p>Bank Offer₹4000 Instant Discount on HDFC Credit Card, Credit and Debit EMI TransactionsT&C</p>
   <p>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p>
   <p>Bank OfferFlat ₹100 Off* On 1st Transaction through Flipkart Pay LaterT&C
   </p>
   <p>Special PriceGet extra ₹5901 off (price inclusive of discount)T&C</p>

   <div class="mob_highlights">
       <h4>Highlights</h4>
       <p>128 GB ROM</p>
       <p>15.49 cm (6.1 inch) Super Retina XDR Display</p>
       <p>12MP + 12MP | 12MP Front Camera</p>
       <p>A15 Bionic Chip Processor</p>
      </div>
      <hr/>

      <div class="mob_specification">
       <h4>In The Box</h4>
       
       <p> iPhone, USB-C to Lightning Cable, Documentation</p>
       <p>Model Number: MLPK3HN/A</p>
       <p>Model Name: iphone 13</p>
       <p>Color: Blue</p>
       <p>SIM Type: Dual Sim</p>
      </div>
   </div>

   <div className="col-md-12">
                    <CartDisplay menudata={this.state.menuList}
                    finalOrder={(data) => {this.addToCart(data)}}/>
                </div>
            </>
        )
    }

    //calling api with async await 
    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${restId}`)
        console.log(">>>response.data[0].restaurant_id",response.data[0].restaurant_id)
        let menuResponse = await axios.get(`${menuUrl}/${response.data[0].restaurant_id}`)
        this.setState({details:response.data[0],menuList:menuResponse.data})
    }
}

export default ProdDetails;