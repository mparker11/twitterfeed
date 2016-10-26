var express = require('express');
var router = express.Router();
var feed = require('../controllers/feed');

router.get('/:username?', function(req, res, next) {
	var username = req.params.username || 'CNN';
	feed.getTweets(username, function(tweets) {
		res.render('index', {
			title: 'Twitter Feed',
			tweets: tweets
		});
	});
});

module.exports = router;