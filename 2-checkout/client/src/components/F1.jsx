import React from 'react';

// F1 collects name, email, and password for account creation.
const FormOne = ({ checkoutStage, setCheckoutStage }) => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Getting Shipping Form...');
		setCheckoutStage('shipping details');
	};

	return (
		<form>
			<h1>Create an Account:</h1>

			<label htmlFor="name"></label>
			<input
				type="text"
				name="name"
				placeholder="Your name..."
				// value={}
				// onChange={}
			/>

			<label htmlFor="email"></label>
			<input
				type="text"
				name="email"
				placeholder="Email..."
				// value={}
				// onChange={}
			/>

			<label htmlFor="password"></label>
			<input
				type="text"
				name="password"
				placeholder="Choose a password..."
				// value={}
				// onChange={}
			/>

			<button type='submit' onClick={handleClick}>Next</button>
		</form>
	)
};

export default FormOne;