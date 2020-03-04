import React, { Component } from 'react';
import FloorSelection from "./FloorSelection/floorSelection";
import TableView from "./TableView/tableView";
import "./dineIn.scss"

class DineIn extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="dineInContainer">
                    <div className="row">
                        <div className="col-md-2 pl-0">
                            <FloorSelection />
                        </div>
                        <div className="col-md-10 pl-0">
                            <TableView />
                        </div>
                    </div>
                </div>
            </React.Fragment>
         ); 
    }
}
 
export default DineIn;