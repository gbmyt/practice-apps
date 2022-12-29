import React from 'react';

// F1 collects name, email, and password for account creation.
const AccountForm = ({ checkoutStage, setCheckoutStage, accountDetails, setAccountDetails }) => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Account Details From State', accountDetails);

		console.log('Fetching Shipping Form...');
		setCheckoutStage('shipping details');
	};

	const handleChange = (e) => {
		e.preventDefault();
		console.log('Inside Account Handle Change');
		const user = {
			username: document.getElementById('username').value,
			password: document.getElementById('password').value,
			email: document.getElementById('email').value
		}
		setAccountDetails({ ...user });
	};

	return (
		<form>
			<h1>Create an Account:</h1>

			<label htmlFor="name"></label>
			<input
				type="text"
				name="username"
				id="username"
				placeholder="Your name..."
				value={accountDetails.username}
				onChange={handleChange}
			/>

			<label htmlFor="password"></label>
			<input
				type="text"
				name="password"
				id="password"
				placeholder="Choose a password..."
				value={accountDetails.password}
				onChange={handleChange}
			/>

			<label htmlFor="email"></label>
			<input
				type="text"
				name="email"
				id="email"
				placeholder="Email..."
				value={accountDetails.email}
				onChange={handleChange}
			/>

			<button type='submit' onClick={handleClick}>Next</button>
		</form>
	)
};

export default AccountForm;