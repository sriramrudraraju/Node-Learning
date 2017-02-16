var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    // by setting MIME to text/html browser will understand the file is html
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // synchronus html file read
    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    var message = 'Hello world...';
    html = html.replace('{Message}', message);
    res.end(html);
    
}).listen(1337, '127.0.0.1');