import React, { Component } from "react";

class Summary extends Component {
	constructor() {
		super ();
	}

	render() {
		var summary = this.props.summary;
		return (
			<div className="row">
				<div className="col-sm-6">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h4>Accounting Basis</h4>
						</div>
						
						<div className="panel-body">
							<table className="table">
								{Object.keys(summary.accountingBasis).map((property, i) => {
									return (
										<tr key={i}>
											<td>{accountingBasisKeys[property]}</td>
											<td>{summary.accountingBasis[property]}</td>
										</tr>
									)
								})}
							</table>
						</div>
					</div>
				</div>

				<div className="col-sm-6">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h4>Organization Statistics</h4>
						</div>
						
						<div className="panel-body">
							<table className="table">
								{Object.keys(summary.organizationStatistics).map((property, i) => {
									return (
										<tr key={i}>
											<td>{organizationStatKeys[property]}</td>
											<td>{summary.organizationStatistics[property]}</td>
										</tr>
									)
								})}
							</table>
						</div>

						<div className="panel-heading">
							<h4>Royalties Summary</h4>
						</div>

						<div className="panel-body">
							<table className="table">
								{Object.keys(summary.royaltiesSummary).map((property, i) => {
									return (
										<tr key={i}>
											<td>{royaltiesSummaryKeys[property]}</td>
											<td>{summary.royaltiesSummary[property]}</td>
										</tr>
									)
								})}
							</table>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default Summary;

const accountingBasisKeys = {
	downloadRevenue: "Download Revenue",
	downloadShare: "Download Share",
	perDownloadRevenue: "Revenue / Download",
	perStreamRevenue: "Revenue / Stream",
	streamRevenue: "Stream Revenue",
	streamShare: "Stream Share",
	totalDownloadRevenue: "Total Download Revenue",
	totalDownloads: "Total Downloads",
	totalStreamRevenue: "Total Stream Revenue",
	totalStreams: "Total Streams"
};

const organizationStatKeys = {
	advancePaid: "Advance Paid",
	downloadEarnings: "Download Earnings",
	songCount: "Song Count",
	streamEarnings: "Stream Earnings",
	totalEarnings: "Total Earnings"
};

const royaltiesSummaryKeys = {
	cashPayout: "Cash Payout",
	totalEarnings: "Total Earnings",
	unrecoupedBalanceEnd: "Unrecouped Balance End",
	unrecoupedBalanceStart: "Unrecouped Balance Start"
};