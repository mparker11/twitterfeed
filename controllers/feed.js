var request = require('request');
var Twitter = require('twitter');
 
exports.getTweets = function(username, next) {
	var client = new Twitter({
		consumer_key: '0tosg9OJld5aVElrGGPpSXV0A',
		consumer_secret: 'O3GpS19B5WoPZsbcUPpKGttWYtdnHH27WueJ1GCoW3sGUvW2eJ',
		access_token_key: '791096170516852736-xH1OhISh0CeGsRjXmd62DnomhJIvoKr',
		access_token_secret: 'v37Uyi3juLyza4BcvSzFZVzwCcy2oIE7RcxFOJNPx7dma'
	});
	
	var params = { screen_name: username };
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			next(tweets);
		}
	});
}