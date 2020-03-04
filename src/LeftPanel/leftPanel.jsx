import React, { Component } from 'react';
import DineIn from "./DineIn/dineIn"; 
import ItemContainer from "./ItemContainer/itemContainer"; 

class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="leftPanel">
                    <DineIn />
                    <ItemContainer />
                </div>
            </React.Fragment>
         );
    }
}
 
export default LeftPanel;