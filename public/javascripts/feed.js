$(function() {
	$('#search-username').on('submit', function(e) {
		e.preventDefault();
		
		var user = $('input').val();
		location.href = '/' + user;
	});
});