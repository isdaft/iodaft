var fs = require('fs');
var path = require('path');

var dir = process.argv[2],
	ext = "." + process.argv[3];
fs.readdir(dir, function(err, files){
if(err){
throw error
}

files.forEach(function(fileName){
ext1 = path.extname(fileName);
if (ext1 === ext){
console.log(fileName);
}
});
});
