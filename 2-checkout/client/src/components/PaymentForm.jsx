import React from 'react';

// F3 collects credit card #, expiry date, CVV, and billing zip code.
const PaymentForm = ({ paymentDetails, setPaymentDetails }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const paymentInfo = {
      cc: document.getElementById('cc').value,
      expiry: document.getElementById('expiry').value,
      cvv: document.getElementById('cvv').value,
      billingZip: document.getElementById('billing-zip').value
    }
    setPaymentDetails({ ...paymentInfo });
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
        value={paymentDetails.cc}
        onChange={handleChange}
      />

			<label htmlFor="expiry"></label>
      <input
        type="text"
        name="expiry"
        id="expiry"
        placeholder="Expiration Date"
        value={paymentDetails.expiry}
        onChange={handleChange}
      />

			<label htmlFor="cvv"></label>
      <input
        type="text"
        name="cvv"
        id="cvv"
        placeholder="Four Digit CVV"
        value={paymentDetails.cvv}
        onChange={handleChange}
      />

			<label htmlFor="billing-zip"></label>
      <input
        type="text"
        name="billing-zip"
        id="billing-zip"
        placeholder="Billing Zip Code"
        value={paymentDetails.billingZip}
        onChange={handleChange}
      />
      <button type="submit"><a href='/confirmation'>Next</a></button>
		</form>
	)
};

export default PaymentForm;