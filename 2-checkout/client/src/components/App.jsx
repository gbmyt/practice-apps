import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";

import HomePage from "./HomePage.jsx";
import AccountForm from "./AccountForm.jsx";
import ShippingForm from "./ShippingForm.jsx";
import PaymentForm from "./PaymentForm.jsx";
import Confirmation from "./Confirmation.jsx";

const validateFormInput = require('../../../utils/validateFormInput').validateFormInput;

const App = () => {
	const [shouldRedirect, setShouldRedirect] = useState(false);
	const [formFields, setFormFields] = useState({});
	const notFirstRender = Object.keys(formFields).length;
	const invalidInput = validateFormInput(formFields);

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

	const handleSubmit = (e) => {
		if (!shouldRedirect) {
			e.preventDefault();
			// =============================================
			//                  TO-DO:
			// 1.	Validation doesn't work on first render
			// (when form fields haven't been changed yet)
			//
			// 2. notFirstRender isn't accurate. Its just a key count
			//		for the response state object and breaks
			// 		validation after the first Account page
			// =============================================
			if (notFirstRender) {
        alert(`Whoops! ${invalidInput.join(', ')} ${invalidInput.length === 1 ? 'is' : 'are'} required. Please try again.`);
			} else {
				alert('All fields are required. Please try again.');
			}
		}
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
							invalidInput={invalidInput}
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
							invalidInput={invalidInput}
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
							invalidInput={invalidInput}
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