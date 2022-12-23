require("dotenv").config();
const path = require('path');

const express = require('express');
const app = express();
var port = 3000;

const save = require('./db').save;
const update = require('./db').update;

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/vocab', (req, res) => {
	// display words in glossary list component
	res.status(200).send('Got vocab endpoint');
})

app.post('/vocab', (req, res) => {
	// console.log('Testing Body', req.body);

	save(req.body.newVocabTerm, (err) => {
		if (err) {
			res.status(500).send('Error Saving New Term');
		} else {
			res.status(201).send('Saved!');
		}
	});
});

app.post('/vocab/update', (req, res) => {
	// console.log('Testing Body', req.body);

	update(req.body.updatedTerm, (err) => {
		if (err) {
			res.status(500).send('Error Updating Term');
		} else {
			res.status(202).send('Updated!');
		}
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});