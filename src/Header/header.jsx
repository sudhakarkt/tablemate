import React, { Component } from 'react';
import logo from '../Assets/logo.png';
// import table from '../Assets/table.svg';
// import transfer from '../Assets/transfer.svg';
// import menu from '../Assets/menu.svg';
// import shoppingCart from '../Assets/shopping-cart.svg';
import "./header.scss";
import { Link } from 'react-router-dom';

class Header extends Component {
	render() { 
		return ( 
			<header>
				<div className="container-fluid">
					<div className="row">
						<div className="col p-0">
							<nav className="navbar navbar-expand-lg">
								<Link className="navbar-brand" title="" to='./'>
									<img height="45" src={logo} alt="Tablemate POS" />
								</Link>
								<div className="collapse navbar-collapse" id="navbarSupportedContent">
									<ul className="navbar-nav ml-auto">
										<li className="nav-item">
											<Link className="nav-link" title="Transfer" to='./'>Table</Link>
										</li>
										<li className="nav-item active">
											<Link className="nav-link" title="Menu" to='./'>Switch</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" title="Transfer" to='./'>OTP</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" title="Transfer" to='./'>Transfer</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" title="Transfer" to='./'>KOT</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" title="Transfer" to='./'>Bill</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" title="Transfer" to='./'>Orders</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" title="Transfer" to='./'>Transfer</Link>
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