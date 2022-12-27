import React from 'react';

const Confirmation = () => {
	const handleClick = (e) => {
		e.preventDefault();
		alert('Thanks for shopping with us! You will receive a confirmation email with your order details enclosed shortly.');
	};

	return (
		<div>
			<h1>Confirm Your Details:</h1>
			<p>Previously collected details here</p>
			<button onClick={handleClick}>Purchase</button>
		</div>
	)
};

export default Confirmation;