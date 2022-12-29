import React, { useState } from 'react';
import axios from 'axios';

import AccountForm from './AccountForm.jsx';
import ShippingForm from './ShippingForm.jsx';
import PaymentForm from './PaymentForm.jsx';
import Confirmation from './Confirmation.jsx';

const App = () => {
	const [checkoutStage, setCheckoutStage] = useState('home');

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
		case ('payment details'):
			return (
				<PaymentForm
					checkoutStage={checkoutStage}
					setCheckoutStage={setCheckoutStage}
				/>
			)
			break;
		case ('confirmation'):
				return (
					<Confirmation setCheckoutStage={setCheckoutStage} />
				)
				break;
		case ('home'):
			return (
				<div>
					<h2>Shopping Cart 🛒</h2>
					<p>
						{/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
					</p>
					<button onClick={handleClick}>Checkout</button>
				</div>
			)
		default:
			return (<div>There was a problem loading your shopping cart.</div>)
	}
};

export default App;