import React, { Component } from 'react';
import "./floorSelection.scss";

class FloorSelection extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <React.Fragment>
                <div className="floorSelectionContainer">
                    <ul>
                        <li><a href="javascript:void(0);">Ground</a></li> 
                        <li><a href="javascript:void(0);">Floor 1</a></li>
                        <li><a href="javascript:void(0);">Floor 2</a></li>
                        <li><a href="javascript:void(0);">Floor 3</a></li>
                        <li><a href="javascript:void(0);">Floor 4</a></li>
                        <li><a href="javascript:void(0);">Floor 5</a></li>
                        <li><a href="javascript:void(0);">Floor 1</a></li>
                    </ul>
                </div>
            </React.Fragment>
         );
    }
}

export default FloorSelection;