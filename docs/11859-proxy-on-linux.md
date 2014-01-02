[리눅스] 커맨드 라인으로 프록시 세팅하기
======================================

커맨드라인으로 프록시 세팅을 하는 건 생각보다 간단하다. 그냥 `.bashrc`를 편집하는 게 가장 간단하다. 모든 사용자에게 적용하고 싶다면, `/etc/profile	`을 편집하면 된다. 

파일을 열어서 다음처럼 적어 넣는다.

	export http_proxy="http://username:password@hostname:port"
	export https_proxy="https://username:password@hostname:port"
	export ftp_proxy="ftp://username:password@hostname:port"
	export no_proxy="127.0.0.1, localhost"

아이디와 암호가 필요없는 프록시라면 `username:password@` 부분을 빼고 적으면 된다.

로그아웃한 뒤 다시 로그인하면 전체 시스템에 적용된다.