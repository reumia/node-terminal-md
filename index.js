var marked = require('marked');
var fs = require('fs');

var files_arr;

fs.readdir('docs/', function(err, files){
	
	files_arr = files;
	for( i=0; i < files.length; i++ ){
		console.log( (i + 1) + '. ' + files[i] );
	}

});

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
	var num = chunk - 1;
    process.stdout.write('You selected this one : ' + files_arr[num] + '\n');
});

process.stdin.on('end', function() {
    process.stdout.write('end');
});