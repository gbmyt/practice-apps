import React from 'react';
import axios from 'axios';

const Form = () => {

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
	};

	return (
		<div className='addForm'>
			<h2>Add New Term:</h2>
			<form id="addTermForm" onSubmit={handleSubmit}>
				<div className="flex-child">
					<label htmlFor="term">Word</label>
					<input
						type="text"
						name="term"
						id="addTermWordInput"
						placeholder="Type something..."
					/>
				</div>

				<div className="flex-child">
					<label htmlFor="definition">Definition</label>
					<input
						type="text"
						name="definition"
						id="addTermDefInput"
						placeholder="Type something..."
					/>
				</div>

				<div className="flex-child">
					<label htmlFor="example">Example Sentence</label>
					<input
						type="text"
						name="example"
						id="addTermExInput"
						placeholder="Type something..."
					/>
				</div>

				{/* <div className="flex-child">
				</div> */}

				<button type="submit">Save Word</button>
			</form>
		</div>
	)
};

export default Form;