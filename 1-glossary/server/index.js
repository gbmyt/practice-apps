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

app.post('/vocab/update', async (req, res) => {
	// console.log('Testing Body', req.body);

	// Test update
	// await update({
	// 	name: 'anachronistic',
	// 	definition: 'belonging or appropriate to an earlier period\, especially so as to seem conspicuously old-fashioned.',
	// 	example: 'she is rebelling against the anachronistic morality of her parents'
	// });

	// update(req.body.updatedTerm, (err) => {
	// 	if (err) {
	// 		res.status(500).send('Error Updating Term');
	// 	} else {
	// 		res.status(202).send('Updated!');
	// 	}
	// });

	res.status(201).send('Updated!');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});