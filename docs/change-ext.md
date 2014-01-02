# 확장자를 재귀적으로 변경하는 php script

확장자를 재귀적으로 변경하는 php script다. 아래처럼 사용한다.

    php change-ext.php my_folder html htm 1

아래는 전체 코드다. `change-ext.php` 같은 파일명으로 저장하고 사용하면 된다.

~~~.php
function change_ext($dir, $from_ext, $to_ext, $subdir = false){
  $from_ext = strtolower($from_ext);
  $to_ext = strtolower($to_ext);

  echo "Overwrites exist files.\n";

  $dir = realpath(trim($dir));

  echo "Start change files extension on {$dir}.\n";

  if ($handle = opendir($dir)) {
    while (false !== ($entry = readdir($handle))) {
      if($entry == '.' || $entry == '..'){
        continue;
      }

      $fullpath = $dir . '/' . $entry;

      //변환
      if(is_file($fullpath)){

        //현재 이 파일이면 넘어감
        if($fullpath == __FILE__){
          continue;
        }

        //지정된 확장자가 아니면 넘어감.
        $ext = strtolower(pathinfo($fullpath, PATHINFO_EXTENSION));

        if( $ext != $from_ext ){
          echo "{$fullpath} : It is not target extension.\n";
          continue;
        }

        $pathinfo = pathinfo($entry);
        $fullpath_changed = $dir . '/' . $pathinfo['filename'] . '.' . $to_ext;

        rename($fullpath, $fullpath_changed);

      }else if($subdir == true AND is_dir($fullpath)){
        //서브 디렉토리 처리
        change_ext($fullpath, $from_ext, $to_ext, $subdir);
      }
    }
    closedir($handle);
  }else{
    echo "Failed opendir.\n";
  }
}


if($argc != 5){
  echo "ex) $argv[0] {dir} {from extension} {to extension} {subdir(1 is true/0 is false)}\n";
  exit;
}

change_ext($argv[1], $argv[2], $argv[3], $argv[4]);
~~~