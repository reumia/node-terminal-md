# サイトを一時的に閉じたときにGoogleのに知らせる

点検やサイトの移転などでサイトを必然的にしばらく閉じる必要がある場合(downtime)がある。このような場合、サイトをちょうどダウンしまえば検索順位に悪影響を与えることができる。

このような時の対処法は、Googleウェブマスターセンターに通知している : [How to deal with planned site downtime](http://googlewebmastercentral.blogspot.kr/2011/01/how-to-deal-with-planned-site-downtime.html)

## 通常のページへ送ろう

__404(Not Found)や503(Service Unavailable)が出ないようにしましょう​​__ : redirectのかどうか"のサイトを確認しています"を浮かべデンして、とにかく正常な応答をするようだ。

## 再接続日時をお知らせ候補

[Retry - After header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.37)を教えてあげよう。これにより、 Googleのボットがその時刻以降に再クロールをしにくるという。

Retry - After headerの構文は次のとおりである。

    Retry-After  = "Retry-After" ":" ( HTTP-date | delta-seconds )

例はこうだ。

    Retry-After: Fri, 31 Dec 1999 23:59:59 GMT
    Retry-After: 120

後の例では120秒、つまり2分後にまた来なさいというのだ。

## 503(Service Unavailable)コードとRetry - Afterヘッダを混ぜて使用する場合

サービスは非常に少しの間停止するのではなく工事中であるか、ハードウェアのメンテナンス作業中、または何かその場合、 HTTPステータスコードに503を送信することが助けになるという。

PHPで以下のように書けば、サービスが一時停止されたから2011年8月8日18時27分以降に再度来なさいというメッセージになる。

    header('HTTP/1.1 503 Service Temporarily Unavailable');
    header('Retry-After: Sat, 8 Oct 2011 18:27:00 GMT');

もちろん、 503のコードが長すぎる解決しない場合、Googleはそのページが完全にサービス不能状態に陥ったと判断し、検索インデックスからページを飛ばしてしまうだろう。
