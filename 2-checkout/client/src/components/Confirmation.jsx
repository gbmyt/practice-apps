import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Confirmation = ({ response }) => {
	const handleClick = async () => {
		try {
			await axios.post('/checkout', { ...response });
			alert('Thank you for shopping with us! You\'ll receive email confirmation shortly.');
		} catch (err) {
			if (err.response.data === "Invalid Session") {
				alert('Whoops! You\'re trying to place a duplicate order. Please check your email for confirmation & order details.');
			} else if (err.response.data.errno === 1366 || err.response.data.code === "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD") {
				alert(`Whoops! ${err.response.data.sqlMessage}. Please adjust and try again.`);
			} else {
				console.log(err.data);
				alert('There was a problem saving your information. Please try again.');
			}
		}
	};

	return (
		<div>
			<h1>Confirm Your Details</h1>
			<div className="user-details custom-component">
				<h3>User Details</h3>
				<p>Username: {response.Username}</p>
				<p>Password: {response.Password}</p>
				<p>Email Address: {response.Email}</p>
			</div>

			<div className="shipping-details custom-component">
				<h3>Shipping Details</h3>

				<p>Address Line 1: {response.AddrOne}</p>
				<p>Address Line 2: {response.AddrTwo}</p>
				<p>City: {response.City}</p>
				<p>State: {response.State}</p>
				<p>Zip Code: {response.Zip}</p>
				<p>Phone Number: {response.Phone}</p>
			</div>

			<div className="billing-details custom-component">
				<h3>Payment Details</h3>
				<p>Credit Card #: {response.CC}</p>
				<p>Expiration Date: {response.Expiry}</p>
				<p>CVV: {response.CVV}</p>
				<p>Billing Zip Code: {response.BillingZip}</p>
			</div>
			<button onClick={handleClick}><Link to="/">Purchase</Link></button>
		</div>
	)
};

export default Confirmation;