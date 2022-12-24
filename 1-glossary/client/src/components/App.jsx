import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Glossary from './Glossary';
import Form from './Form';
import SearchBar from './SearchBar';

const App = () => {
	const [vocabWords, setVocabWords] = useState({});

	useEffect(() => {
		(async () => {
			const words = await axios.get('/vocab');
			setVocabWords(words.data);
		})();

		// Cleanup ToDo?
		return () => {};
	}, []);

	return (
		<>
			<SearchBar />
			<Form />
			<Glossary words={vocabWords} />
		</>
	)
};

export default App;