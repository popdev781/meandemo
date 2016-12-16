var express = require('express'),
	app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

app.listen('8080', function() {
	console.log('listening...');
})