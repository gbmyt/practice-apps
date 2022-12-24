require("dotenv").config();
const path = require('path');

const express = require('express');
const app = express();
var port = 3000;

const dbSave = require('./db').dbSave;
const dbUpdate = require('./db').dbUpdate;
const dbDelete = require('./db').dbDelete;
const getWords = require('./db').getWords;

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/vocab', async (req, res) => {
	const words = await getWords();
	res.status(200).send(words);
})

app.post('/create', async (req, res) => {
	// console.log('Testing Body', req.body);

	await dbSave(req.body.newTerm, (err) => {
		if (err) {
			res.status(500).send('Error Saving New Term');
		} else {
			res.status(201).send('Saved!');
		}
	});
});

app.post('/update', async (req, res) => {
	// console.log('Testing Body', req.body);

	// Test update
	// await dbUpdate({
	// 	name: 'anachronistic',
	// 	definition: 'belonging or appropriate to an earlier period\, especially so as to seem conspicuously old-fashioned.',
	// 	example: 'she is rebelling against the anachronistic morality of her parents'
	// });

	// ========================================================================
	// 			TO-DO: Implement update in React Glossary List Item 'Edit'
	// ========================================================================
	dbUpdate(req.body.updatedTerm, (err) => {
		if (err) {
			res.status(500).send('Error Updating Term');
		} else {
			res.status(202).send('Updated!');
		}
	});

	res.status(201).send('Updated!');
});

app.post('/delete', async (req, res) => {
	// ========================================================================
	// 			TO-DO: Implement delete func in React Glossary List Item 'Delete'
	// ========================================================================
	await dbDelete(req.body.deleteWord, (err) => {
		if (err) {
			console.log(err);
		} else {
			res.status(200).send('Done Deleting');
		}
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});