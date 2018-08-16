import React, { Component } from "react";

class Record extends Component {
	constructor() {
		super();

		this.generateTable = this.generateTable.bind(this);
	}

	generateTable(rows) {
		if (rows.length === 0) {
			return (
				<div />
			)
		}
		else {
			return (
				<table className="table">
					<tr>
						{Object.keys(rows[0]).map((property, i) => {
							return (
								<th key={i}>{recordKeys[property]}</th>
							)
						})}
					</tr>
					{rows.map((row, j) => {
						return (
							<tr>
							{Object.keys(row).map((property, i) => {
								return (
									<td key={i}>{row[property]}</td>
								)
							})}
							</tr>
						)
					})}
				</table>
			)
		}
	}

	render() {
		var downloadRevenue = this.props.data.downloadRevenue;
		var streamRevenue = this.props.data.streamRevenue;
		downloadRevenue["section"] = "Download Revenue";
		streamRevenue["section"] = "Stream Revenue";
		return (
			<div className="thumbnail" id={this.props.data.id}>
				<div className="caption">
					<h3>{this.props.data.formattedTitle}</h3>
					<p>
						<strong>Writers: </strong>
						{this.props.data.writers}
					</p>
					
					<p>
						<strong>Song Revenue Share: </strong>
						{this.props.data.songRevenueShare}
					</p>
					
					<p>
						<strong>Cash Payout: </strong>
						{this.props.data.cashPayout}
					</p>


					{this.generateTable([downloadRevenue, streamRevenue])}

					{this.generateTable(this.props.data.rows)}
					
				</div>
			</div>
		)
	}
};

export default Record;

const recordKeys = {
	territory: "Territory",
	split: "Split",
	salesType: "Sales Type",
	units: "Units",
	totalRevenue: "Total Revenue",
	share: "Share",
	downloadRevenue: "Download Revenue",
	streamRevenue: "Stream Revenue",
	songRevenueShare: "Song Revenue Share",
	cashPayout: "Cash Payout",
	section: "Section"
};