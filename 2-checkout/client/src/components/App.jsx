import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";

import HomePage from "./HomePage.jsx";
import AccountForm from "./AccountForm.jsx";
import ShippingForm from "./ShippingForm.jsx";
import PaymentForm from "./PaymentForm.jsx";
import Confirmation from "./Confirmation.jsx";

const App = () => {
	const [response, setResponse] = useState({
		username: '',
		password: '',
		email: '',
		session: '',

		addrOne: '',
		addrTwo: '',
		city: '',
		state: '',
		zip: '',
		phone: '',

		cc: '',
		expiry: '',
		cvv: '',
		billingZip: ''
	});

  return (
    <div className="custom-component" >
      <Routes>
				<Route path="/" element={<HomePage />}/>
        <Route
          path="/account"
          element={
            <AccountForm
							response={response}
							setResponse={setResponse}
            />
          }
        />
        <Route
          path="/shipping"
          element={
            <ShippingForm
							response={response}
							setResponse={setResponse}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <PaymentForm
							response={response}
							setResponse={setResponse}
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
