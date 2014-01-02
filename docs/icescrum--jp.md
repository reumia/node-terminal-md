オープンソースのアジャイル/スクラムプロジェクト管理ツール、iceScrum基本的な概念と使い方
==================================================================================

[iceScrum](http://www.icescrum.org/en/)は、[スクラムの概念][]を適用した優れたプロジェクト管理ツールであり、オープンソースである。ライセンスは、GNU Affero GPL V3、部分的にLGPL V3とウェブサイトに記載されている。

Javaで書かれていて、Linuxでtomcatに回すとされるが、ウィンドウやMacの場合は、インストーラがある。ダウンロードしてそのまま実行すると、面倒な過程なしにすぐに実行されます。

内蔵DBを使用する場合には、データベースにも設定することがないのに糸を使用する場合には内蔵DBはお勧めしません。公式文書でもそのように述べている。私も内蔵DBを使用してから、データをすべて飛ばして食べた経験がある。このため、実使用するには、外部データベースを使用してください。外部データベースに接続して使用するには、手動で設定をしなければならない。

インストールと設定は、[Documentation](https://www.kagilum.com/documentation)を参照ください。ヨギソン使い方を説明するものですのでインストール方法は、別々に説明しない。検索してみると、いくつかの出てくるからそれ参考にもなる。ただし、iceScrum最新バージョンは、設定ファイルがgroovy型であるということを知っておいてください。古い設定ファイル方式に基づいて説明する昔の文章がありますので、よく斜めに行くの。

[iceScrum Cloud](https://www.kagilum.com/icescrum-hosting)に登録して使用することもできる。無料アカウントは一人だけで利用可能な1つのプロジェクトを与える。この場合にはユーザ名かのチームメンバーみんなで共有し、テストして見ることもできる。

インターフェースが英語であるため、用語は、単に英語で表記した。

スクラムとは
---------

スクラムの概念については、スクラムで検索すると、本が複数あるので、一冊選んで読んれる。ツールから導入するよりも、管理の概念を身につけるのが優先だ。

ウィキペディアの[スクラムの概念][]を参考にしてもなるだろうが、私が思うに、スクラムの方法論の核心は、一定期間ごとに動作するバージョンアップされた製品を販売するために、一定期間中断することなくスプリント(Sprint)することにある。つまり、二つが重要である。

1。__スクラムの目的:__徐々に急速に発展した製品。したスプリント期間(Sprint)が完了したら、改善された製品が出てくる。
1。__方法:__たスプリント期間(Sprint)の間は、その期間に処理することにしたことだけである。誰も途中で要件を変更することができません。誰もスクラムチームの他の仕事をさせることができない。このようにして頻繁な要件の変更を封鎖する。

スクラムの残りの部分は、このスプリントを成功させるためのアドバイスである。

非常に簡単な説明なので、スクラム関連の本をぜひ読んでください。検索するとたくさん出てくると私別々にお勧めはしない。

iceScrumは、元のスクラムの概念に若干の変形を加えたのだ。例えば、元のスクラムの概念には、 Releaseは別にない。各SprintがReleaseた。しかし、 iceScrumは、複数のSprintとしたReleaseを構成する。デフォルト設定されているのはSprint 6個あたりRelease一つだ。また、元のスクラムでは、月にSprint期間に推薦するiceScrumでは、 2主に推薦する。この記事は、元のスクラムの概念ではなくiceScrumツールの概念を説明する。

参考までに、 Sprint期間を28日にして、 Release期間も28日と、元のスクラムの概念にiceScrumを使用することになる。

することの基本的な単位と流れ
-----------------------

iceScrumにすることの基本的な単位は、 ​​Storyた。 Storyはまた、いくつかのTaskに分けて処理することになる。だからStoryは、いくつかのこまごまとしたことことで分割することができるいくつかの小さな単位程度に考えると良い。例えばStoryは"お知らせペースト"のだろうし、 Taskは、 "リストページの作成"、 "書き込みページの作成"、 "書き込みDB入力する"のように詳細なことだ。

Storyは、技術的な内容だけでなく、必要な機能全体をいう。開発者だけでなく、企画者やデザイナーのように、プロジェクトに関連するすべての人々がSandboxでStoryを提供する。このときの提案は、 Storyコンセプトにマトドゥンないマトドゥン構わない。 Scrum Masterの世話を整理するとされる。

Sandboxに提案されたStoryの中でScrum Masterが承認(Accept)したのがProduct Backlogに入ったり、 Featureになったり、 urgent (緊急) taskになる。詳しいことは後に説明する。とにかく大核心は、 Scrum Masterが承認(Accept)しないと、どのStoryもプロジェクトの一部になることがないということだ。

Product Backlogの各StoryのEffortを設定してくれればもうそれSprint planに割り当てることができるようになる。

SprintのStoryを割り当てた後、 Activate Sprintボタンを押すと、 Sprintが開始される。これにより、各StoryでTaskを作成することができるようになる。

その構成単位は、 ​​**Project > Release > Sprint > Story > Task**だ。つまり、複数のTaskでStoryが構成され、複数のStoryにSprintが構成される。そして、いくつかのSprintとReleaseが構成され、複数のReleaseにProjectが構成される。

ページの概念接続
-----------------

各ユニットの設定を変更するには、どのメニューに行くかどうか身につけることが必要である。現在のTaskを確認するには、Sprint Plan]タブに行かなければならない。 Sprintを確認して、設定を変更するには、Release Plan]タブに行くし、Releaseを確認して、設定を変更するには、Timelineでなければならない。

したSprintの中にあるStoryの順序を変更するには？ Releaseタブでなければならない。最初にこれが少しかすんでいるために、適応ば大丈夫だ。

iceScrum全体のデモを見るのは簡単である。 [iceScrumプロジェクトを管理するiceScrumページ](http://tools.icescrum.org/p/ICESCRUM#project)に行ってみるとなる。右上のConnectボタンを押して、登録(Registration)してログインすると、Timeline、Release plan、Sprint planを見ることができてもSandboxにStoryを提供することもできる。

프로젝트 만들기
--------------

![iceScrum メイン画面](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-1.png)

iceScrumに一度ログインすると、上のような画面が出てくる。左上の**Project> Create**をクリックすると、新しいプロジェクトを作成することができる。

![icescrum create project](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-create-project.png)

上の画像は、プロジェクト作成画面なのに、いちいち説明はしない。

情報を入力し右下の"Next"ボタンを押すと、次のステップに移る。 KeyはURLで使用される。

Choose your team(チームメンバー均等に)
----------------------------

Choose your team項目は含まれてチームを均等にする。 IDで検索をして追加するとされるが、プロジェクトを作成し、自分の役割が何であるかを見てみよう。 "PO＆SM"とされているのだ。これはProject OwnerとScrum Masterの略です。

Define your practices(プラクティスの定義)
------------------------------------

Define your practicesの部分にいくつかの複雑なのが出てくる。画像を先に見てみよう。

![Define your practices tab](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-define-your-practices.png)

* __Suite used for estimation :__することに労力を測定するときに、数値を選択することになるが、このときセレクトボックスに1,2,3,4,5,6,7,8,9,10というふうに数字が出るようにするか、または[フィボナッチ数列][](1 、2、 3、 5 、 8 、 ​​13、 21、 34)で数字が出るようにするか決めるのだ。実際には5を越えてやるの労力を正確に1単位で測定するのは不可能だから数字が大きくなるほど経験則に大きく努力をとるのは合理的と思われる。だから、フィボナッチ数列に努力を選択することを好む。
一つ、念頭に置くのは、このときの数字は、数字だけということだ。チーム内規にこの数字は抽象的な努力を意味するようにするか、時間を意味するようにするか、 1が10分を意味するようにするだけで決めればされる。
* __Disable Estimation(effort = 1):__努力の測定を無効にするためのオプションです。これですべてやるの労力を1として計算する。つまり、ただすべきことを件数のみ処理するものである。プロジェクト測定をも詳細にすると、むしろ測定疲労感が生じることがあるそうするのも方法の一つだ。
* __Hide weekends in charts :__チャートで週末を抜いてしまうのオプション。週末に仕事しなければ、グラフが階段状になってきれいではないのだ。グラフを美麗にするためのオプションだと思えば良い。
* __Automatically set a story as done when all its tasks are done :__ Storyの中のすべてのTaskが完了したら、 Storyを完了したものかを定義します。私はNoにしておく。すべてのTaskが完了した再Taskが浮かぶ場合があるからである。
* __Auto create task on empty story when sprint is activated :__ Activate sprintボタンを押して、 Sprintを有効にしたときにすべてのストーリーの基本Taskを一つずつ打ち込んでくれる定めるだろう。 Taskは、基本的にStoryと同じ名前で生成される。 Taskが一つしかない単純なStoryを多く使用している場合はこれをyesにしておいたときに楽だ。これはプロジェクトごとに世話をすると仮定される。
* __Auto assign team member on start task :__ Taskをin progress状態にすると、その作成者に自動的にTaskを割り当てられるようにすることだ。することをスクラムマスターが割り当てられている場合が多い場合はnoにするとされるだろうし、そうではなく、自分が仕事を自分が直接選ぶ場合が多い場合は、 yesにするとなるだろう。
* __Display recurrent tasks :__ Sprint Plan画面でrecurrent tasks (繰り返しtask)の項目を見せてくれるかを選択する。繰り返しが必要なtaskがある場合はyesにする。私はなくてnoにした。まあ、大規模なプロジェクトでは1日1回必ず全体Testを手動で実行する必要がある場合繰り返しTaskを利用することもできる。
* __Display urgent tasks :__ Sprint Plan画面でurgent tasks (緊急task)の項目を見せてくれるかを選択する。 Sprintは元の他のすべての要求を無視して、スプリントの開始前にすることにしたStoryのみに焦点を当てたプロジェクト管理方法である。しかし、現実の世界では思うようにならない。 Sprintが盛んに進めあっても、Webサイトが急に伸ばした場合は修理をしなければならない。そのようなtaskを書いて入れるところがurgent tasks項目です。メンテナンスチームが別にあって製品の製作チームがメンテナンスを気にする必要がない場合は、この項目を有効にする必要がないことだ。そうでなければ使うようになるだろうから有効にしよう。
* __Limit of urgent tasks in progress(0 = no limit):__緊急taskの数を制限する設定です。あまりにも多くならないようにする機能であるはずなのにお好みでみましょう。

Start your project (プロジェクト開始)
--------------------------------

Define your practicesをすべて設定し、[Next ]ボタンを押すと、 Start your project画面が出てくるが、これも設定よくしなければならない。下の画像を見てみよう。

![iceScrum start your project tab](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-start-your-project.png)

すべてのプロジェクトは、複数のReleaseがある。したReleaseは、複数のSprintで構成される。上の画像を見ると、 Default sprint durationという項目があり、 iceScrumではこれがデフォルトで14になっている。私が見た"スクラム"という本では、月を例として提示した。ヨトン別の日に干渉されずに集中してプロジェクトにぶら下がった後、再度やるを選定するた期間をどのくらいに決めるか書いてくれるんだけど、私はこれを14日単位にしたら一つのReleaseが複数のSprintで構成されるため、 Releaseは2週間の整数倍に設定するのが良いことだ。つまり、 Sprintが2週間ならしてReleaseは2州や4週間、または6週間の養生されるのが良いことだ。何といって。

それでは、次の説明を見てみよう。

* __Project start date :__プロジェクト開始日です。 SprintとReleaseがぴったり合うように設定するといいのですが、まあ、何の関係はない。プロジェクト開始日にSprintをactivateすることはないからだ。
* __First sprint start date :__最初Sprint開始日である。週単位で壊すのが基本的には良いはずなのに、最初Sprintが、他のSprintより日数が少ないこともあるからあまり気にする必要はない。最初Sprintが水曜日に開始して次の日曜日に終わるようにして、その次のSprintからは月曜日に始まり、日曜日に終了するように設定すればよい。設定は、 Release planに変更することができる。
* __Default Sprint duration(days):__たSprintが、数日で構成されるようにするか決めることだ。大まかに2主とするのが自然のままである。したSprintの間は、他に気にせず、そこに集中するのが原則である。そしてしたSprintが終わって次の課題を均等にする。長すぎる問題を迅速に対応することができなくなり、短すぎると、注意があまりにも頻繁に乱れることだ。
スクラム原則だそうでませんが、機能上はSprint別の日付を必ず守らなければならわけではない。つまり、変更が可能である。ただしReleaseの基本的なSprintを自動的に割り当てたりすると、 Sprintの期間をこれで使用しますので、よく作成しましょう。
この項目の値自体も、後で__ Project > Practices__メニューから変更することができる。
* __Release end date :__最初Releaseの終了日を言うつもりあまり気にせずに設定すればよい。一度iceScrumでは、基本的に12週をしたReleaseの期間に(つまり、 ReleaseあたりSprint 6)が、これはプロジェクトごとに異なるだろうから世話を設定してください。後でTimelineのページに行って変更することもできる。ヨトン、 Sprintラン餓鬼が合うように設定すると便利だ。
* __Vision :__このプログラムのビジョンを書くのアイテムです。チームメンバーがプロジェクトの中核を毎回再確認することができるよう簡潔な内容を書いて入れよう。もちろんない少なくて済む。

ここまですると、プロジェクトが作られる。

Dashboard
---------

以下は、ダッシュボードの画面です。たいしたものではない。あれこれ触るとなる。

![iceScrum dashboard](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-dashboard.png)

SandboxにStory提案する
------------------------

やるの管理を開始するところがまさにSandboxだ。ここは何でも書くことができる。スクラムは、開発者だけだけのツールではなく、開発者ではない人でも使用するためのツールだ。そして、それらの人々はすぐにSandboxの提案をする。スクラムマスターは、その提案を受け入れるか、または拒否することができる。

![iceScrum sandbox](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-sandbox.png)

上の画像はiceScrumプロジェクトのサンドボックスです。各ストーリーの上にマウスを置くと、 Descriptionがツールチップに浮かぶ。

新しいストーリーを提供するには、 Sandbox左上の[New]ボタンを押してください。これにより、以下のような画面が出てきStoryを作成することになる。

![iceScrum add new story on sandbox](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-add-new-story.png)

Typeは3種類がある。 User story 、 Story defect 、 Technical story 。あえて分類せずに使用できますが知っているはしておこう。

* __User story :__ 、一般的に提供する機能である。 " QnA掲示板" 、 "自動ログアウト機能"など。
* __Story defect :__バグをいう。 " QnA掲示板を確認し、ダブルクリックすると、記事を二度作成されるだろ修正"こんなもの。
* __Technical story :__多分技術的なことを言う、 "配列をことごとくオブジェクトに変更"このようなことだ。

Descriptionに使えば、マウスを持ち上げたときにツールチップに浮かぶようになる。ここではいくつかの詳細を書くのが後で役立つ。

Story templateは使ったことがないのでわからないが、基本的な設定をしておいたものをインポートして使用しているんじゃないと思います。

Story attachmentは、添付ファイルを付けることができる機能である。しかし、ハングルファイル名が問題だ。アップロードはされますが、ダウンロードすると、ハングルが正常に出ない。さらに英語やスペースを含めずハングルのみのファイル名のファイルをアップロードした後、ダウンロードする。 hwpようにダウンロードがされて、LinuxやMacで隠しファイルになってしまう。だから、できるならファイル名を英語に変えて上げよう。

Story notesは、長く書くことができるんだけど、これはStoryをクリックして入らなければので、面倒です。できるならDescriptionに書いて本当に長く詳細がある場合にのみ、これを使用しましょう。

![story icon](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-story-icon.png)

上の画像を一度見てみよう。左はtechnical storyであり、右側はstory defectだ。 technical storyには、スパナのアイコンが付いて、 Story defectは、感嘆符のアイコンが付く。上の画像にはありませんが、添付ファイルが含まれているStoryには、ポストイットの画像の左下にクリップの形が現れる。

Storyコンテキストメニュー
------------------

提案されたストーリーで、逆三角形の形の上にマウスを置くと、下の図のようにコンテキストメニューが表示されます。

![iceScrum Story context menu on sandbox](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-story-context-on-sandbox.png)

コンテキストメニュー項目の[Acceptance tests](http://www.agile-tools.net/acceptancetesting.asp)は何であるか分からなくて使ってみたこともない。説明を見ると、 Storyが完了したことをテストしたいが、掲示板Storyが完了すると、 "リスト表示>ライティング>書いた文章を読む>文を変更する"などのテスト手順を書くのかも分からない。

Accept as storyはこのStoryを承認してProduct Backlogに送信する機能である。 Product Backlogに入ってEffortを測定したStoryだけがSprintに配置することができる。

Accept as featureは、このStoryをFeatureにする機能である。 Featureは、カテゴリのような概念だと思えば良いようだ。 [iceScrumのプロジェクト管理チャートに行ってみるとFeatureをどのように活用しているか見ることができる(ログインが必要です、下の画像) 。](http://tools.icescrum.org/p/ICESCRUM#feature/productParkingLotChart)Storyを提供するときこのStoryが所属するFeatureを選ぶことができる。

下の画像は、各Featureごとに何パーセントのStoryを完了したことを示すグラフである。 Y軸とFeatureとしてどのようなものかを知ることができる。

![iceScrum Feature 例](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-feature-example.png)

iceScrumチームが作成したFeatureの一つはExports/Printます(上の画像上下から2番目) 。 Exports/Print Featureに属しStoryの一つは、 [Print post - it in sandbox (サンドボックスを付箋の形で印刷することができるようにする)](http://tools.icescrum.org/p/ICESCRUM/#story/582)である。

Featureは使用次第でしょうに、 iceScrumチームは、 Storyを分類するために使用することで使用している。そうすれば、 Featureは、プロジェクトの開始から終了までずっと生き続けるだろう。

Updateは、修正である。 Copyは、同じものをもう一つ作ることだ。同様のStoryを少しずつ異なって作成するときに使用します。 Deleteキーを知らないはずはオプゲトゴ。

ああ、承認するとき、複数の付箋を選択し、左上のAcceptボタンを押して、一度に承認することもできる。 ` Ctrl +クリック` (マックは` Cmd +クリック`)を使用すればよい。マウスで範囲を指定して選択することもできる。

Sprint plan画面でStoryを承認する方法もある。下の画像を見てみよう。

![drag and drop accept](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-drag-and-drop-accept-story.png)

Product Backlogページの左サイドバーには、 SandboxのStoryが出てくるそれをドラッグ＆ドロップしてProduct Backlogに置き換えるとされる。

Product Backlog
---------------

承認されたやるべきことがすべて集まっている所がProduct Backlog (製品押された日)である。各StoryのEffortを次のように設定すれば良い。

![story effort](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-story-effort.png)

マウスで疑問符(？)をクリックすると、このようにeffortを設定することができる。

すべてのStoryのeffortを設定した場合はチームの会議を通した今回のSprintにすることを決めよう。 Product BacklogのすべてのStoryを一目で確認Product BacklogメニューのPublish as ...を使用する。これにより、さまざまな形式でリストをエクスポートすることができますが、 Word 2007のDocument(docx)やOpenDocument Text(odt)を選択しましょう。 Rich Text Format(rtf)だけだ割れて出てきて、 Portable Document Format(PDF)はハングルが空白で出てくる。

ワード形式で抽出された文書をそのまま印刷してもチームのメンバーと、部単位で分けて持って行会議をしましょう。だから、今回のSprintにすることを決めたら今Sprint Planのページに移動してSprintのStoryを配置してみましょう。

Sprint Plan
-----------

Sprint Planのページに行ってみると、以下のように当初のプロジェクト設定に最初のSprintが作られているのを見ることができる。しかし、まだactivateをしていないため、有効にした状態ではない。 Storyも全く入っていない。

![Sprint plan date](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-sprint-plan-date.png)

Storyを追加した後にactivateをしてみよう。もちろん、 Sprintをactivateした後も、 Storyを追加することができます。

Storyを追加する方法は簡単である。左側のサイドバーに見ると、 Product Backlogがある。そこにあるStoryをドラッグ＆ドロップでSprintに向かって移動される。下の画像参照。

![Story 配置する](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-allocate-story.png)

順序は一応考えていない移動してもよい。順序は後でRelease Plan側調整することができる。

Effortを測定していないStoryは、左サイドバーに表示されていないという点も知っておけ。

今回のSprintにすることにしたStoryの両方を配置した後にActivate sprintボタンを押して、 Sprintを活性化する。

![activate sprint](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-activate-sprint-button.png)

Activate sprintボタンを押すと、実際に有効にするのかと尋ねる。 [OK]をクリックすると、 Activate sprintボタンがClose sprintボタンに変更されます。 Sprintが終了した時、このボタンを押して下さい。

Sprint終了は、原則上は予定日にするのが正しいだろうが、機能的には必ず予定日にしてもよい。 iceScrumでSprintは、予定日を過ぎてもClose sprintをするまでは、引き続き有効になっている。予定日前にClose sprintボタンを押して、 Sprintを終了してもよい。終了日を変更することもできる。つまり、機能上はSprint終了日が表示に過ぎないということを知っておこう。

Sprint Planのコンテキストメニュー
--------------------------

Sprint Planのページでは、各Storyの逆三角形の上にマウスを置くと、下の画像のようにコンテキストメニューが表示されます。

![context menu on sprint plan](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-context-menu-on-sprint-plan.png)

大まかに説明してみましょう。

* __Add a task :__はStoryのためのtaskを追加する。
* __Update :__変更
* __Copy :__このStoryをコピーしてSandboxに入れる。
* __Dissociate :__ StoryをProduct Backlogに戻る。 Storyのtaskはすべて削除されます。 Sprintが終了すると、 Storyを除去するために使用すると思えば良い。もちろん進行中のときもいくらでも使用できます。
* __Shift to next sprint :__ 、文字通り次のSprintに送ることだ。
* __Declare as done :__完了処理

Storyがすべて完了したら、 Sprintが終了される。しかし、 SprintのStoryがすべて収まると同じでなければ？スクラムでは、そのような場合、すべきこと(iceScrumでは、 Storyになりたい)を与えると言う。次のSprintにするだけだからだ。

Task
-----

各Storyを開発者が分け持って、それぞれのStoryを細かく分けてtaskを作成する。

taskにもeffortを少なくしている。 StoryのコンテキストメニューからAdd a taskを選択してみましょう。

出てくる画面は、基本的にadd new story画面のようだ。他のことが一つありますが、 Remaining timeという項目です。これは残りの時間を記録することだ。起動時に、そのTask総かかる時間を書けばされる。やはり1をしばらくの時間と考えるかは、各チームの世話をすることである。 iceScrumでは単に1をpointと呼ぶ。

ここでは、いくつかのTaskのRemaining timeが10pointだったとしよう。作業中にこれを変更してくれれば良い。今日9分し、明日の1分だけ処理し終わるとしよう。これにより、これを1にし、仕事となるのだ。 3pointで記録したTaskを一日中したが、明日も2pointほど多くなければ仕事が終わるようであれば退社するとき2pointでRemaining timeを調整して移れば良い。この場合は、一日中仕事をしなかったのではなく最初から3pointで計算したのが間違ってたのだ。達成感を感じるにはそもそも算定をよくしましょう。また、このような場合がありますのでiceScrumを勤怠管理ツールを使用することはできないという点も知っておこう。

後でプロジェクトの進捗状況のグラフを表示するのに、グラフには、このポイントを合算したのが記録される。それですることのポイントが増えていることを行ていることを確認することができる。グラフがきれいに落ちない場合は、 Sprint planを間違って立てたと判断すればよい。

私もまだきちんと落ちてグラフを見なかったが、 Storyを細かく分けて開始してもtaskを進めていると、見過ごしていたことが浮かんで追加し続けることになるからである。だからSprintが進むほど、むしろtask pointが上昇する場合があった。

taskをドラッグ·アンド·ドロップして、 in progress上で置き換えればtaskを開始することになる。 Doneに向かって移動すると、そのtaskは完了したことになる。

ヒント
----

次はtaskの例である。

![Sprint plan example](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-sprint-plan-example.png)

iceScrumを作るチームのiceScrumのSprint planをキャプチャしたもので面白いものを見ることができる。一度taskのremaining timeを正しくつけずに使用している。

次に、キャプチャされた日付は、 2013年10月10日だが、このSprintの終了日は9月6日である。 9月6日に終了されるべきだっSprintを一ヶ月以上しているのである。

iceScrumチームがiceScrumを誤って使用しているのだろうか？一度スクラム原則としてだけで見たらそうだが、実際にはわからないと見るのが正しい。例えば、明示的に、より重要な仕事を処理するのに、月が遅れたとすれば、それはよくしたことになるだろうからだ。評価は、作業した人々が率直な議論を介して行うことである。ツールは判断のソースを提供するだけである。

Release Plan
------------

今Release Planのページに行ってみよう。一度各Sprintが自動的に計算されて配置されているのを見ることができる。

ここでは、それぞれのStoryの順序を調整したり、 Story配置をすることができる。今回のSprintのStoryを特定のSprintに送信することもできる。サイドバーのProduct Backlogで必要SprintでStoryを配置することもできる。

![release plan](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-release-plan.png)

Sprint Planのページで動作し、各Storyのコンテキストメニューも同じように動作します。

前述のようにRelease PlanはSprintを変更することができる。各Sprintの逆三角形の上にマウスを置くと、コンテキストメニューが登場する。下の画像を見てみよう。

![Sprint context menu](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-sprint-context-menu.png)

* __Open :__このSprintのSprint planのページに行く。
* __Close :__がSprintを閉める。 Close Sprintのような機能である。台無しにしないように。一度閉じると、開くことができない。
* __Update :__がSprintを変更する。終了日を変更することができ、有効でないSprintなら開始日を変更することができる。
* __Dissociate all :__はSprintに完了していないすべてのStoryをすべてProduct Backlogに戻る。 Sprint終了日なのにまだ完了していないStoryがあるとき、すべてのStoryをProduct Backlogに戻り、 Sprintを閉じようと書かれるのだ多分。

Timeline
--------

次に、ボールの主要なページはtimelineです。以下のようにできた。

![timeline](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-timeline.png)

R1に表示されたのがRelease1という意味で#がついたのがSprintだ。 R1の横にある逆三角形をクリックすると、やはりreleaseを変更することができる。

Chart
-------

iceScrumを使用して面白いのチャートだ。 Sprintの進捗状況をグラフで示している。 Sprint plan 、 Release plan 、 Timelineの両方でチャートを見ることができる。私のSprint planのチャートだけ見てみよう。

![timeline](http://dl.dropboxusercontent.com/u/15546257/blog/mytory/icescrum/icescrum-sprint-burnup-chart-in-points.png)

これburnup chartだ。黄色の線は、 taskの総point 、緑線は完了したtaskの総pointだ。黄色の線がますます増加したのは、仕事をすればするほどtaskのpointが多くなったということだが、私の場合は最初に算定を誤って発生したことである。最初に算定をしなかったがSprintを進行しながら算定した場合にも同様のグラフが出てくるので、グラフだけを見てこれができているのかないのかわからない。

緑色は、実際の仕事の進行速度を示している。緑が停滞しているだけでは、実際に仕事をしなかったのか、仕事のポイントを調整したのか明らかではない。

例えば、 2ポイント建てのtaskを終わらせたが、他のtaskのポイントを2増やした場合は緑の線は停滞している。もちろん、この時に黄色い線は上昇する。ポイントの総量は増えてからだ。上の画像で黄色のラインが86から88に上昇したとき緑のラインは、 55から55に止まっているようなことが起こったことを推測することができる。

ヨトン最も良いのは、黄色の線は平行線を描き、緑線が徐々に上昇するだろう。もちろん、私はそのようになったことは一度もない。

仕上げ
------

検索もあって、さまざまなグラフもあって、 Actorの役割もあり、どのような様々な機能がありますが、本質的に使用することは、上記のだ。私もわからないこともかなりある。

iceScrumはスクラム方式に最適化されたツールである。そして、プロジェクトを管理するためのツールで行うことを管理するためのツールではない。だから、私はその日その日の着信雑用はワンダーリスト([Wunderlist](https://www.wunderlist.com/)、ドイツ語では、フンザリストと読むだろう。まあ。)で管理し、プロジェクトに関してのみiceScrumを使用する。

のウェブサイトを管理しながら行うことができます。計画を取ってプロジェクトをするときに、プロジェクトに関連するイルゴリはiceScrumに入れて、それ以外のメンテナンスに関連するものは、ワンダーリストに入れるのだ。

ヒント2
----

iceScrumのすべてのメニューは、位置を変更することができる。ドラッグ·アンド·ドロップしてみてください。

[スクラムの概念]: http://ko.wikipedia.org/wiki/%EC%8A%A4%ED%81%AC%EB%9F%BC_(%EC%95%A0%EC%9E%90%EC%9D%BC_%EA%B0%9C%EB%B0%9C_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4)
[フィボナッチ数列]: http://ko.wikipedia.org/wiki/%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98_%EC%88%98
