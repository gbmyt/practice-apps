import React from 'react';
import { Link } from "react-router-dom";

// F3 collects credit card #, expiry date, CVV, and billing zip code.
const PaymentForm = ({ response, setResponse }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const paymentInfo = {
      cc: document.getElementById('cc').value,
      expiry: document.getElementById('expiry').value,
      cvv: document.getElementById('cvv').value,
      billingZip: document.getElementById('billing-zip').value
    }
    setResponse(prev => ({ ...prev, ...paymentInfo }));
  };

  return (
		<form>
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
      <button><Link to='/confirmation'>Next</Link></button>
		</form>
	)
};

export default PaymentForm;