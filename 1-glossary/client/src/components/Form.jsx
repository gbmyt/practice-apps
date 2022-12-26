import React from 'react';
import axios from 'axios';

const Form = ({ fetchGlossary }) => {

	// save new term to database and re-render glossary list
	const handleSubmit = async (e) => {
		e.preventDefault();

		let newTerm = {
			name: e.target.querySelector('#addTermWordInput').value || 'Default Name',
			definition: e.target.querySelector('#addTermDefInput').value || 'Default Def',
			example: e.target.querySelector('#addTermExInput').value || 'Default Example'
		};

		console.log('Adding Term:', newTerm);
		await axios.post('/create', { newTerm });
		fetchGlossary();
	};

	return (
		<div className='addForm'>
			<h2>Add New Word</h2>
			<form className="flex-parent" id="addTermForm" onSubmit={handleSubmit}>
				<div className="flex-child">
					<input
						type="text"
						name="name"
						id="addTermWordInput"
						placeholder="Type a word"
					/>
				</div>

				<div className="flex-child">
					<input
						type="text"
						name="definition"
						id="addTermDefInput"
						placeholder="Tell us what it means"
					/>
				</div>

				<div className="flex-child">
					<input
						type="text"
						name="example"
						id="addTermExInput"
						placeholder="Use it in a sentence"
					/>
				</div>

				<button type="submit">Save Word</button>
			</form>
		</div>
	)
};

export default Form;