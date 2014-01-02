# jsとiframeのない軽いツイッター共有]ボタン

この記事は、 [「魔法の木」でブログのスキンに行くとした経験を共有する文](http://jp.mytory.net/?tag=%eb%a7%88%eb%b2%95-%eb%82%98%eb%ac%b4-%ed%85%8c%eb%a7%88)である。

ツイッター、フェイスブックの共有ボタンがほとんどすべてのWebサイトにかかっている。気にちょっと書いたのは、Googleプラスボタンもかかっている。しかし、 1点注意することがある。すべてのボタンは、 `iframe`を使用するという点である。 `iframe`を使用して、 SNSサイトには得を見るが、サイトの立場では得失をよく判断しなければならない。例えば、私のように別の共有がないブロガーな場合にはSNS 3つのボタンの` iframe `を三本も使用しているのは資源の無駄だ。サイトのレンダリングがかなり遅くなる。

それではどうしたらいいの？解決策は簡単である。単にリンクで処理しよう。 `target="_blank"`属性を与えて、リンクを新しいウィンドウで開くようにすることもできる。それは十分である。 Twitterのような場合は、リンクにも様々なオプションを与えることができる。例えば、私のような場合は、まだあなたをフォローしていない人なら、フォローするようにお勧めすることを出るようにした。

まず、Twitterの共有ボタンの作成から見てみる。

## ツイッター共有するボタンの作成 ##

Twitterのシェアボタン作るのが気にすることが一番多い。まず、文章をURLに配置するのである。第二に、オプションを与えることができることが多い。

Twitterのシェアボタンは、基本的に次のようなURL形式を持つ。

	https://twitter.com/intent/tweet?original_referer={URL}&text={text}&url={URL}&via={twitter-ID}&related={twitter-ID}

2013年12月15日現在、私のブログのツイッター共有するURLは、すべてあんな式で生じた。この記事のTwitterの共有リンクも同じだ。下のリンクをクリックすると、私のブログが共有される。

[Twitterの共有](https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fmytory.net&text=%EC%9B%B9%EC%9C%BC%EB%A1%9C%20%EB%A7%90%ED%95%98%EA%B8%B0&url=http%3A%2F%2Fmytory.net&via=mytory&related=mytory)

上記のリンクは、このように生じた。

	https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fmytory.net&text=%EC%9B%B9%EC%9C%BC%EB%A1%9C%20%EB%A7%90%ED%95%98%EA%B8%B0&url=http%3A%2F%2Fmytory.net&via=mytory&related=mytory

`%3A`の文字はURLエンコードです。 URL内の特殊文字とハングルを破らずに理解できるようにしてくれるのだ。 PHPで`urlencode()`関数を使用して作る。 javascriptは[`encodeURIComponent()`関数を使用する。](http://xkr.us/articles/javascript/encode-compare/)

ヨトン間で、上記のURLを一つずつ分析してみましょう。

一度呼び出すアドレスは、 `https://twitter.com/intent/tweet`です。残りは引数の値である。

* __`original_referer`__ ：実際にこのツイートをすることにしたページをいう。私のブログの記事のような場合は、共有するURLとrefererが同じだが、文のリストから特定の行をすぐにツイートした場合にはrefererは、文のリストのページになって、共有するURLは、実際の文章のURLになるのだ。
* __`text`__ ：ツイートに入れるメッセージ
* __`url`__ ：共有するURL
* __`via`__ ：このURLの所有者のアカウントをお持ち
* __`related`__ ：ツイートしてフォローするようにお勧めすることをお持ちの

詳細については、 [Web Intents](https://dev.twitter.com/docs/intents)で見られる。

### PHPで`http_build_query`関数を使用すると便利です

PHPを使用する場合は、[`http_build_query()`関数](http://www.php.net/http_build_query)を利用しよう。 `urlencode()`まで知ることによって処理して、コードが配列ですっきりと整理になるからいい。以下のように書いてくれれば良い。

	<?php
	$tweet_share_url_query_string = http_build_query(
		array(
			'text' => 'ウェブで話す',
			'url' => 'http://jp.mytory.net',
			'via' => 'mytory',
			'related' => 'mytory',
		);
	);
	$tweet_share_url = "https://twitter.com/intent/tweet?" . $tweet_share_url_query_string;
	?>
	<a href="<?php echo $tweet_share_url ?>" target="_blank">Twitterの共有</a>

それほど複雑でない。

一応、今回の記事では、 Twitterの共有に終わらせて次の文章では、残りのSNSサービスの共有URLを作成する方法を説明する。他のものはURLが過ぎるとなるので、実際あまり説明することもない;
