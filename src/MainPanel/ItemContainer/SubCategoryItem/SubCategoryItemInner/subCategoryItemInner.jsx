import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./subCategoryItemInner.scss";

class SubCategoryItemInner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-md-2 subCategoryName">
                    <div className="subCategoryInner">
                        <div className="subCategoryValue">
                            <p>Beer</p>
                            <p className="valuePrice">&#x20b9; 1500.00</p>
                        </div>
                        <div className="row m-0 subCategoryMenu">
                            <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">NC</Link></div>
                            <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                            <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default SubCategoryItemInner;