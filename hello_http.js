var http = require('http');
var hello = require('./hello');

hello.world();

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hi Jenish. This is FAST.');
});

var port = process.env.PORT || 8080;

server.listen(port);