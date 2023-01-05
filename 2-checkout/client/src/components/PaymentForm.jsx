import React, { useEffect } from 'react';
import axios from 'axios';

import ConditionalLink from './ConditionalLink.jsx';

// F3 collects credit card #, expiry date, CVV, and billing zip code.
const PaymentForm = ({
	response,
	formFields,
	setFormFields,
  paymentDetails,
  setPaymentDetails,
	invalidInput,
  notFirstRender,
	setResponse,
	shouldRedirect,
	setShouldRedirect,
	handleSubmit
}) => {
  // Make sure we start out with a redirect/false
	useEffect(() => {
		setShouldRedirect(false);
	}, []);

	// If all fields have been filled out, allow redirect to Shipping Details
	useEffect(() => {
		!invalidInput && notFirstRender ? setShouldRedirect(true) : setShouldRedirect(false);
	}, [formFields]);

  const handleChange = (e) => {
    const paymentInfo = {
      CC: document.getElementById('cc').value,
      Expiry: document.getElementById('expiry').value,
      CVV: document.getElementById('cvv').value,
      BillingZip: document.getElementById('billing-zip').value
    }
    setFormFields(prev => ({ ...prev, ...paymentInfo }));
    setPaymentDetails(prev => ({ ...prev, ...paymentInfo }));
    setResponse(prev => ({ ...prev, ...paymentInfo }));
  };

  const handleClick = async (e) => {
    await axios.post('/payment', { ...paymentDetails });
    console.log('Clicked', response);
  };

  return (
		<form id="payment-info">
			<h1>Payment Details</h1>

			<label htmlFor="cc"></label>
      <input
        type="text"
        name="cc"
        id="cc"
        placeholder="Credit Card Number"
        value={response.cc}
        onChange={handleChange}
      />

			<label htmlFor="expiry"></label>
      <input
        type="text"
        name="expiry"
        id="expiry"
        placeholder="Expiration Date"
        value={response.expiry}
        onChange={handleChange}
      />

			<label htmlFor="cvv"></label>
      <input
        type="text"
        name="cvv"
        id="cvv"
        placeholder="Four Digit CVV"
        value={response.cvv}
        onChange={handleChange}
      />

			<label htmlFor="billing-zip"></label>
      <input
        type="text"
        name="billing-zip"
        id="billing-zip"
        placeholder="Billing Zip Code"
        value={response.billingZip}
        onChange={handleChange}
      />

      <ConditionalLink to='/confirmation' condition={shouldRedirect}>
				<button onClick={handleClick}>Next</button>
			</ConditionalLink>
		</form>
	)
};

export default PaymentForm;