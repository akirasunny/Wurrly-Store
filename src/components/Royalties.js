import React, { Component } from "react";
import { connect } from "react-redux";

import Summary from "./Royalties/Summary";
import Record from "./Royalties/Record";
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
		// console.log(this.props);
		return (
			<div>
				{Object.keys(this.props.summary).length !== 0 &&
					<Summary
						summary={this.props.summary}
					/>
				}

				<div className="panel panel-default">
					<div className="panel-heading">
						<h3>Records</h3>
					</div>

					<div className="panel-body">
					{this.props.royalties.map((record, i) => {
						return (
							<Record
								data={record}
							/>
						)
					})}
					</div>
				</div>

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