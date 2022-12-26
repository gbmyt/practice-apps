import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Glossary from './Glossary';
import Form from './Form';
import SearchBar from './SearchBar';

const App = () => {
	const [glossary, setGlossary] = useState({});
	const [searchTerm, setSearchTerm] = React.useState('');

	useEffect(() => {
		fetchGlossary();

		return () => {};
	}, []);

	const fetchGlossary = async () => {
		const words = await axios.get('/glossary');
		setGlossary(words.data);
	};

	useEffect(() => {
		search();
		return () => {};
	}, [searchTerm]);

	// ==================================================================
	//   TO-DO: Searching a term should filter existing glossary list
	// ==================================================================
	const search = async () => {
		if (searchTerm.length) {
			let word = await axios.get(`/${searchTerm}`);

			// Changes state but re-renders default GlossaryItem
			setGlossary({ ...word.data });
		}
	};

	return (
		<>
			<SearchBar onSearch={search} setTerm={setSearchTerm}/>
			<Form fetchGlossary={fetchGlossary}/>
			<Glossary
				words={glossary}
				query={searchTerm}
				fetchGlossary={fetchGlossary}
			/>
		</>
	)
};

export default App;