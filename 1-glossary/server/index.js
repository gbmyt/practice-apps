require("dotenv").config();
const path = require('path');

const express = require('express');
const app = express();
var port = 3000;

const save = require('./db').save;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/vocabulary', (req, res) => {
	save({ name: 'testing another new word', definition: 'testingtesting', example: 'test example' });
	res.status(200).send('Got vocab endpoint');
	// display words in glossary list component
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});