

var myArgs = process.argv.slice(2);
var total = 0;

for (var i in myArgs){
total += +(myArgs[i]);
}

console.log(total);
