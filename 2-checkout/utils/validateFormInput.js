const validateFormInput = (form) => {
	let invalidFields = [];
	let formFields = form.querySelectorAll('input');
	// console.log('Form Obj', formFields);
	// console.log('Form Obj', formFields[2].value.length);

	if (formFields.length) {
		formFields.forEach(field => {
			if (!field.value.length) {
				let fieldName = field.name[0].toUpperCase().concat(field.name.slice(1));

				if(!["Addr2", "Phone"].includes(fieldName)) {
					console.log('Missing Required Field:', fieldName);
					invalidFields.push(fieldName);
				}
			}
		})
	} else {
		console.log('Sorry, Can\'t Find Any Fields to Validate');
	}

	// console.log('Invalid Fields', invalidFields, invalidFields.length);
	return invalidFields.length === 0 ? { validated: true } : { validated: false, invalidFields };
};

module.exports.validateFormInput = validateFormInput;