const express = require('express');
const router = express.Router();
pool = require('../modules/pool');

router.post('/', (req, res) => {
	console.log(req.body);

	const queryString = `INSERT INTO "feedback"(
    feeling, understanding, support, comments)
	VALUES ($1, $2, $3, $4)`;

	// let feedbacks = '';

	// for (let feedback of req.body.feedbacks) {
	// 	feedbacks += `${feeling.feeling} ${understanding.understanding} ${support.support} ${comments.comments},`;
	// }

	pool
		.query(queryString, [
			req.body.feeling.feeling,
			req.body.understanding.understanding,
			req.body.support,
			req.body.comments,
		])
		.then((response) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});

module.exports = router;
