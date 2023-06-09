require("dotenv").config();
const path = require('path');
const express = require('express');

const app = express();
var port = 3000;

// =============================================
//             DB Utility Methods:
// =============================================
const dbSave = require('./db').dbSave;
const dbUpdate = require('./db').dbUpdate;
const dbDelete = require('./db').dbDelete;
const getGlossary = require('./db').getGlossary;

// =============================================
//                Middleware:
// =============================================
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// =============================================
//               Server Routes
// =============================================
app.get('/glossary', (req, res) => {
	getGlossary(null, (err, words) => {
		if (err) {
			res.status(res.statusCode).send(err);
		} else {
			res.status(res.statusCode).send(words);
		}
	});
})

app.get('/:term', (req, res) => {
	getGlossary(req.params.term, (err, word) => {
		if (err) {
			res.status(res.statusCode).send(err);
		} else {
			res.status(res.statusCode).send(word);
		}
	});
});

app.post('/create', (req, res) => {
	dbSave(req.body.newTerm, (err) => {
		if (err) {
			if (err.code === 11000) {
				res.status(500).send('Duplicate Word Error');
			} else if (err.errors.name) {
				res.status(500).send('Name is required.');
			} else if (err.errors.definition) {
				res.status(500).send('Definition is required.');
			} else {
				res.status(500).send(err);
			}
		} else {
			res.status(201).send('Saved!');
		}
	});
});

app.post('/update/:id', (req, res) => {
	dbUpdate(req.body.newWord, (err) => {
		if (err) {
			if (err.code === 11000) {
				res.status(500).send('Duplicate Word Error');
			} else if (err.errors.name) {
				res.status(500).send('Name is required.');
			} else if (err.errors.definition) {
				res.status(500).send('Definition is required.');
			} else {
				res.status(500).send('Error Updating Term');
			}
		} else {
			res.status(201).send('Updated!');
		}
	});
});

app.post('/delete/:id', (req, res) => {
	dbDelete(req.params.id, (err) => {
		if (err) {
			console.error(err);
			res.status(res.statusCode).send(err);
		} else {
			res.status(res.statusCode).send('Done Deleting');
		}
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});