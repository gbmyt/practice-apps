import React from 'react';
import axios from 'axios';

const Form = ({ fetchGlossary }) => {

	// save new term to database and re-render glossary list
	const handleSubmit = async (e) => {
		e.preventDefault();

		const formObj = document.getElementById('addTermForm');

		let newTerm = {
			name: e.target.querySelector('#addTermWordInput').value || '',
			type: e.target.querySelector('#addTermTypeInput').value || '',
			pronunciation: e.target.querySelector('#addTermPronunciationInput').value || '',
			definition: e.target.querySelector('#addTermDefInput').value || '',
			example: e.target.querySelector('#addTermExInput').value || ''
		};

		try {
			await axios.post('/create', { newTerm });
			formObj.reset();
		} catch (err) {
			const error = Object.values(err);

			if (error[2]['data']) {
				const errType = error[2]['data'];
				console.log('Error Type', errType);

				switch (errType) {
					case 'Duplicate Word Error':
						alert('Whoops! This word can only be added to glossary once. Try again. 😬');
						break;
					case 'Name is required.':
						alert('Whoops! Field: Name is required. Please adjust and try again. 😬');
						break;
					case 'Definition is required.':
						alert('Whoops! Field: Definition is required. Please adjust and try again. 😬');
						break;

					default:
						alert('Sorry, there was a problem saving to glossary 😬');
				}
			}
		}
		fetchGlossary();
	};

	return (
		<div className='container'>
			<h3>Add A Word</h3>
			<form className="flex-parent" id="addTermForm" onSubmit={handleSubmit}>
				<div className="flex-child">
					{/* <label htmlFor="name">Name</label> */}
					<input
						type="text"
						name="name"
						id="addTermWordInput"
						placeholder="Type a word"
					/>

					{/* <label htmlFor="definition">Definition</label> */}
					<input
						type="text"
						name="definition"
						id="addTermDefInput"
						placeholder="Tell us what it means"
					/>

					{/* <label htmlFor="example">Example</label> */}
					<input
						type="text"
						name="example"
						id="addTermExInput"
						placeholder="Use it in a sentence"
					/>

					{/* <label htmlFor="pronunciation">Pronunciation</label> */}
					<input
						type="text"
						name="pronunciation"
						id="addTermPronunciationInput"
						placeholder="How is it pronounced?"
					/>

					{/* <label htmlFor="word-type">Word Type</label> */}
					<select id="addTermTypeInput" name="word-type">
						<option value="">Word Type</option>
						<option value="noun">noun</option>
						<option value="verb">verb</option>
						<option value="adverb">adverb</option>
						<option value="adjective">adjective</option>
					</select>
				</div>

				<button type="submit" id="save-word-btn">Save Word</button>
			</form>
		</div>
	)
};

export default Form;