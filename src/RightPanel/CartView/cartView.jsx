import React, { Component } from 'react';
import "./cartView.scss";

class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="cartviewContainer">
                    <div className="cartBlock">
                                <div className="cartHeader">
                                    <p>ORDER</p>
                                    <div className="row">
                                        <div className="col-md-7 pr-0">
                                            <p className="cartTax">Total (Exclusive of Tax) : <span>1440.18</span></p>
                                            <p className="cartTax">Total (Exclusive of Tax) : <span>1440.18</span></p>
                                        </div>
                                        <div className="col-md-5 pl-0">
                                            <p className="cartQuantity">Total Item(s) : <span>2</span></p>
                                            <p className="cartQuantity">Total Quantity : <span>2</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cartTableContainer">
                                    <table width="100%" className="cartTable">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Qty</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>Qty</td>
                                                <td>Price</td>
                                                <td>Total</td>
                                                <td>Add</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CartView;