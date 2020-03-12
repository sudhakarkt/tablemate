import React, { Component } from 'react';
import FloorSelection from "./FloorSelection/floorSelection";
import TableView from "./TableView/tableView";
import "./dineIn.scss"

class DineIn extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="row dineInContainer">
                    <FloorSelection />
                    <TableView />
                </div>
            </React.Fragment>
         ); 
    }
}

export default DineIn;