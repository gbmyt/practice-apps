import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Glossary from './Glossary';
import Form from './Form';
import SearchBar from './SearchBar';

const App = () => {
	const [glossary, setGlossary] = useState([]);
	const [searchTerm, setSearchTerm] = React.useState('');

	useEffect(() => {
		fetchGlossary();
	}, []);

	useEffect(() => {
		search();
	}, [searchTerm]);

	const fetchGlossary = async () => {
		const words = await axios.get('/glossary');
		setGlossary(words.data);
	};

	const search = async () => {

		if (searchTerm.length) {
			let result = await axios.get(`/${searchTerm}`);

			if(!result.data.length) {
				console.log('We couldn\'t find that word. Try again');
				setGlossary({});
			} else {
				setGlossary(result.data);
			}
		} else if (searchTerm.length === 0) {
			fetchGlossary();
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