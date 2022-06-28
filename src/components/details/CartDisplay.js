import React,{Component} from 'react';

class CartDisplay extends Component {

    orderId= [];

    placeOrder = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        if(this.orderId.indexOf(id) > -1){
            this.orderId.splice(this.orderId.indexOf(id),1)
        }
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }

    renderMenu = ({menudata}) => {
        if(menudata){
            return menudata.map((item) => {
                return(
                    <>
                    <div key={item._id}>
                        <div className="col-md-7">
                            <b>{item.menu_id}</b> &nbsp;
                            <img src={item.product_thumb} style={{width:80,height:80}}/>&nbsp;
                            {item.product_name}- Rs.{item.cost}
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success"
                            onClick={() => {this.placeOrder(item.menu_id)}}>
                                {/* <span className="glyphicon glyphicon-plus"/> */}
                                +
                            </button> &nbsp;
                            <button className="btn btn-danger"
                            onClick={() => {this.removeOrder(item.menu_id)}}>
                                {/* <span className="glyphicon glyphicon-minus"/> */}
                                -
                            </button>
                        </div>
                    </div>
                    <hr/>
                    </>
                )
            })
        }
    }

    render(){
        return(
            <div>
                <div className="col-md-11 bg-success ">
                    <h1>Item Added</h1>
                    Item Number {this.renderCart(this.orderId)} Added
                </div>
                <div className="col-md-12 bg-info">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }
}

export default CartDisplay;