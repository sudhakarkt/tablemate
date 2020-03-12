import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./floorSelection.scss";

class FloorSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col floorSelectionContainer">
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li><Link to='./menu'>Ground</Link></li> 
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Ground</Link></li> 
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Ground</Link></li> 
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Ground</Link></li> 
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                                <li><Link to='./menu'>Floor </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}

export default FloorSelection;