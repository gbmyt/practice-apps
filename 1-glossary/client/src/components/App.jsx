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

	// useEffect(() => {
	// 	console.log('Change')

	// 	return () => {};
	// }, [glossary]);

	const fetchGlossary = async () => {
		const words = await axios.get('/glossary');
		setGlossary(words.data);
	};

	const search = async () => {
		if (searchTerm.length) {
			let word = await axios.get(`/${searchTerm}`);

			// This changes state but doesn't re-render filtered list
			setGlossary({ ...word.data });
			console.log('Glossary', glossary);
		}
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