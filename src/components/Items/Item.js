import React, { Component } from "react";

class Item extends Component {
	constructor() {
		super();
	}

	render() {
		var availability = this.props.data.available;
		var buttonText = availability ? `Wurrly Count: ${this.props.data.wurrlyCount}` : "Unavailable";
		return (
			<div className="col-sm-6 col-md-4">
				<div className="thumbnail" id={this.props.data.id}>
					<img src={`https://picsum.photos/500/500?image=${parseInt(this.props.data.id / 10)}`} />
					<div className="caption">
						<h3>{this.props.data.title}</h3>
						<p><strong>Artist:</strong> {this.props.data.artist.name}</p>
						<p>
							<a className={availability ? "btn btn-info" : "btn btn-disabled"} role="button">
								{buttonText}
							</a>
						</p>
					</div>
				</div>
			</div>
		)
	}
};

export default Item;