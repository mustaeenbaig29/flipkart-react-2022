import React from "react";
import { Link } from "react-router-dom";


const ProductDisplay = (props) => {

    const renderMenu = ({ renderdata }) => {
        if(renderdata) {
            return renderdata.map((item) => {
                return (
                    <>
                   <Link to= {`/listing/${item.category_id}`}>
                   <div class="product_cards">
                        <div class="image_prod">
                            <img src= {item.product_image} alt="product_images"/>
                        </div>
                        <div class="prod_txt1">
                            <div class="prod_txt_heading">
                                <h4>{item.product_thumb_name}</h4>
                                <h4> {item.Offer} </h4>
                                <h4> {item.content} </h4>
                            </div>
                        </div>
                        </div>
                        
                   </Link>
                    </>
                )
            })
        }
    }
    return (
        <>
            <div id="mainContainer">
                {renderMenu(props)}
            </div>
        </>
    )
}

export default ProductDisplay

