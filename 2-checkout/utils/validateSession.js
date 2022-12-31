const db = require("../server/db").db;

module.exports = (req, res, cb) => {
	const session = req.session_id;
	db.execute(
		`SELECT session FROM responses WHERE session = \`session\``,
		(err, data) => {
			if (err) {
				console.log('Error Fetching Previous Sessions from db');
				cb(err);
			} else if (!data.length) {
				console.log('Validated!');
				cb(null, true);
			} else if (data.length && data['session'] === req.session_id) {
				console.log('Sorry, Not Valid', data[0]['session']);
				cb(null, false, data['session']);
			}
	});
};