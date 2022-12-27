import React, { useState } from 'react';
import axios from 'axios';

import AccountForm from './AccountForm.jsx';
import ShippingForm from './ShippingForm.jsx';
import BillingForm from './BillingForm.jsx';
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
				<AccountForm
					checkoutStage={checkoutStage}
					setCheckoutStage={setCheckoutStage}
				/>
			)
				break;
		case ('shipping details'):
			return (
				<ShippingForm
					checkoutStage={checkoutStage}
					setCheckoutStage={setCheckoutStage}
				/>
			)
			break;
		case ('billing details'):
			return (
				<BillingForm
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
					<button onClick={handleClick}>Checkout</button>
				</div>
			)
	}
};

export default App;