const handleError = (err) => {
	const error = Object.values(err);

	if (error[2]['data']) {
		const errType = error[2]['data'];
		console.log('Error Type', errType);

		switch (errType) {
			case 'Duplicate Word Error':
				alert('Whoops! This word can only be added to glossary once. Try again. 😬');
				break;
			case 'Name is required.':
				alert('Whoops! Field: Name is required. Please adjust and try again. 😬');
				break;
			case 'Definition is required.':
				alert('Whoops! Field: Definition is required. Please adjust and try again. 😬');
				break;

			default:
				alert('Sorry, there was a problem updating 😬');
		}
	}
};

module.exports.handleError = handleError;