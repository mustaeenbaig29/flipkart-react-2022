import React, { Component } from "react";
import QuickDisplay from "./QuickDisplay";
import './quickSearch.css'

const url = "https://flipkart-api-1.herokuapp.com/category"

class QuickSearch extends Component{

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
        <h2>Categories</h2>
        <hr/>
        </div>
                
            
            
            <QuickDisplay renderdata={this.state.category_type}/>
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

export default QuickSearch