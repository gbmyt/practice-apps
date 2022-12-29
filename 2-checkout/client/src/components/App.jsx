import React, { useState } from 'react';
import axios from 'axios';

import AccountForm from './AccountForm.jsx';
import ShippingForm from './ShippingForm.jsx';
import PaymentForm from './PaymentForm.jsx';
import Confirmation from './Confirmation.jsx';

const App = () => {
	const [checkoutStage, setCheckoutStage] = useState('home');
	const [accountDetails, setAccountDetails] = useState({
		username: '',
		password: '',
		email: '',
		session: ''
	});
	const [shippingAddr, setShippingAddr] = useState({
		addrOne: '',
		addrTwo: '',
		city: '',
		state: '',
		zip: ''
	});
	const [paymentDetails, setPaymentDetails] = useState({
		cc: '',
		expiry: '',
		cvv: '',
		billingZip: ''
	});

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
					accountDetails={accountDetails}
					setAccountDetails={setAccountDetails}
				/>
			)
				break;
		case ('shipping details'):
			return (
				<ShippingForm
					checkoutStage={checkoutStage}
					setCheckoutStage={setCheckoutStage}
					shippingAddr={shippingAddr}
					setShippingAddr={setShippingAddr}
				/>
			)
			break;
		case ('payment details'):
			return (
				<PaymentForm
					checkoutStage={checkoutStage}
					setCheckoutStage={setCheckoutStage}
					paymentDetails={paymentDetails}
					setPaymentDetails={setPaymentDetails}
				/>
			)
			break;
		case ('confirmation'):
				return (
					<Confirmation
						setCheckoutStage={setCheckoutStage}
						accountDetails={accountDetails}
						shippingAddr={shippingAddr}
						paymentDetails={paymentDetails}
					/>
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