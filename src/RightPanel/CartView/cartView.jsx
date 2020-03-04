import React, { Component } from 'react';
import "./cartView.scss";

class CartView extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <React.Fragment>
                <div className="cartviewContainer">
                    <div className="row">
                        <div className="col">
                            <h1>Cart View Rendered...</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CartView;