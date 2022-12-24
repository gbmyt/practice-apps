import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Glossary from './Glossary';
import Form from './Form';
import SearchBar from './SearchBar';

const App = () => {
	const [glossary, setGlossary] = useState({});

	useEffect(() => {
		(async () => {
			const words = await axios.get('/glossary');
			setGlossary(words.data);
		})();

		// Cleanup ToDo?
		return () => {};
	}, [glossary]);

	return (
		<>
			<SearchBar />
			<Form />
			<Glossary words={glossary} />
		</>
	)
};

export default App;