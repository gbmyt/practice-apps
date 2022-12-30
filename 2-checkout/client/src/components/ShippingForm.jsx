import React from 'react';

// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
const ShippingForm = ({ shippingAddr, setShippingAddr }) => {
  const handleChange = (e) => {
    e.preventDefault();

    const shippingDetails = {
      addrOne: document.getElementById('addr1').value,
      addrTwo: document.getElementById('addr2').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zip: document.getElementById('zip').value,
      phone: document.getElementById('phone').value
    }
    setShippingAddr(shippingDetails);
  };

	return (
		<form>
			<h1>Where Should We Send Your Stuff?</h1>

			<label htmlFor="addr1"></label>
      <input
        type="text"
        name="addr1"
        id="addr1"
        placeholder="Address Line 1"
        value={shippingAddr.addrOne}
        onChange={handleChange}
      />

			<label htmlFor="addr2"></label>
      <input
        type="text"
        name="addr2"
        id="addr2"
        placeholder="Address Line 2"
        value={shippingAddr.addrTwo}
        onChange={handleChange}
      />

			<label htmlFor="city"></label>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="City"
        value={shippingAddr.city}
        onChange={handleChange}
      />

			<label htmlFor="state"></label>
      <input
        type="text"
        name="state"
        id="state"
        placeholder="State"
        value={shippingAddr.state}
        onChange={handleChange}
      />

			<label htmlFor="zip"></label>
      <input
        type="text"
        name="zip"
        id="zip"
        placeholder="Zip Code"
        value={shippingAddr.zip}
        onChange={handleChange}
      />

      <label htmlFor="zip"></label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        value={shippingAddr.phone}
        onChange={handleChange}
      />
      <button type="submit"><a href='/payment'>Next</a></button>
		</form>
	)
};

export default ShippingForm;