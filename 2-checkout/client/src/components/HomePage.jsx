import React  from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h2>Shopping Cart 🛒</h2>
      <button type="submit"><Link to="/account">Checkout</Link></button>
    </>
  )
};

export default HomePage;
