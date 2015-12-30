var port = process.argv[2];
var net = require('net');


function zero(n){ return n < 10 ? '0' + n : n }

var server = net.createServer(function (socket){
	//handle sock
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var min = date.getMinutes();
	var returnString = year + "-" +zero(month) + "-" + zero(day) + " " + zero(hours) + ":" + zero(min) + "\n" ;
	socket.write(returnString);
	socket.end();
	});
server.listen(port); //via argv 1(2)




