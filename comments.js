comments.js
// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var port = 8080;

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(port, function() {
  console.log(`Server running at http://localhost:${port}/`);
});