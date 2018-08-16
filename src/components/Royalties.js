import React, { Component } from "react";
import { connect } from "react-redux";

import Summary from "./Royalties/Summary";
import Footer from "./children/Footer";

import royaltiesReducer from "../../redux/reducer/royaltiesReducer";

class Royalties extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.handlePage("royalties");
		this.props.dispatch(royaltiesReducer.getSummary());
	}
	
	render() {
		console.log(this.props);
		return (
			<div>
				{Object.keys(this.props.summary).length !== 0 &&
					<Summary
						summary={this.props.summary}
					/>
				}

				<Footer
					pageIndex={this.props.royaltiesPageIndex}
					totalPage={this.props.pageOfRoyalties}
					activePage={this.props.activePage}

					handlePageNumber={this.props.handlePageNumber}
				/>
			</div>
		)
	}
};

const mapStateToProps = (state) => {
	var indexProps = state.indexSwitch;
	var royaltiesProps = state.royaltiesSwitch;
	return {
		...indexProps,
		...royaltiesProps
	};
};

export default connect(mapStateToProps)(Royalties);