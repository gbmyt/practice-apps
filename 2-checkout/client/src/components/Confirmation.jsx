import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Confirmation = ({ response }) => {
	const handleClick = async () => {
		console.log('Form Response', response);
		await axios.post('/checkout', { ...response });
	};

	return (
		<div>
			<h1>Confirm Your Details:</h1>
			<div className="user-details custom-component">
				<h3>User Details:</h3>
				<p>Username: {response.username}</p>
				<p>Password: {response.password}</p>
				<p>Email Address: {response.email}</p>
			</div>

			<div className="shipping-details custom-component">
				<h3>Shipping Details:</h3>

				<p>Address Line 1: {response.addrOne}</p>
				<p>Address Line 2: {response.addrTwo}</p>
				<p>City: {response.city}</p>
				<p>State: {response.state}</p>
				<p>Zip Code: {response.zip}</p>
				<p>Phone Number: {response.phone}</p>
			</div>

			<div className="billing-details custom-component">
				<h3>Payment Details:</h3>
				<p>Credit Card #: {response.cc}</p>
				<p>Expiration Date: {response.expiry}</p>
				<p>CVV: {response.cvv}</p>
				<p>Billing Zip Code: {response.billingZip}</p>
			</div>
			<button onClick={handleClick}><Link to="/">Purchase</Link></button>
		</div>
	)
};

export default Confirmation;