var http = require('http');
var fs = require('fs');
var input = process.argv[3],
	port = process.argv[2];

var server = http.createServer(function (req, res) {
	fs.createReadStream(input).pipe(res);
	});
server.listen(port);
