import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Confirmation = ({ response, paymentStatus, setPaymentStatus }) => {
	const handleClick = async () => {
		// console.log('Payment status', paymentStatus);

		if (!paymentStatus) {
			setPaymentStatus(true);
			// console.log('Form Response', response);

			// =============================================
			//        TO-DO: What I want to write:
			// if (invalidSession) {
			// 	alert('You already placed this order! Check your email for confirmation details.');
			// }
			// =============================================
			await axios.post('/checkout', { ...response });
		} else {
			// =============================================
			//                  TO-DO:
			// This operates off of payment status in state

			// Refactor to check actual session ID in addition
			// 			to checking paymentState variable
			// =============================================

			alert('You already placed this order! Check your email for confirmation details.');
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