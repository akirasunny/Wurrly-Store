// Dependencies

const express = require("express");
const body = require("body-parser");

// Express

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('dist'));
app.use(body.urlencoded({ extended: true }));
app.use(body.json());

app.listen(port, () => {
	console.log("Listening to port " + port + ". Please go to localhost:8080 for everything.");
});