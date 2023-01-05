require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");
const dbSave = require("./db").dbSave;

const validateSession = require("../utils/validateSession");

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// Not sure what I was using this for
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"), (err) => {
// 		if (err) {
// 			console.log(err);
// 			res.status(500).send(err);
// 		}
// 	});
// });

app.post("/checkout", (req, res) => {
	console.log('Validating Your Session...');

	validateSession(req, res, (err, validated) => {
		if (err) {
			console.log('Session Validation Error', err);
			res.status(500).send(err);
		} else if (validated) {
			const response = { ...req.body, Session: req.session_id };
			// console.log("Full Response w Session", response);

			dbSave(response, (err) => {
				if (err) {
					console.log("Save Error", err.sqlMessage);
					res.status(500).send(err);
				} else {
					console.log('Your Order Has Been Placed!');
					res.sendStatus(res.statusCode);
				}
			});
		} else {
			res.status(500).send('Invalid Session');
		}
	});
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
