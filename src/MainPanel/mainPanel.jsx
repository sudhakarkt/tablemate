import React, { Component } from 'react';
import DineIn from "./DineIn/dineIn"; 
import ItemContainer from "./ItemContainer/itemContainer"; 

class MainPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="MainPanel">
                    <DineIn />
                    <ItemContainer />
                </div>
            </React.Fragment>
         );
    }
}
 
export default MainPanel;