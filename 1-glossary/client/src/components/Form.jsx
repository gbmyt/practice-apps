import React from 'react';
import axios from 'axios';

const Form = () => {

	// save new term to database and re-render glossary list
	const handleSubmit = async (e) => {
		e.preventDefault();

		let newVocabTerm = {
			name: e.target.querySelector('#addTermWordInput').value || 'Default Name',
			definition: e.target.querySelector('#addTermDefInput').value || 'Default Def',
			example: e.target.querySelector('#addTermExInput').value || 'Default Example'
		};

		console.log('Adding Term:', newVocabTerm);
		await axios.post('/vocab', { newVocabTerm });
	};

	return (
		<div className='form'>
			<form id="addTermForm" onSubmit={handleSubmit}>
				<label htmlFor="term">Add New Term:</label>
				<input
					type="text"
					name="term"
					id="addTermWordInput"
					placeholder="Type something..."
				/>

				<label htmlFor="definition">Definition:</label>
				<input
					type="text"
					name="definition"
					id="addTermDefInput"
					placeholder="Type something..."
				/>

				<label htmlFor="example">Use it in a sentence:</label>
				<input
					type="text"
					name="example"
					id="addTermExInput"
					placeholder="Type something..."
				/>

				<button type="submit">Save Word</button>
			</form>
		</div>
	)
};

export default Form;