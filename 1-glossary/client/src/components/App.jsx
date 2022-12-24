import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Glossary from './Glossary';
import Form from './Form';
import SearchBar from './SearchBar';

const App = () => {
	const [glossary, setGlossary] = useState({});
	const [searchTerm, setSearchTerm] = React.useState('');

	useEffect(() => {
		(async () => {
			const words = await axios.get('/glossary');
			setGlossary(words.data);
		})();

		// Cleanup ToDo?
		return () => {};
	}, []);

	const search = async () => {
		console.log('Searching:', searchTerm);
		const word = await axios.get(`/${searchTerm}`);
		console.log('word', word.data);

		// This doesn't work
		setGlossary(word.data);
		console.log(glossary);
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