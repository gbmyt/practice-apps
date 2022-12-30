import React, { useState, useEffect } from 'react';
import ConditionalLink from './ConditionalLink.jsx'

// F1 collects name, email, and password for account creation.

// =======================================================
//                  			TO-DO:
// Form validation for empty required fields and incorrect values/types
// (Refactor to React Router so I can use onSubmit / required input key?)
// =================================================================

const AccountForm = ({ response, setResponse, accountDetails, setAccountDetails }) => {
	const [currentUser, setCurrentUser] = useState({});
	const [shouldRedirect, setShouldRedirect] = useState(false);

	useEffect(() => {
		const invalidInput = validateInput(currentUser);
		const notFirstRender = Object.keys(currentUser).length;

		if (!invalidInput && notFirstRender) {
			// if user is valid, set shouldRedirect to true
			setShouldRedirect(true);
		} else {
			setShouldRedirect(false);
		}
	}, [currentUser]);

	// =============================================
	// 							CUSTOM HANDLERS
	// =============================================
	const validateInput = (form) => {
		let fields = [];

		Object.keys(form).forEach(field => {
			if (!form[field].trim()) {
				fields.push(field);
			}
		});
		return fields.length > 0 ? fields : null;
	};

	const handleChange = () => {
		const user = {
			username: document.getElementById('username').value,
			password: document.getElementById('password').value,
			email: document.getElementById('email').value
		}
		setCurrentUser(prev => ({ ...prev, ...user }));
		setResponse(prev => ({ ...prev, ...user }));
	};

	const handleClick = (e) => {
		if (!shouldRedirect) {
			e.preventDefault();
			if (Object.keys(currentUser).length) {
				const invalidInputFields = validateInput(currentUser);

				invalidInputFields.forEach(field => {
					console.log(`Please fill out ${field} field and try again.`);
				})
			} else {
				console.log('All fields are required. Please try again.');
			}
		}
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
			></input>

			<label htmlFor="password">Password</label>
			<input
				type="text"
				name="password"
				id="password"
				placeholder="Choose a password..."
				value={response.password}
				onChange={handleChange}
			></input>

			<label htmlFor="email">Email</label>
			<input
				type="text"
				name="email"
				id="email"
				placeholder="Email..."
				value={response.email}
				onChange={handleChange}
			></input>

			<ConditionalLink to='/shipping' condition={shouldRedirect}>
				<button onClick={handleClick}>
					Next
				</button>
			</ConditionalLink>
		</form>
	)
};

export default AccountForm;