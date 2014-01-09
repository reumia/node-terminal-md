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

/**
 * 숫자만 있는지 검사한다.
 * @param  string chunk
 * @return Boolean 숫자면 true, 다른 거 섞여 있으면 false
 */
function is_only_number(chunk){
    chunk = chunk.trim();
    return (/[^0-9]/.test(chunk) === false);
}

print_list();

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {

    if(chunk === '\n'){
        print_list();
        return;
    }else if( is_only_number(chunk) === false ){
        process.stdout.write('숫자만 입력하세요: \n');
        return;
    }

    if( is_only_number(chunk) ){
        if( parseInt(chunk, 10) > files_arr.length + 1 ){
            process.stdout.write('목록에 없는 글입니다. \n');
            return;
        }
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
