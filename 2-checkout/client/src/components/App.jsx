import React, { useState } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import axios from 'axios';

import HomePage from './HomePage.jsx';
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
		zip: '',
		phone: ''
	});
	const [paymentDetails, setPaymentDetails] = useState({
		cc: '',
		expiry: '',
		cvv: '',
		billingZip: ''
	});

	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage/>} />
				<Route path="/account" element={<AccountForm
					checkoutStage={checkoutStage}
					setCheckoutStage={setCheckoutStage}
					accountDetails={accountDetails}
					setAccountDetails={setAccountDetails}
				/>} />
				<Route path="/shipping" element={<ShippingForm
					checkoutStage={checkoutStage}
					setCheckoutStage={setCheckoutStage}
					shippingAddr={shippingAddr}
					setShippingAddr={setShippingAddr}
				/>}/>
				<Route path="/payment" element={<PaymentForm
					checkoutStage={checkoutStage}
					setCheckoutStage={setCheckoutStage}
					paymentDetails={paymentDetails}
					setPaymentDetails={setPaymentDetails}
				/>} />
				<Route path="/confirmation" element={<Confirmation
						setCheckoutStage={setCheckoutStage}
						accountDetails={accountDetails}
						shippingAddr={shippingAddr}
						paymentDetails={paymentDetails}
					/>} />
			</Routes>
		</div>
	)
};

export default App;