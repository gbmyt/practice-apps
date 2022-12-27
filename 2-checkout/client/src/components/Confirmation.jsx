import React from 'react';

const Confirmation = ({ setCheckoutStage }) => {
	const handleClick = (e) => {
		e.preventDefault();
		alert('Thanks for shopping with us! You will receive a confirmation email with your order details enclosed shortly.');
		// Render home page
		setCheckoutStage('home');
	};

	return (
		<div>
			<h1>Confirm Your Details:</h1>
			<div className="user-details">
				<h3>User Details:</h3>
				<p>Username</p>
				<p>Password</p>
				<p>Email Address</p>
			</div>

			<div className="shipping-details">
				<h3>Shipping Details:</h3>

				<p>Address Line 1</p>
				<p>Address Line 2</p>
				<p>City</p>
				<p>State</p>
				<p>Zip Code</p>
			</div>

			<div className="billing-details">
				<h3>Billing Details:</h3>

				<h3>Shipping Details:</h3>
				<p>Address Line 1</p>
				<p>Address Line 2</p>
				<p>City</p>
				<p>State</p>
				<p>Zip Code</p>
			</div>
			<button onClick={handleClick}>Purchase</button>
		</div>
	)
};

export default Confirmation;