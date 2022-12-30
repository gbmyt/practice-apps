import React  from "react";
import { Link } from "react-router-dom";

const HomePage = ({ paymentStatus }) => {
  const thanksMsg = <p id="payment-confirmation">Thanks for shopping with us! You'll receive an email confirmation with your order details enclosed shortly.</p>;
  const buttonMsg = !paymentStatus ? 'Checkout' : 'Place another order';
  const btn = <button type="submit" id="home-button"><Link to="/account">{buttonMsg}</Link></button>;

  return (
    <>
      <h2>Shopping Cart 🛒</h2>
      {!paymentStatus ? <></> : thanksMsg}
      {btn}
    </>
  )
};

export default HomePage;
