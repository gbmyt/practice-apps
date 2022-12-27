import React, { useState } from 'react';
import axios from 'axios';

import F1 from './F1.jsx';
import F2 from './F2.jsx';
import F3 from './F3.jsx';
import Confirmation from './Confirmation.jsx';

const App = () => {
	const [checkoutStage, setCheckoutStage] = useState('');

	const handleClick = async () => {
		console.log('Loading F1...');
		setCheckoutStage('account creation');
	};

	switch (checkoutStage) {
		case ('account creation'):
			return (
				<F1
					checkoutStage={checkoutStage}
					setCheckoutStage={setCheckoutStage}
				/>
			)
				break;
		case ('shipping details'):
			return (
				<F2
					checkoutStage={checkoutStage}
					setCheckoutStage={setCheckoutStage}
				/>
			)
			break;
		case ('billing details'):
			return (
				<F3
					checkoutStage={checkoutStage}
					setCheckoutStage={setCheckoutStage}
				/>
			)
			break;
		case ('confirmation'):
				return (
					<Confirmation />
				)
				break;
		default:
			return (
				<div>
					<h2>Shopping Cart 🛒</h2>
					<p>
						{/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
					</p>
					{/* Take user to F1 on click */}
					<button onClick={handleClick}>Checkout</button>
				</div>
			)
	}
};

export default App;