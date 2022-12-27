import React from 'react';

// F3 collects credit card #, expiry date, CVV, and billing zip code.
const FormThree = () => {
	return (
		<form>
			<h1>Billing Details</h1>

			<label htmlFor="cc"></label>
      <input
        type="text"
        name="cc"
        placeholder="Credit Card Number"
        // value={}
        // onChange={}
      />

			<label htmlFor="expiry"></label>
      <input
        type="text"
        name="expiry"
        placeholder="Expiration Date"
        // value={}
        // onChange={}
      />

			<label htmlFor="cvv"></label>
      <input
        type="text"
        name="cvv"
        placeholder="Four Digit CVV"
        // value={}
        // onChange={}
      />

			<label htmlFor="billing-zip"></label>
      <input
        type="text"
        name="billing-zip"
        placeholder="Billing Zip Code"
        // value={}
        // onChange={}
      />

			<button type='submit'>Next</button>
		</form>
	)
};

export default FormThree;