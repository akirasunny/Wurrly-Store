import React, { Component } from "react";

import Item from "./Items/Item";
import Footer from "./children/Footer";

class Items extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.handlePage("items");
	}

	render() {
		var items = this.props.chopArray(this.props.items, 3);
		return (
			<div>
				{items.map((row, i) => {
					return (
						<div className="row" key={i}>
						{row.map((item, j) => {
							return (
								<Item
									data={item}
									key={j}
								/>
							)
						})}
						</div>
					)
				})}

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