import React from 'react';
import { Link } from "react-router-dom";

// F1 collects name, email, and password for account creation.

// =======================================================
//                  			TO-DO:
// Form validation for empty required fields and incorrect values/types
// (Refactor to React Router so I can use onSubmit / required input key?)
// =================================================================

const AccountForm = ({ response, setResponse, accountDetails, setAccountDetails }) => {

	const handleChange = (e) => {
		e.preventDefault();
		const user = {
			username: document.getElementById('username').value,
			password: document.getElementById('password').value,
			email: document.getElementById('email').value
		}
		setResponse(prev => ({ ...prev, ...user }));
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
				value={response.username}
				onChange={handleChange}
				// required // doesn't work without using onSubmit instead of onClick
			/>

			<label htmlFor="password">Password</label>
			<input
				type="text"
				name="password"
				id="password"
				placeholder="Choose a password..."
				value={response.password}
				onChange={handleChange}
				// required
			/>

			<label htmlFor="email">Email</label>
			<input
				type="text"
				name="email"
				id="email"
				placeholder="Email..."
				value={response.email}
				onChange={handleChange}
				// required
			/>
			<button><Link to='/shipping'>Next</Link></button>
		</form>
	)
};

export default AccountForm;