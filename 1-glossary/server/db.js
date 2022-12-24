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
		required: true,
		unique: true
	},
	definition: {
		type: String,
		required: true
	},
	example: String,
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
});

const Word = mongoose.model('Word', wordSchema);

// =========================
// 				DB METHODS
// =========================
let getWords = async () => {
	const words = await Word.find({}).sort({ created_at: -1 });
	return words;
};

let dbSave = async (term, cb) => {
	console.log('Saving word...');
	const newWord = new Word ({
		name: term.name,
		definition: term.definition,
		example: term.example || 'An example sentence was not provided.'
	})
	await newWord.save();
	console.log('Saved to database!');
	cb();
};

let dbUpdate = async (term, cb) => {
	let word = await Word.findOne({ name: term.name });

	word.name = term.name;
	word.definition = term.definition;
	word.example = term.example;

	await word.save();
	console.log('Updated!');
};

let dbDelete = async (term, cb) => {
	await Word.deleteOne(term);
	cb();
};

module.exports.word = Word;
module.exports.dbSave = dbSave;
module.exports.dbUpdate = dbUpdate;
module.exports.dbDelete = dbDelete;
module.exports.getWords = getWords;
