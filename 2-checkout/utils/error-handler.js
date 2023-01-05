const handleError = (err) => {
	// console.log('In Error Handler', err);
	if (!err.validated && err.invalidFields) {
		alert(`Whoops! ${err.invalidFields.join(', ')} ${err.invalidFields.length === 1 ? 'is' : 'are'} required. Please try again.`);
	} else if (!err.invalidFields) {
		if (err.response.data.errno === 1366 || err.response.data.code === "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD") {
			alert(`Whoops! ${err.response.data.sqlMessage}. Please adjust and try again.`);
		} else if (err.response.data === "Invalid Session") {
			alert('Whoops! You\'re trying to place a duplicate order. Please check your email for confirmation & order details.');
		}
	} else {
		console.log('There was a problem saving your information. Please try again.', err);
	}
};

module.exports.handleError = handleError;