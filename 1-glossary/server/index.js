require("dotenv").config();
const path = require('path');

const express = require('express');
const app = express();
var port = 3000;

const dbSave = require('./db').dbSave;
const dbUpdate = require('./db').dbUpdate;
const dbDelete = require('./db').dbDelete;
const getWords = require('./db').getWords;
const getWord = require('./db').getWord;

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/glossary', (req, res) => {
	getWords((err, words) => {
		if (err) {
			res.status(res.statusCode).send(err);
		} else {
			res.status(res.statusCode).send(words);
		}
	});
})

app.get('/:term', (req, res) => {
	console.log('inside getWord Req', req.params.term);

	getWord(req.params.term, (err, word) => {
		if (err) {
			console.log('Theres an error', err);
			res.status(res.statusCode).send(err);
		} else {
			console.log('Word found', word);
			res.status(res.statusCode).send(word);
		}
	});
});

app.post('/create', (req, res) => {
	dbSave(req.body.newTerm, (err) => {
		if (err) {
			console.error(err);
			res.status(res.statusCode).send('Error Saving New Term');
		} else {
			res.status(res.statusCode).send('Saved!');
		}
	});
});

app.post('/update', (req, res) => {
	// console.log('Testing Body', req.body);

	// Test update
	// dbUpdate({
	// 	name: 'anachronistic',
	// 	definition: 'belonging or appropriate to an earlier period\, especially so as to seem conspicuously old-fashioned.',
	// 	example: 'she is rebelling against the anachronistic morality of her parents'
	// });

	// ========================================================================
	// 			TO-DO: Implement update in React Glossary List Item 'Edit'
	// ========================================================================
	dbUpdate(req.body.updatedTerm, (err) => {
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