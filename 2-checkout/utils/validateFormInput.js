const validateFormInput = (form) => {
	let fields = [];

	Object.keys(form).forEach(field => {
		if (!form[field].trim()) {
			if(!["AddrTwo", "Phone"].includes(field)) {
				fields.push(field);
			}
		}
	});
	return fields.length > 0 ? fields : null;
};

module.exports.validateFormInput = validateFormInput;