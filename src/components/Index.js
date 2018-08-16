import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Route,
	Switch,
	BrowserRouter,
	Link
} from 'react-router-dom';

import Header from "./children/Header";
import Footer from "./children/Footer";
import Items from "./Items";
import Royalties from "./Royalties";

import indexReducer from "../../redux/reducer/indexReducer";

class Index extends Component {
	constructor() {
		super();

		// this.handlePage = this.handlePage.bind(this);
		this.handlePageNumber = this.handlePageNumber.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(indexReducer.initialization());
	}

	handlePageNumber(pageNumber, section, routeName) {
		this.props.dispatch(indexReducer.handlePageNumber(pageNumber, section, routeName));
	}

	render() {
		console.log(this.props);
		return (
			<BrowserRouter>
				<Switch>
					<div>
						<Header />

						<div className="row">
							<div className="col-md-2" />
							
							<div className="col-md-8">
								<div className="jumbotron">
									<h1>Wurrly Store</h1>
								</div>

								<div>
									<Route
										exact
										path="/"
										render={() =>
											<Items
												activePage={this.props.activePage}
												itemsPageIndex={this.props.itemsPageIndex}
												pageOfItems={this.props.pageOfItems}

												handlePageNumber={this.handlePageNumber}
											/>
										}
									/>
									<Route
										path="/royalties"
										render={() =>
											<Royalties />
										}
									/>
								</div>
							
							</div>
							
							<div className="col-md-2" />
						</div>
					</div>
				</Switch>
			</BrowserRouter>
		)
	}
};

const mapStateToProps = (state) => {
	var indexProps = state.indexSwitch;
	return {
		...indexProps
	};
};

export default connect(mapStateToProps)(Index);