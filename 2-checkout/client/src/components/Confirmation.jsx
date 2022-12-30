import React from 'react';
import axios from 'axios';

const Confirmation = ({ accountDetails,	shippingAddr,	paymentDetails }) => {
	const handleClick = async () => {
		const formResponse = {
			...accountDetails,
			...shippingAddr,
			...paymentDetails
		}
		await axios.post('/checkout', { ...formResponse });
	};

	return (
		<div>
			<h1>Confirm Your Details:</h1>
			<div className="user-details">
				<h3>User Details:</h3>
				<p>Username: {accountDetails.username}</p>
				<p>Password: {accountDetails.password}</p>
				<p>Email Address: {accountDetails.email}</p>
			</div>

			<div className="shipping-details">
				<h3>Shipping Details:</h3>

				<p>Address Line 1: {shippingAddr.addrOne}</p>
				<p>Address Line 2: {shippingAddr.addrTwo}</p>
				<p>City: {shippingAddr.city}</p>
				<p>State: {shippingAddr.state}</p>
				<p>Zip Code: {shippingAddr.zip}</p>
				<p>Phone Number: {shippingAddr.phone}</p>
			</div>

			<div className="billing-details">
				<h3>Billing Details:</h3>

				<h3>Shipping Details:</h3>
				<p>Credit Card #: {paymentDetails.cc}</p>
				<p>Expiration Date: {paymentDetails.expiry}</p>
				<p>CVV: {paymentDetails.cvv}</p>
				<p>Billing Zip Code: {paymentDetails.billingZip}</p>
			</div>
			<button onClick={handleClick} type="submit"><a href="/">Purchase</a></button>
		</div>
	)
};

export default Confirmation;