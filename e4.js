var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, function(error, data){
var lines = data.toString().split('\n');
console.log(lines.length-1);
});
