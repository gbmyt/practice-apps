require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");
const dbSave = require("./db").dbSave;
const app = express();

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

app.get('/home', (req, res) => {
	res.send(200, 'got home');
})

app.post("/checkout", async (req, res) => {
  console.log("inside /checkout post route");
  const response = { ...req.body, session: req.session_id };
  console.log("Full Response w Session", response);
  // await dbSave(response);
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
