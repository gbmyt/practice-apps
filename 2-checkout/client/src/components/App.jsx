import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";

import HomePage from "./HomePage.jsx";
import AccountForm from "./AccountForm.jsx";
import ShippingForm from "./ShippingForm.jsx";
import PaymentForm from "./PaymentForm.jsx";
import Confirmation from "./Confirmation.jsx";

const handleError = require('../../../utils/error-handler').handleError;
const validateFormInput = require('../../../utils/validateFormInput').validateFormInput;

const App = () => {
	const [shouldRedirect, setShouldRedirect] = useState(false);
	const [formFields, setFormFields] = useState({});
	const [userDetails, setUserDetails] = useState({});
	const [shippingDetails, setShippingDetails] = useState({});
	const [paymentDetails, setPaymentDetails] = useState({});
	const notFirstRender = Object.keys(formFields).length;

	const [response, setResponse] = useState({
		Username: '',
		Password: '',
		Email: '',
		Session: '',

		AddrOne: '',
		AddrTwo: '',
		City: '',
		State: '',
		Zip: '',
		Phone: '',

		CC: '',
		Expiry: '',
		CVV: '',
		BillingZip: ''
	});

	// =============================================
	//                  TO-DO:
	// 1.	Validation doesn't work on first render
	// (when form fields haven't been changed yet)
	//
	// 2. notFirstRender isn't accurate. Its just a key count
	//		for the response state object and breaks
	// 		validation after the first Account page
	// =============================================
	const handleSubmit = async (e, form) => {
		try {
			const validatedForm = validateFormInput(document.getElementById(form.name));

			if (!validatedForm.validated) {
				e.preventDefault();
				handleError(validatedForm);
			} else {
				await axios.post(`${form.path}`, { ...form.payload });
			}
		} catch (err) {
			console.log('There was a problem submitting account details\n', err);
		}
		console.log(`${form.name} Details Submitted`, response);
  };

  return (
    <div className="custom-component" >
      <Routes>
				<Route path="/" element={<HomePage />}/>
				<Route
          path="/account"
          element={
            <AccountForm
							response={response}
							formFields={formFields}
							setFormFields={setFormFields}
							userDetails={userDetails}
							setUserDetails={setUserDetails}
							notFirstRender={notFirstRender}

							setResponse={setResponse}
							shouldRedirect={shouldRedirect}
							setShouldRedirect={setShouldRedirect}
							handleSubmit={handleSubmit}
            />
          }
        />

        <Route
          path="/shipping"
          element={
            <ShippingForm
							response={response}
							formFields={formFields}
							setFormFields={setFormFields}
							shippingDetails={shippingDetails}
							setShippingDetails={setShippingDetails}
							notFirstRender={notFirstRender}

							setResponse={setResponse}
							shouldRedirect={shouldRedirect}
							setShouldRedirect={setShouldRedirect}
							handleSubmit={handleSubmit}
            />
          }
        />

        <Route
          path="/payment"
          element={
            <PaymentForm
							response={response}
							formFields={formFields}
							setFormFields={setFormFields}
							paymentDetails={paymentDetails}
							setPaymentDetails={setPaymentDetails}
							notFirstRender={notFirstRender}

							setResponse={setResponse}
							shouldRedirect={shouldRedirect}
							setShouldRedirect={setShouldRedirect}
							handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/confirmation"
          element={
            <Confirmation
							response={response}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;