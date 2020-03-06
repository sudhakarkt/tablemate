import React, { Component } from 'react';
import Add from "../../../../Assets/add.svg"
import Bill from "../../../../Assets/bill-invoice-logo.png"
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
                                    <p className="invoiceLogo"><img src={Bill} alt="Tablemate POS" /></p>
                                    <div className="row">
                                        <div className="col-md-7 pr-0">
                                            <p className="cartTax">Total (Exclusive of Tax) : <span>960.18</span></p>
                                            <p className="cartTax">Total (Exclusive of Tax) : <span>1100.08</span></p>
                                        </div>
                                        <div className="col-md-5 pl-0">
                                            <p className="cartQuantity">Total Item(s) : <span>1</span></p>
                                            <p className="cartQuantity">Total Quantity : <span>1</span></p>
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
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>
                                            <tr>
                                                <td>2+1 Heineken</td>
                                                <td><input type="text" className="itemCount" value="1" /></td>
                                                <td>960.70</td>
                                                <td>960.70</td>
                                                <td><span title="Add" className="addItem"><img width="15" src={Add} alt="Tablemate POS" /></span></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div className="currentOrderContainer">
                                    <p className="currentOrders">Currnet Order(s) : &#x20b9; 52324.25</p>
                                    <button type="button" className="btn btn-primary">Order</button>
                                </div>
                                
                            </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CartView;