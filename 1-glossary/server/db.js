require("dotenv").config();
const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect('mongodb://localhost/glossary', (err) => {
	if (err) {
		console.log("Connection Error: ", err);
	} else {
		console.log("Connection Open");
	}
});

// =========================
// 				SCHEMA
// =========================
const wordSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
		},
	definition: {
		type: String,
		required: true
	},
	example: String
});

const Word = mongoose.model('Word', wordSchema);

// =========================
// 				DB METHODS
// =========================
let save = async (term) => {
	console.log('Saving word...');
	const newWord = new Word ({
		name: term.name,
		definition: term.definition,
		example: term.example || 'An example sentence was not provided.'
	})
	await newWord.save();
	const testWord = await Word.findOne({ name: term.name });
	console.log('Saved to db!', testWord);
};

module.exports.word = Word;
module.exports.save = save;
