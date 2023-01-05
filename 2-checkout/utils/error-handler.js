const handleError = (err) => {
	console.log('In Error Handler', err);

	if (!err.validated && err.invalidFields) {
		alert(`Whoops! ${err.invalidFields.join(', ')} ${err.invalidFields.length === 1 ? 'is' : 'are'} required. Please try again.`);
	} else if (!err.invalidFields) {
		console.log('Got here', err);

		if (err.response.data) {
			let err = err.response.data;

			if (err === "Invalid Session") {
				alert('Whoops! You\'re trying to place a duplicate order. Please check your email for confirmation & order details.');
			} else if (err.errno === 1366 || err.code === "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD") {
				alert(`Whoops! ${err.sqlMessage}. Please adjust and try again.`);
			}
		}
	} else {
		console.log('There was a problem saving your information. Please try again.', err);
	}
};

module.exports.handleError = handleError;