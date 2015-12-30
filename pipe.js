//piping using b1


var http = require('http'),
	bl = require('bl'),
	count = 0;

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8');
	response.pipe(bl( function (err, data){
	if (err) return err;
	var sentence = data.toString();
	var sentence1 = sentence.split('');
	
	for (var i = 0, len = sentence1.length; i < len; i++){
		count++;
	}
	console.log(count);
	console.log(sentence);
	}));
});
