import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";

import HomePage from "./HomePage.jsx";
import AccountForm from "./AccountForm.jsx";
import ShippingForm from "./ShippingForm.jsx";
import PaymentForm from "./PaymentForm.jsx";
import Confirmation from "./Confirmation.jsx";

const App = () => {
  const [accountDetails, setAccountDetails] = useState({
    username: "",
    password: "",
    email: "",
    session: "",
  });
  const [shippingAddr, setShippingAddr] = useState({
    addrOne: "",
    addrTwo: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cc: "",
    expiry: "",
    cvv: "",
    billingZip: "",
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/account"
          element={
            <AccountForm
              accountDetails={accountDetails}
              setAccountDetails={setAccountDetails}
            />
          }
        />
        <Route
          path="/shipping"
          element={
            <ShippingForm
							accountDetails={accountDetails}
              shippingAddr={shippingAddr}
              setShippingAddr={setShippingAddr}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <PaymentForm
              paymentDetails={paymentDetails}
              setPaymentDetails={setPaymentDetails}
            />
          }
        />
        <Route
          path="/confirmation"
          element={
            <Confirmation
              accountDetails={accountDetails}
              shippingAddr={shippingAddr}
              paymentDetails={paymentDetails}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
