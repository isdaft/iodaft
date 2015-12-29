var filemodule = require('./module.js');

var dir = process.argv[2],
ext = process.argv[3];

filemodule(dir, ext, function (err, fileList){
if (err){
throw new Error("error" + err);
}
for(var i = 0; i < fileList.length;i++){
console.log(fileList[i]);
}
});
