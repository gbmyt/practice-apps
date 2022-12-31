import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Confirmation = ({ response }) => {
	const handleClick = async () => {
		try {
			await axios.post('/checkout', { ...response });
		} catch (err) {
			if (err.response.data === "Invalid Session") {
				alert('You can only place an order once. Please check your email for confirmation details. Thanks for shopping with us!');
			}
			console.log(err);
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