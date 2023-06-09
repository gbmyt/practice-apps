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
	type: String,
	pronunciation: String,
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

// ==================================
// 						DB METHODS
// ==================================
let getGlossary = async (word, cb) => {
	let data;
	let regex =  new RegExp('^' + word + '', 'i');


	// ========================================================
	//												TO-DO:
	//	1.	Decide if this should search for exact matches
	//						or any match within a word

	//											Example:
	// 	Should 'we' only match words beginning with "W-E-" ?
	//	or should it also match 'E[we]r' and 'A[we]some' ??

	//	2. Capitalize first letter of each new term ??
	// ========================================================

	try {
		if (!word) {
			data = await Word.find({}).sort({ created_at: -1 })
		} else if (word) {
			data = await Word.find({ name: regex });
			// console.log('Got word(s)', data);
		}
		cb(null, data);
	} catch (err) {
		cb(err);
	}
};

let dbSave = async (term, cb) => {
	console.log('Saving word to database...');

	const newWord = new Word ({
		name: term.name,
		type: term.type,
		pronunciation: term.pronunciation,
		definition: term.definition,
		example: term.example || 'An example wasn\'t provided. Hint: Add an example sentence so we know how to use this word!'
	});

	try {
    await newWord.save()
		console.log('Saved to database!');
		cb();
  } catch (err) {
		console.error('Caught db Save Error', Object.values(err));
		cb(err);
  }
};

let dbUpdate = (term, cb) => {
	Word.findOne({ _id: term.id }, (err, word) => {
		if (err) {
			cb(err);
		} else {
			console.log('word type', word.type);

			word.name = term.name;
			word.type = term.type;
			word.pronunciation = term.pronunciation;
			word.definition = term.definition;
			word.example = term.example;

			word.save()
				.then((result) => {
					console.log('Updated!', result);
					cb();
				})
				.catch(err => {
					cb(err);
				});
		}
	});
};

let dbDelete = async (id, cb) => {
	try {
		await Word.deleteOne({ _id: id });
  } catch (err) {
		console.error('Caught Error:', err.name + "\n" + err.message);
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
