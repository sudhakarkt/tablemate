import React, { Component } from 'react';
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
                    <div className="row">
                        <div className="col">
                            <h1>Bill Preview Rendered...</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default BillPreview;