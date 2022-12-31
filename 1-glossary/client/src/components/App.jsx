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
	}, []);

	const fetchGlossary = async () => {
		const words = await axios.get('/glossary');
		setGlossary(words.data);
	};

	// Was searching on searchTerm change,
	// went back to using submit button
	useEffect(() => {
		search();
	}, [searchTerm]);

	// ==================================================================
	//   TO-DO: Searching a non-existant term should return an Error
	// ==================================================================
	const search = async () => {
		if (searchTerm.length) {
			let word = await axios.get(`/${searchTerm}`);

			if(!word.data) {
				console.log('We couldn\'t find that word. Try again');
				setGlossary([]);
			} else {
				setGlossary([{ ...word.data }]);
			}
		}
	};

	return (
		<>
			<SearchBar onSearch={search} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
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