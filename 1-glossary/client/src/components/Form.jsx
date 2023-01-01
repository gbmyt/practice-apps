import React from 'react';
import axios from 'axios';
const handleError = require('../../../utils/error-handler').handleError;

const Form = ({ fetchGlossary }) => {

	// save new term to database and re-render glossary list
	const handleSubmit = async (e) => {
		e.preventDefault();

		let newTerm = {
			name: e.target.querySelector('#addTermWordInput').value || '',
			type: e.target.querySelector('#addTermTypeInput').value || '',
			pronunciation: e.target.querySelector('#addTermPronunciationInput').value || '',
			definition: e.target.querySelector('#addTermDefInput').value || '',
			example: e.target.querySelector('#addTermExInput').value || ''
		};

		try {
			await axios.post('/create', { newTerm });
			document.getElementById('addTermForm').reset();
		} catch (err) {
			handleError(err);
		}
		fetchGlossary();
	};

	return (
		<div className='container'>
			<h3>Add A Word</h3>
			<form className="flex-parent" id="addTermForm" onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						id="addTermWordInput"
						placeholder="Type a word"
					/>


					<input
						type="text"
						name="definition"
						id="addTermDefInput"
						placeholder="Tell us what it means"
					/>


					<input
						type="text"
						name="example"
						id="addTermExInput"
						placeholder="Use it in a sentence"
					/>


					<input
						type="text"
						name="pronunciation"
						id="addTermPronunciationInput"
						placeholder="How is it pronounced?"
					/>


					<select id="addTermTypeInput" name="word-type">
						<option value="">Word Type</option>
						<option value="noun">noun</option>
						<option value="verb">verb</option>
						<option value="adverb">adverb</option>
						<option value="adjective">adjective</option>
					</select>

				<button type="submit" className="button" id="save-word-btn">Save</button>
			</form>
		</div>
	)
};

export default Form;