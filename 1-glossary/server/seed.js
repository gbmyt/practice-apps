require("dotenv").config();
const mongoose = require("mongoose");
const Word = require('./db').word;

const seedWords = [
	{
		name: 'antidisestablishmentarianism',
		definition: 'opposition to the disestablishment of the Church of England.',
		example: 'I never realized that you leaned toward antidisestablishmentarianism'
	},
	{
		name: 'anachronistic',
		definition: 'belonging or appropriate to an earlier period\, especially so as to seem conspicuously old-fashioned.',
		example: 'she is rebelling against the anachronistic morality of her parents'
	},
	{
		name: 'convivial',
		definition: '(of an atmosphere or event) friendly, lively, and enjoyable.',
		example: 'a convivial cocktail party'
	},
	{
		name: 'pernicious',
		definition: 'having a harmful effect, especially in a gradual or subtle way.',
		example: 'the pernicious effects of air pollution'
	},
];

// Seed Database Function
const seedDB = async () => {
	await Word.deleteMany({});
	await Word.insertMany(seedWords);
};

seedDB().then(() => {
	mongoose.connection.close();
}).catch(err => {
	console.log('Close Error: ', err);
});