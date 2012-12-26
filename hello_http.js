var http = require('http');
var hello = require('./hello');

hello.world();

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});

server.listen(8080);