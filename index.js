var marked = require('marked');
var fs = require('fs');

var files_arr;

fs.readdir('docs/', function(err, files){
	
	files_arr = files;
	for( i=0; i < files.length; i++ ){
		console.log( (i + 1) + '. ' + files[i] );
	}
    console.log('\n');

});

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {

    var num = chunk - 1;

    fs.readFile('docs/'+files_arr[num], 'utf8', function(err, data){
        if(data==undefined){

            // 함수를 변수로 지정해서 반복 실행하는 방법 모르겠음ㅠㅠ
            fs.readdir('docs/', function(err, files){

                files_arr = files;
                for( i=0; i < files.length; i++ ){
                    console.log( (i + 1) + '. ' + files[i] );
                }
                console.log('\n');

            });

        }
        else{
            process.stdout.write('--------------------------------------------------------------\n' + marked(data) + '\n\n');
        }
    })

});

process.stdin.on('end', function() {
    process.stdout.write('end');
});
