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

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"), (err) => {
		if (err) {
			console.log(err);
			res.status(500).send(err);
		}
	});
});

app.post("/checkout", (req, res) => {
	validateSession(req, res, (err, validated, payload) => {
		if (err) {
			console.log('Checkout Error', err);
			res.status(500).send(err);
		} else if (!validated) {
			res.status(500).send('Whoops! You can only place an order once. Check your email for confirmation details!');
		} else if (validated) {
			const response = { ...req.body, Session: req.session_id };
			// console.log("Full Response w Session", response);

			dbSave(response, (err, data) => {
				if (err) {
					console.log("Save Error", err);
					res.status(500).send(err);
				} else {
					res.sendStatus(res.statusCode);
				}
			});
		}
	});
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
