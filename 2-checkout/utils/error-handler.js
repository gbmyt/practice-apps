const handleError = (err) => {
	if (err.response.data === "Invalid Session") {
		alert('Whoops! You\'re trying to place a duplicate order. Please check your email for confirmation & order details.');
	} else if (err.response.data.errno === 1366 || err.response.data.code === "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD") {
		alert(`Whoops! ${err.response.data.sqlMessage}. Please adjust and try again.`);
	} else {
		console.log(err.data);
		alert('There was a problem saving your information. Please try again.');
	}
};

module.exports.handleError = handleError;