import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./tableViewInner.scss";

class TableViewInner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-md-2 tableName">
                    <Link to='./menu' className="tableNameInner">
                        <div className="row tableHeader">
                            <div className="col-md-4">
                                <div className="tableInnerName">F10</div>
                            </div>
                            <div className="col-md-8">
                                <div className="tableValue">Sudhakar KT</div>
                            </div>
                        </div>
                        <div className="row tableNameValue">
                            <div className="col-md-7">
                                <Link to='./' className="guestName">Karthick V</Link>
                            </div>
                            <div className="col-md-5">
                                <Link to='./' className="paxName">KT</Link>
                            </div>
                        </div>
                        <div className="row m-0 tableMenu">
                            <div className="col-md-2 p-0 runningOrder"><button type="btn" className="btn btn-primary">RO</button></div>
                            <div className="col-md-2 p-0 tableOrder"><button type="btn" className="btn btn-primary">O</button></div>
                            <div className="col-md-2 p-0 tableNC"><button type="btn" className="btn btn-primary">NC</button></div>
                            <div className="col-md-2 p-0 tableBill"><button type="btn" className="btn btn-primary">Bill</button></div>
                        </div>
                    </Link>
                </div>
            </React.Fragment>
         );
    }
}
 
export default TableViewInner;