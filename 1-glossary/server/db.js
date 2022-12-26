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
let getGlossary = async (word, cb) => {
	let data;
	try {
		if (!word) {
			data = await Word.find({}).sort({ created_at: -1 })
			console.log('Got all words');
		} else if (word) {
			console.log('Getting one word', data);
			data = await Word.findOne({ name: word });
			console.log('Got one word', data);
		}
		cb(null, data);
	} catch (err) {
		cb(err);
	}

};

let dbSave = async (term, cb) => {
	console.log('Saving word...');

	const newWord = new Word ({
		name: term.name,
		definition: term.definition,
		example: term.example || 'An example sentence was not provided.'
	});

	try {
    await newWord.save()
		console.log('Saved to database!');
  } catch (err) {
		console.error('Caught Error:', e.name + "\n" + e.message);
		cb(err);
  } finally {
		cb();
  }
};

let dbUpdate = (term, cb) => {
	// Testing Promise Error-Handling
	Word.findOne({ name: term.name })
		.then(word => {
			word.name = term.name;
			word.definition = term.definition;
			word.example = term.example;
			word.save();
		})
		.then(() => {
			console.log('Updated!');
		})
		.catch(err => {
			console.error('Caught Error:', e.name + "\n" + e.message);
		});
};

let dbDelete = async (id, cb) => {
	try {
		await Word.deleteOne({ _id: id });
  } catch (err) {
		console.error('Caught Error:', e.name + "\n" + e.message);
		cb(err);
  } finally {
		cb();
  }
};

module.exports.word = Word;
module.exports.dbSave = dbSave;
module.exports.dbUpdate = dbUpdate;
module.exports.dbDelete = dbDelete;
module.exports.getGlossary = getGlossary;
