var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
	var urlInsert = url.parse(request.url, true),
	    pathname = urlInsert.pathname,
	    time = urlInsert.query.iso,
	    result;

	if (pathname === '/api/unixtime') {
		result = getUnix(time);
	} else if (pathname === '/api/parsetime'){
		result = getTimeObj(time);
	}
	
	if(result) {
		response.writeHead(200, { 'Content-Type': 'application/json'});
		response.end(JSON.stringify(result));
	} else {
		response.writeHead(404);
		response.end();
	}
});
server.listen(process.argv[2]);

function getUnix(time){	
	return {
	unixtime: getTimestamp(time)};
}
function getTimestamp(time){
	return Date.parse(time);
}
function getTimeObj(time) {
	var date = new Date(getTimestamp(time));

	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
		};
}
