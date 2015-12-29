var fs = require('fs');
var path = require('path');

module.exports = function(directory, filter, callback){


fs.readdir(directory, function(err, list) {
if (err){
return callback(err);
}
var elements = [];

list.forEach(function(element){
	if(path.extname(element) === "." + filter){ //this is where i got it wrong, if it works
		elements.push(element); // to above, changed from process.argv to second arg in module.exports
	}
	
	});
	return callback(null, elements); // also this, i had it before the }); instead of after and out of the list.forEach
});
}

