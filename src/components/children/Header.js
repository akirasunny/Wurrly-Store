import React, { Component } from "react";
import {
	Link
} from 'react-router-dom';

class Header extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<nav className="navbar navbar-inverse">
				 <div className="container-fluid">
				 	<div className="navbar-header">
						<Link to="/" className="navbar-brand" href="#">Wurrly Store</Link>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li className="active">
								<Link to="/">Items</Link>
							</li>
				 			<li>
				 				<Link to="/royalties">Royalties</Link>
				 			</li>

				    		<li className="dropdown">
				    		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
				    		<ul className="dropdown-menu">
								<li><a href="#">Action</a></li>
								<li><a href="#">Another action</a></li>
								<li><a href="#">Something else here</a></li>
								<li role="separator" className="divider"></li>
								<li><a href="#">Separated link</a></li>
								<li role="separator" className="divider"></li>
								<li><a href="#">One more separated link</a></li>
							</ul>
							</li>
						</ul>
				    </div>
				  </div>
			</nav>
		)
	}
};

export default Header;