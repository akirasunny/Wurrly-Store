import React, { Component } from "react";

import Footer from "./children/Footer";

class Items extends Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div>
				<h1>Items</h1>
				<Footer
					pageIndex={this.props.itemsPageIndex}
					totalPage={this.props.pageOfItems}
					activePage={this.props.activePage}

					handlePageNumber={this.props.handlePageNumber}
				/>
			</div>
		)
	}
};

export default Items;