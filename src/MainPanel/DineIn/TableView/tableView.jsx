import React, { Component } from 'react';
import TableViewInner from "./TableViewInner/tableViewInner";
import "./tableView.scss";

class TableView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-md-10 tableviewContainer">
                    <div className="row">
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                        <TableViewInner />
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default TableView;