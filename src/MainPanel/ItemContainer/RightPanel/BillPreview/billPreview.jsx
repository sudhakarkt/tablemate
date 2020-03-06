import React, { Component } from 'react';
import Delete from "../../../../Assets/delete.svg"
import "./billPreview.scss";

class BillPreview  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="billPreviewContainer">
                    <div className="billPreviewBlock">
                        <div className="billPreviewHeader">
                            <h1 className="billPreviewTitle">Bill Preview</h1>
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
                        <div className="billPreviewTableContainer">
                            <table width="100%" className="billPreviewTable">
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
                                        <td>1</td>
                                        <td>960.70</td>
                                        <td>960.70</td>
                                        <td><span title="Remove" className="addItem"><img width="15" src={ Delete } alt="Tablemate POS" /></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="generateBillContainer">
                            <button type="button" className="btn btn-primary">Generate Bill</button>
                            <button type="button" className="btn btn-primary">Split Bill</button>
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default BillPreview;