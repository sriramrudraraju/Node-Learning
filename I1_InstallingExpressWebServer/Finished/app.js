var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// if getting request from base url
app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

// if request getting from /api url
app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);