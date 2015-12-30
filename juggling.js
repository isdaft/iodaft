var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2);
var strs = [];
var count = 0;

function print(){
	for (var i = 0; i < strs.length; i++){
	console.log(strs[i]);
	}
}

function work(id){
	http.get(process.argv[2 + id], function(response){
		response.setEncoding('utf8');
		//var allData = "";
		
		response.pipe(bl(function(err, data){
		if (err) return console.error(err)
		
		
		strs[id] = data.toString();
		count++;

		if (count == 3) print()	
		}));
		});
}
	for (var i = 0; i < 3; i++){
		work(i)
	}
	
	
