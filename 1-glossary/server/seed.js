require("dotenv").config();
const mongoose = require("mongoose");
const Word = require('./db').word;

const seedWords = [
	{
		name: 'Antidisestablishmentarianism',
		definition: 'Opposition to the disestablishment of the Church of England.',
		example: 'I never realized that you leaned toward antidisestablishmentarianism'
	},
	{
		name: 'Nefarious',
		definition: '(typically of an action or activity) wicked or criminal.',
		example: 'The nefarious activities of the organized-crime syndicates'
	},
	{
		name: 'Anachronistic',
		definition: 'Belonging or appropriate to an earlier period\, especially so as to seem conspicuously old-fashioned.',
		example: 'She is rebelling against the anachronistic morality of her parents'
	},
	{
		name: 'Pernicious',
		definition: 'Having a harmful effect, especially in a gradual or subtle way.',
		example: 'The pernicious effects of air pollution'
	},
	{
		name: 'Convivial',
		definition: '(of an atmosphere or event) friendly, lively, and enjoyable.',
		example: 'A convivial cocktail party'
	},
	{
		name: 'Egregious',
		definition: 'Outstandingly bad; shocking.',
		example: 'Egregious abuses of copyright'
	},
	{
		name: 'Draconian',
		definition: 'Excessively harsh and severe.',
		example: 'The new parking fines are positively draconian.'
	},
	{
		name: 'Serendipity',
		definition: 'The act of finding something valuable or interesting when you are not looking for it.',
		example: 'It had to be serendipity that I found my dream house during a random drive in the country.'
	},
	{
		name: 'Verisimilitude',
		definition: 'The appearance of being true or real.',
		example: 'The detail gives the novel some verisimilitude.'
	},
	{
		name: 'Mellifluous',
		definition: '(of a voice or words) sweet or musical; pleasant to hear.',
		example: 'The voice was mellifluous and smooth.'
	}
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