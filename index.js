var marked = require('marked');
var fs = require('fs');
var files_arr;
var current_screen = 'list';

function print_list(){
    fs.readdir('docs/', function(err, files){
    
        files_arr = files;
        for( i=0; i < files.length; i++ ){
            console.log( (i + 1) + '. ' + files[i] );
        }
        current_screen = 'list';
        console.log('\n글 번호를 입력하세요: ');

    });
}

print_list();

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {

    if( /[0-9]+/.test(chunk) === false && chunk !== '\n' ){
        process.stdout.write('글 번호를 입력하세요: \n');
        return;
    }

    if(chunk === '\n'){
        
        print_list();
        return;
    }

    var num = chunk - 1;

    fs.readFile('docs/'+files_arr[num], 'utf8', function(err, data){
        if(data === undefined){
            console.log("번호를 잘못 입력했습니다. \n");
            // print_list();
        } else {
            process.stdout.write(
                '--------------------------------------------------------------\n' +
                marked(data) +
                '\n' +
                '--------------------------------------------------------------\n' +
                '엔터치면 목록이 나옵니다.\n'
            );
            current_screen = 'detail';
        }
    });

});

process.stdin.on('end', function() {
    process.stdout.write('end');
});
