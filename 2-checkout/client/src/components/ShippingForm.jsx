import React, { useState, useEffect } from 'react';
import ConditionalLink from './ConditionalLink.jsx';

// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
const ShippingForm = ({
  response,
  formFields,
  setFormFields,
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

  useEffect(() => {
		!invalidInput && notFirstRender ? setShouldRedirect(true) : setShouldRedirect(false);
	}, [formFields]);

  const handleChange = () => {
    const shippingDetails = {
      addrOne: document.getElementById('addr1').value,
      addrTwo: document.getElementById('addr2').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zip: document.getElementById('zip').value,
      phone: document.getElementById('phone').value
    }
    setFormFields(prev => ({...prev, ...shippingDetails }));
    setResponse(prev => ({...prev, ...shippingDetails }));
  };

	return (
		<form id="shipping-info">
			<h1>Where Should We Send Your Stuff?</h1>

			<label htmlFor="addr1"></label>
      <input
        type="text"
        name="addr1"
        id="addr1"
        placeholder="Address Line 1"
        value={response.addrOne}
        onChange={handleChange}
      />

			<label htmlFor="addr2"></label>
      <input
        type="text"
        name="addr2"
        id="addr2"
        placeholder="Address Line 2"
        value={response.addrTwo}
        onChange={handleChange}
      />

			<label htmlFor="city"></label>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="City"
        value={response.city}
        onChange={handleChange}
      />

			<label htmlFor="state"></label>
      <input
        type="text"
        name="state"
        id="state"
        placeholder="State"
        value={response.state}
        onChange={handleChange}
      />

			<label htmlFor="zip"></label>
      <input
        type="text"
        name="zip"
        id="zip"
        placeholder="Zip Code"
        value={response.zip}
        onChange={handleChange}
      />

      <label htmlFor="zip"></label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        value={response.phone}
        onChange={handleChange}
      />

      <ConditionalLink to='/payment' condition={shouldRedirect}>
				<button onClick={handleSubmit}>Next</button>
			</ConditionalLink>
		</form>
	)
};

export default ShippingForm;