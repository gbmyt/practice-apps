const db = require("../server/db").db;

module.exports = (req, res, cb) => {
	const session = req.session_id;

	db.execute(
		`SELECT session FROM responses WHERE responses.session = \`session\``,
		(err, data) => {
			if (err) {
				console.log('Error Fetching Previous Sessions from db');
				cb(err);
			} else if (data) {
				let validated = true;

				data.forEach(record => {
					if (record.session === req.session_id) {
						console.log('Sorry, Not Valid');
						validated = false;
					}
				})

				if (!validated) {
					cb(null, false)
				} else {
					console.log('Validated!');
					cb(null, true);
				}
			}
	});
};