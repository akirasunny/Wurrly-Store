// Dependencies

const express = require("express");
const body = require("body-parser");

// Database init

const Royalties = require("./database/Royalties");
const Songs = require("./database/Songs");
const Records = Royalties.records;
const Items = Songs.items;
const pageSize = 15;

// Express

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('dist'));
app.use(body.urlencoded({ extended: true }));
app.use(body.json());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/dist/index.html");
});

app.get("/items", (req, res) => {
	res.sendFile(__dirname + "/dist/index.html");
});

app.get("/royalties", (req, res) => {
	res.sendFile(__dirname + "/dist/index.html");
});

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/dist/index.html");
});

app.get("/api/initialization", (req, res) => {
	var pageOfItems = Math.ceil(Items.length / pageSize);
	var pageOfRoyalties = Math.ceil(Records.length / pageSize);
	var items = Items.slice(0, pageSize);
	var royalties = Records.slice(0, pageSize);
	
	var properties = Object.keys(Royalties).slice(4);
	var about = {};
	for (var property of properties) {
		about[property] = Royalties[property];
	};
	
	var resObj = {
		pageOfItems: pageOfItems,
		pageOfRoyalties: pageOfRoyalties,
		items: items,
		royalties: royalties,
		about: about
	};
	res.send(resObj);
});

app.get("/api/get-summary", (req, res) => {
	var summary = {
		accountingBasis: Royalties.accountingBasis,
		organizationStatistics: Royalties.organizationStatistics,
		royaltiesSummary: Royalties.royaltiesSummary
	};
	res.send(summary);
});

app.get("/items/:page", (req, res) => {
	var pageNumber = parseInt(req.params.page);
	res.send(Items.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize));
});

app.get("/royalties/:page", (req, res) => {
	var pageNumber = parseInt(req.params.page);
	res.send(Records.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize));
});

app.get("*", (req, res) => {
	res.redirect("/");
});

app.listen(port, () => {
	console.log(`Listening to port ${port}. \nPlease go to localhost:8080 for everything.`);
});