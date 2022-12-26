require("dotenv").config();
const path = require('path');

const express = require('express');
const app = express();
var port = 3000;

const dbSave = require('./db').dbSave;
const dbUpdate = require('./db').dbUpdate;
const dbDelete = require('./db').dbDelete;
const getGlossary = require('./db').getGlossary;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

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
			console.log('App Get Word', word)
			res.status(res.statusCode).send(word);
		}
	});
});

app.post('/create', (req, res) => {
	dbSave(req.body.newTerm, (err) => {
		if (err) {
			res.status(res.statusCode).send('Error Saving New Term');
		} else {
			res.status(res.statusCode).send('Saved!');
		}
	});
});

app.post('/update/:id', (req, res) => {
	dbUpdate(req.body.newWord, (err) => {
		if (err) {
			console.error(err);
			res.status(res.statusCode).send('Error Updating Term');
		} else {
			res.status(res.statusCode).send('Updated!');
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