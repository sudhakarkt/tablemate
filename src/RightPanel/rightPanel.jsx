import React, { Component } from 'react';
import CartView from "./CartView/cartView";
import BillPreview from "./BillPreview/billPreview";
import "./rightPanel.scss";

class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="rightPanel">
                    <CartView />
                    <BillPreview />
                </div>
            </React.Fragment>
         );
    }
}
 
export default RightPanel;