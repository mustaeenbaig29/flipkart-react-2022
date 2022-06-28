import React, { Component } from "react";
import ProductDisplay from './ProductDisplay'
import './quickSearch.css'

const url = "https://flipkart-api-1.herokuapp.com/product"

class Product extends Component{

    constructor(){
        super()

        this.state={
            category_type : ''
        }
    }
    render(){
        return(
            <>
            
              <div class="electronics">
        <h2>  Products </h2>
        <hr/>
        </div>
                
            
            
            <ProductDisplay renderdata={this.state.category_type}/>
            </> 
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({category_type:data})
        })
    }
}

export default Product