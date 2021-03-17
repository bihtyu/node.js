var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'image/png'});
  fs.createReadStream('test.png').pipe(res);
}).listen(3000);

console.log('Serve running at http://localhost:3000/')