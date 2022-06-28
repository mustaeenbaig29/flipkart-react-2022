import React from 'react';
import {Link} from 'react-router-dom'
import './listing.css'

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){   
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                        <>
      
        <div class="product">
            <div class="images">
           
              <img src= {item.product_thumb} alt=""/>
              
            </div>
      
            <div class="product_details">
            <Link to={`/details?prodId=${item.product_id}`} className='link'>
                <h4> {item.product_name} </h4>
                </Link>
                <p class="rate"> {item.rating}   </p>

                <div class="specs">
                   <h6> {item.specs1} </h6>
                   <h6> {item.specs2} </h6>
                   <h6> {item.specs3} </h6>
                   <h6> {item.specs4} </h6>
                   <h6> {item.specs5} </h6>
                </div>

                <div class="price">
                <h3>₹ {item.cost}</h3>
                <h6>Free delivery by tommorow <br/> Upto ₹16,000 off on Exchange <br/> Bank offer</h6>
                </div>
            </div>            
        </div>
                        </>
                    )
                })
            }else{
                return(
                    <div>
                        <h2>No Data For Filter Applied</h2>
                    </div>
                )
            }
        }else{
            return(
                <div>
                    <img src="/images/loader.gif" alt="loader"/>
                    <h2>Loading....</h2>
                </div>
            )
        }
    }


    return(
        <div class="products">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay