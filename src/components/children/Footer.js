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
	}

	generateFooter(current, total) {
		var listElement = (i) => {
			return (
				<li className={i === current ? "active" : ""}>
					<a onClick={() => this.props.handlePageNumber(i, `${this.props.activePage}PageIndex`, this.props.activePage)}>
						{i + 1}
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
					<li>
						<a href="#" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
						</a>
					</li>
					{output}
					<li>
						<a href="#" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
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
					<li><a href="#">...</a></li>);
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
				outputRight.push(<li><a href="#">...</a></li>,
					listElement(total - 1));
			}
			return (
				<ul className="pagination">
					<li>
						<a href="#" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
						</a>
					</li>
					{outputLeft}
					{outputRight}
					<li>
						<a href="#" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				</ul>
			)
		}
	}

	render() {
		return (
			<div className="row text-center">
				<nav aria-label="Page navigation">
					{this.generateFooter(this.props.pageIndex, this.props.totalPage)}
				</nav>
			</div>
		)
	}
};

export default Footer;