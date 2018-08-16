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
							{this.props.pages.map((page, i) => {
								return (
									<li
										className={page.toLowerCase() === this.props.activePage ? "active" : ""}
										key={i}
										onClick={() => this.props.handlePage(page.toLowerCase())}
									>
										<Link to={`/${page.toLowerCase()}`}>
											{page}
										</Link>
									</li>
								)
							})}
						</ul>
				    </div>
				  </div>
			</nav>
		)
	}
};

export default Header;