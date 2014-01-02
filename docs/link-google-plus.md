구글에서 검색되는 내 블로그 글에 구글 플러스 프로필/페이지 연결하기
===============================================================

블로그에 HTML 태그에 몇 가지 작업을 추가로 해 주면 구글 검색엔진에 다양한 정보를 제공해 줄 수 있다. 일단 [마이크로 포맷](http://ko.wikipedia.org/wiki/%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%ED%8F%AC%EB%A7%B7)이 가장 쉽게 적용할 수 있는 놈인데 나중에 다룰 생각이다(블로그에 적용할 때 먼저 참고할 놈은 [hAtom](http://microformats.org/wiki/hatom)이라는 마이크로 포맷 스펙이다).

구글 플러스 프로필을 블로그 글에 연결하면, 검색 결과에 내 프로필이 노출된다. 아래 이미지처럼 말이다.

![내 프로필이 나오는 구글 검색 결과](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/link-google-plus-1.png)

조치를 하고 나서 검색결과에 실제로 반영되는 데는 시간이 걸린다. 그러나 구글에서 제공하는 [구조화된 데이터 테스팅 도구][]를 이용해서 제대로 적용됐는지는 바로 확인할 수 있다.

소유권(Authorship) 확인
-----------------------

(내 설명을 참고할 수도 있지만 [구글의 설명](https://support.google.com/webmasters/answer/1408986?hl=ko)을 참고할 수도 있다.)

블로그에 Google+ 프로필로 가는 링크를 넣어야 한다. 자기 프로필 페이지로 가서 링크를 복사하자. 홈 화면 말고 구글 플러스 좌측 메뉴에서 '프로필'을 누르면 나오는 페이지가 프로필 페이지다. 

개인 프로필 페이지라면 링크는 아래 모양처럼 생겼다.

    https://plus.google.com/u/0/100363892707502121578/posts

기업용 페이지라면 링크는 아래 모양처럼 생겼다.

    https://plus.google.com/u/0/b/112373772451309371763/112373772451309371763/posts

위 URL을 가지고 작업을 해야 한다. 맨 뒤의 `/posts`라는 부분을 지우고 대신 `?rel=author`라고 넣자. 그러면 URL이 아래처럼 될 거다.

    https://plus.google.com/u/0/100363892707502121578?rel=author

이제 블로그의 HTML을 편집하는 곳으로 가서, Google+ 링크를 추가하자.

    <a href="https://plus.google.com/u/0/100363892707502121578?rel=author">Google+</a>

링크 텍스트는 맘대로 해도 된다.

다음으로는 Google+쪽에서 내 블로그를 연결해야 한다. 프로필 페이지에서 Google+ 상단 메뉴의 '정보(About)' 페이지에 간 뒤, 링크(Links) 항목에 자기 블로그를 추가한다. '수정(Edit)'을 누르면 추가할 수 있다.

이렇게 한 뒤 [구조화된 데이터 테스팅 도구][]로 가서 블로그 글 하나의 URL을 넣어 보자. 아래 이미지처럼 나오면 성공이다.

![소유권 확인 결과 메시지](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/link-google-plus-2.png)

게시자(Publisher) 확인
----------------------

소유권 확인뿐 아니라 게시자(Publisher) 확인이라는 항목도 있다. 이건 검색결과에 프로필 노출이랑은 무관한 항목이지만, 뭐 내친김에 여기까지 해 보자.

소유권(Authorship)은 글 단위의 저작자를 말하는 거다. 게시자(Publisher)는 블로그 주인을 말하는 것이다. 책으로 치면 Authorship은 책의 저자, Publisher는 출판사가 되겠다. 그냥 '글 저자', '웹사이트 소유자'로 번역해도 될 뻔했다는 생각이 든다. 여기서는 '소유권', '게시자'라는 번역이 어색하니 그냥 영단어를 사용하겠다.

여튼간에, Publisher 표시는 Authorship이 표시돼 있는 링크와는 또 다른 링크를 만들어서 해야 한다. [구글 도움말](https://support.google.com/webmasters/answer/1708844?hl=ko)을 보면 웹사이트 첫 화면[ref]홈 페이지(Home page, 홈 링크를 누르면 나오는 페이지)를 말한다. 한국에선 홈페이지가 웹사이트와 동의어지만, 영미권에서 홈 페이지는 웹사이트 첫 화면, 즉 인덱스 페이지를 뜻한다.[/ref]에만 링크가 있으면 된다고 하는데, 뭐 모든 페이지에 링크를 넣는다고 특별히 나쁠 건 없는 것 같다. 

아래처럼 URL에서 `/posts`를 지운 뒤, 이번엔 `rel=publisher`라는 속성을 추가해서 넣으면 된다.

    <a href="https://plus.google.com/u/0/100363892707502121578" rel="publisher">Google+</a>

뭐, 역시 프로필/페이지에서 이 블로그 URL을 연결해 줘야 하고. 마지막으로 [구조화된 데이터 테스팅 도구][]에서 확인하고 아래처럼 나오면 성공인 거다.

![Publisher 확인 결과 메시지](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/link-google-plus-3.png)


[구조화된 데이터 테스팅 도구]: http://www.google.com/webmasters/tools/richsnippets