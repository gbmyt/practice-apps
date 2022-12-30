import React  from "react";

const HomePage = () => {
  const handleClick = async (e) => {
		console.log('Loading F1...');
		// setCheckoutStage('account creation');
	};

  return (
    <>
      <h2>Shopping Cart 🛒</h2>
      <button onClick={handleClick}>Checkout</button>
    </>
  )
};

export default HomePage;
