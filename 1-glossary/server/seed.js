require("dotenv").config();
const mongoose = require("mongoose");
const Word = require('./db').word;

const seedWords = [
	{
		name: 'Antidisestablishmentarianism',
		type: 'noun',
		pronunciation: '/ˌanˌtīˌdisəsˌtabliSHmənˈterēəˌniz(ə)m,ˌan(t)ēˌdisəsˌtabliSHmənˈterēəˌniz(ə)m/',
		definition: 'Opposition to the disestablishment of the Church of England.',
		example: 'I never realized that you leaned toward antidisestablishmentarianism'
	},
	{
		name: 'Nefarious',
		type: 'adjective',
		pronunciation: '/nəˈferēəs/',
		definition: '(typically of an action or activity) wicked or criminal.',
		example: 'The nefarious activities of the organized-crime syndicates'
	},
	{
		name: 'Anachronistic',
		type: 'adjective',
		pronunciation: '/əˌnakrəˈnistik/',
		definition: 'Belonging or appropriate to an earlier period\, especially so as to seem conspicuously old-fashioned.',
		example: 'She is rebelling against the anachronistic morality of her parents'
	},
	{
		name: 'Pernicious',
		type: 'adjective',
		pronunciation: '/pərˈniSHəs/',
		definition: 'Having a harmful effect, especially in a gradual or subtle way.',
		example: 'The pernicious effects of air pollution'
	},
	{
		name: 'Convivial',
		type: 'adjective',
		pronunciation: '/kənˈvivēəl/',
		definition: '(of an atmosphere or event) friendly, lively, and enjoyable.',
		example: 'A convivial cocktail party'
	},
	{
		name: 'Egregious',
		type: 'adjective',
		pronunciation: '/iˈɡrējəs/',
		definition: 'Outstandingly bad; shocking.',
		example: 'Egregious abuses of copyright'
	},
	{
		name: 'Draconian',
		type: 'adjective',
		pronunciation: '/drəˈkōnēən,drāˈkōnēən/',
		definition: 'Excessively harsh and severe.',
		example: 'The new parking fines are positively draconian.'
	},
	{
		name: 'Serendipity',
		type: 'noun',
		pronunciation: '/ˌserənˈdipədē/',
		definition: 'The act of finding something valuable or interesting when you are not looking for it.',
		example: 'It had to be serendipity that I found my dream house during a random drive in the country.'
	},
	{
		name: 'Verisimilitude',
		type: 'noun',
		pronunciation: '/ˌverəsəˈmiləˌto͞od/',
		definition: 'The appearance of being true or real.',
		example: 'The detail gives the novel some verisimilitude.'
	},
	{
		name: 'Mellifluous',
		type: 'adjective',
		pronunciation: '/məˈlifləwəs/',
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