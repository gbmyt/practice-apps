import React, { useState, useEffect } from 'react';
import ConditionalLink from './ConditionalLink.jsx';

// F1 collects name, email, and password for account creation.
const AccountForm = ({
	response,
	formFields,
	setFormFields,
	invalidInput,
  notFirstRender,
	setResponse,
	shouldRedirect,
	setShouldRedirect,
	handleSubmit
}) => {

	// Make sure we start out with a redirect/false
	useEffect(() => {
		setShouldRedirect(false);
	}, []);

	// If all fields have been filled out, allow redirect to Shipping Details
	useEffect(() => {
		!invalidInput && notFirstRender ? setShouldRedirect(true) : setShouldRedirect(false);
	}, [formFields]);

	// =============================================
	// 							CUSTOM HANDLERS
	// =============================================
	const handleChange = () => {
		const user = {
			username: document.getElementById('username').value,
			password: document.getElementById('password').value,
			email: document.getElementById('email').value
		}
		setFormFields(prev => ({ ...prev, ...user }));
		setResponse(prev => ({ ...prev, ...user }));
	};

	return (
		<form id="create-account">
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
				<button onClick={handleSubmit}>Next</button>
			</ConditionalLink>
		</form>
	)
};

export default AccountForm;