var express = require('express'),
	app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname+'/client/js'));

app.listen('8080', function() {
	console.log('listening on port 8080...');
})

