import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Route,
	Switch,
	BrowserRouter,
	Link
} from 'react-router-dom';

class Footer extends Component {
	constructor() {
		super();

		this.generateFooter = this.generateFooter.bind(this);
		this.handleNumber = this.handleNumber.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleNumber(e) {
		var jumpTo = e.target.value;
		this.setState({ jumpTo: jumpTo });
	}

	handleSubmit(pageNumber) {
		if (pageNumber >= 0 && pageNumber <= this.props.totalPage) {
			this.props.handlePageNumber(parseInt(pageNumber) - 1, `${this.props.activePage}PageIndex`, this.props.activePage);
		}
	}

	generateFooter(current, total) {
		var listElement = (i) => {
			return (
				<li className={i === current ? "active" : ""}>
					<a href="#dest" onClick={() => this.props.handlePageNumber(i, `${this.props.activePage}PageIndex`, this.props.activePage)}>
						{i + 1}
					</a>
				</li>
			)
		};
		var previousArrow = (current) => {
			return (
				<li>
					<a
						href="#dest"
						aria-label="Previous"
						onClick={() => this.props.handlePageNumber(current - 1 >= 0 ? current - 1 : 0, `${this.props.activePage}PageIndex`, this.props.activePage)}
					>
					<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
			)
		};

		var nextArrow = (current) => {
			return (
				<li>
					<a
						href="#dest"
						aria-label="Next"
						onClick={() => this.props.handlePageNumber(current + 1 >= total ? total - 1 : current + 1, `${this.props.activePage}PageIndex`, this.props.activePage)}
					>
					<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			)
		};

		if (total <= 5) {
			var output = [];
			for (var i = 0; i < total; i++) {
				output.push(listElement(i));
			};
			return (
				<ul className="pagination">
					{previousArrow(current)}
					{output}
					{nextArrow(current)}
				</ul>
			)
		}
		else if (total > 5) {
			var left = current, right = total - current;
			var outputLeft = [], outputRight = [];
			if (left < 5) {
				for (var i = 0; i < current; i++) {
					outputLeft.push(listElement(i));
				};
			}
			if (left >= 5) {
				for (var i = current - 2; i < current; i++) {
					outputLeft.push(listElement(i));
				};
				outputLeft.unshift(
					listElement(0),
					<li><a>...</a></li>);
			}
			if (right < 5) {
				for (var i = current; i < total; i++) {
					outputRight.push(listElement(i));
				};
			}
			if (right >= 5) {
				for (var i = current; i < current + 2; i++) {
					outputRight.push(listElement(i));
				};
				outputRight.push(<li><a>...</a></li>,
					listElement(total - 1));
			}
			return (
				<ul className="pagination">
					{previousArrow(current)}
					{outputLeft}
					{outputRight}
					{nextArrow(current)}
				</ul>
			)
		}
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-lg-4"/>
					
					<div className="col-lg-4 text-center">
						<div className="input-group">
							<input
								type="number"
								className="form-control"
								placeholder="Jump to"
								onChange={this.handleNumber}
							/>
							
							<span className="input-group-btn">
								<button
									className="btn btn-default"
									type="button"
									onClick={() => this.handleSubmit(this.state.jumpTo)}
								>
									Go
								</button>
							</span>
						</div>
					</div>

					<div className="col-lg-4"/>
				</div>

				<div className="row text-center">
					<nav aria-label="Page navigation">
						{this.generateFooter(this.props.pageIndex, this.props.totalPage)}
					</nav>
				</div>
				
				<div style={{ height: 100 }} />
			</div>
		)
	}
};

export default Footer;