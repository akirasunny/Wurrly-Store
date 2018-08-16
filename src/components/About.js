import React, { Component } from "react";

class About extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.handlePage("about");
	}

	render() {
		console.log(this.props);
		var organization = this.props.about.organization;
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3>About</h3>
				</div>

				<div className="panel-body">
					<ul>
						{this.props.about && Object.keys(this.props.about).map((property, i) => {
							if (property !== "organization") {
								return (
									<li key={i}>
										<strong>{`${aboutKeys[property]}: `}</strong>
										{this.props.about[property]}
									</li>
								)
							}
						})}
						<li>
							<strong>Organization: </strong>
							<ul>
								{organization && Object.keys(organization).map((property, i) => {
									return (
										<li key={i}>
											<strong>{`${aboutKeys[property]}: `}</strong>
											{organization[property]}
										</li>
									)
								})}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		)
	}
};

export default About;

const aboutKeys = {
	address: "Address",
	app: "App",
	email: "Email",
	name: "Name",
	organizationId: "Organization ID",
	quarter: "Quarter",
	title: "Title",
	year: "Year",
	blanketCount: "Blanket Count",
	createdAt: "Created At",
	id: "ID",
	songCount: "Song COunt",
	type: "Type",
	updatedAt: "Updated At"
};