import React from 'react';
import { Link } from "react-router-dom";

// F1 collects name, email, and password for account creation.

// =======================================================
//                  			TO-DO:
// Form validation for empty required fields and incorrect values/types
// (Refactor to React Router so I can use onSubmit / required input key?)
// =================================================================

const AccountForm = ({ accountDetails, setAccountDetails }) => {

	const handleChange = (e) => {
		e.preventDefault();
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

			<label htmlFor="name">Username</label>
			<input
				type="text"
				name="username"
				id="username"
				placeholder="Your name..."
				value={accountDetails.username}
				onChange={handleChange}
				// required // doesn't work without using onSubmit instead of onClick
			/>

			<label htmlFor="password">Password</label>
			<input
				type="text"
				name="password"
				id="password"
				placeholder="Choose a password..."
				value={accountDetails.password}
				onChange={handleChange}
				// required
			/>

			<label htmlFor="email">Email</label>
			<input
				type="text"
				name="email"
				id="email"
				placeholder="Email..."
				value={accountDetails.email}
				onChange={handleChange}
				// required
			/>
			<button type="submit"><Link to='/shipping'>Next</Link></button>
		</form>
	)
};

export default AccountForm;