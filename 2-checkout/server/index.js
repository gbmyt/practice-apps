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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// Look up difference between doing this and app.get('/account')
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"), (err) => {
		if (err) {
			console.log(err);
			res.status(500).send(err);
		}
	});
});

// app.get('/account', (req, res) => {
// 	res.status(200).send('Got Account')
// });

app.post('/account', (req, res) => {
	const { body } = req.body;
	console.log('GOT Acct Body', req.body);
	res.status(200).send(body);
});

app.get('/shipping', (req, res) => {
	res.status(200).send('Got Shipping')
});

app.post('/shipping', (req, res) => {
	const { body } = req.body;
	console.log('GOT Shipping Body', req.body);
	res.status(200).send(body);
});

app.get('/payment', (req, res) => {
	res.status(200).send('Got Payment')
});

app.post('/payment', (req, res) => {
	const { body } = req.body;
	console.log('GOT Payment Body', req.body);
	res.status(200).send(body);
});

app.get('/confirmation', (req, res) => {
res.status(200).send('Got Conf')
});

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
