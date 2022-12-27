import React from 'react';

const App = () => {
	const handleClick = () => {
		alert('Loading F1...');
	};

	return (
		<div>
			<p>Hello, World!</p>
			<p>
				<code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
			</p>
			{/* Take user to F1 on click */}
			<button onClick={handleClick}>Checkout</button>
		</div>
	)
};

export default App;