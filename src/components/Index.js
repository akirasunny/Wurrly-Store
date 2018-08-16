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

	handlePage(activePage) {
		this.props.dispatch(indexReducer.handlePage(activePage));
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

									<div className="btn-group btn-group-justified" role="group">
										{this.props.pages.map((page, i) => {
											return (
												<div className="btn-group" role="group">
													<Link to={`/${page.toLowerCase()}`}>
														<button
															type="button"
															onClick={() => this.handlePage(page.toLowerCase())}
															className={`btn btn-${page.toLowerCase() === this.props.activePage ? "info" : "default"}`}
														>
															{page}
														</button>
													</Link>
												</div>
											)
										})}
									</div>
								</div>

								<div>
									<Route
										exact
										path="/items"
										render={() =>
											<Items
												items={this.props.items}
												activePage={this.props.activePage}
												itemsPageIndex={this.props.itemsPageIndex}
												pageOfItems={this.props.pageOfItems}

												handlePageNumber={this.handlePageNumber}
												chopArray={chopArray}
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

const chopArray = (arr, chunkSize) => {
	var output = [];
	for (var i = 0; i < arr.length; i += chunkSize) {
		var temp = arr.slice(i, i + chunkSize);
		output.push(temp);
	};
	return output;
};

const mapStateToProps = (state) => {
	var indexProps = state.indexSwitch;
	return {
		...indexProps
	};
};

export default connect(mapStateToProps)(Index);