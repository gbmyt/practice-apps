import React from 'react';

const Form = () => {
	return (
		<div className='form'>
			<h3>New Vocab Form</h3>
			<form id="form">
				<label htmlFor="term">Add New Term</label>
				<input type="text" name="term" />
				<input type="submit" value="Save"/>
			</form>
		</div>
	)
};

export default Form;