import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Glossary from './Glossary';
import Form from './Form';
import SearchBar from './SearchBar';

const App = () => {
	const [glossary, setGlossary] = useState({});
	const [searchTerm, setSearchTerm] = React.useState('');

	useEffect(() => {
		getGlossary();

		return () => {};
	}, [glossary]);

	const getGlossary = async () => {
		const words = await axios.get('/glossary');
		setGlossary(words.data);
	};

	const search = async () => {
		console.log('Searching:', searchTerm);
		const word = await axios.get(`/${searchTerm}`);

		// This doesn't work
		setGlossary({ word.data });
	};

	return (
		<>
			<SearchBar onSearch={search} setTerm={setSearchTerm}/>
			<Form />
			<Glossary words={glossary} />
		</>
	)
};

export default App;