import React from "react";
import transfer from '../Assets/transfer.svg';
import shoppingCart from '../Assets/shopping-cart.svg';
import "./header.scss"

class Header extends React.Component {
    render() { 
        return ( 
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col p-0">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="#">Tablemate</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" title="Transfer" href="#"><img height="20" src={transfer} alt="Tablemate POS" /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" title="Transfer" href="#"><img height="20" src={transfer} alt="Tablemate POS" /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" title="Transfer" href="#"><img height="20" src={transfer} alt="Tablemate POS" /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" title="Transfer" href="#"><img height="20" src={shoppingCart} alt="Tablemate POS" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default Header;