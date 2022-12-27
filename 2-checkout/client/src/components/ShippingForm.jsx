import React from 'react';

// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
const ShippingForm = ({ checkoutStage, setCheckoutStage }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Getting Billing Details...');
    setCheckoutStage('billing details');
  };

	return (
		<form>
			<h1>Where Should We Send Your Stuff?</h1>

			<label htmlFor="addr1"></label>
      <input
        type="text"
        name="addr1"
        placeholder="Address Line 1"
        // value={}
        // onChange={}
      />

			<label htmlFor="addr2"></label>
      <input
        type="text"
        name="addr2"
        placeholder="Address Line 2"
        // value={}
        // onChange={}
      />

			<label htmlFor="city"></label>
      <input
        type="text"
        name="city"
        placeholder="City"
        // value={}
        // onChange={}
      />

			<label htmlFor="state"></label>
      <input
        type="text"
        name="state"
        placeholder="State"
        // value={}
        // onChange={}
      />

			<label htmlFor="zip"></label>
      <input
        type="text"
        name="zip"
        placeholder="Zip Code"
        // value={}
        // onChange={}
      />


			<button type='submit' onClick={handleClick}>Next</button>
		</form>
	)
};

export default ShippingForm;