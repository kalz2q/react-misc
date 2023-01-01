# react-misc

次checkboxの画像に
1. crossを入れる
2. css を云々
3. クリックしたらcrossにする


---
32-temp-dot => はじめての javascript dotinstall だが、codepen にも上げてある。
これからどう進めるか。中断。
で、いま shopping list codepen をこちら react-misc に持ってきてとりあえず動かす
=> 33-shopping-list-with-total
これを簡略化して checklist だけのプログラムにする。
それで最低 2 コマの div 画像に onclick で cross を付ける予定。
=> 34
=> 35

---

アイデア
30-ok-emotion...
が動いたが、styled を使っているので codepen で動かない。
reactcommunity の transition group の解説の例をやってみる。
codesandbox => codepen への翻訳
https://codesandbox.io/s/csstransition-component-m77l2vp00x?from-embed
CSSTransition => 動いた 31 => bootstrap とか codepen で動くか
Transition => 動いている例が示されていないのでパス
SwitchTrnasition
TransitionGroup

---

30-ok-emotion...
// react-transition-group 使ってみた
// https://qiita.com/kzkapr1129/items/887b756cd36b5905fbd2
// ---
// react-transition-group にする
// なぜなら framer-motion, react-spring は範囲が広すぎる
// animation 全体をやりたいわけではない。
// 今はむしろ react を理解する助けになるようなツールが使いたい
// とりあえず
// https://qiita.com/takeshisakuma/items/67578529789939c900ff
// をなぞる

---

React-Router が必要らしい。
qiita https://qiita.com/teradonburi/items/fb91e5feacab5071cfef
ReactJS で作る今時の SPA 入門（基本編）
github
https://github.com/teradonburi/learnReactJS/tree/ReactRouter
本家のマニュアルと tutoril があった。
https://reactrouter.com/en/main/start/tutorial
どうも違うみたいと言うか follow 出来ません。
はてなの記事
https://dev-k.hatenablog.com/entry/20211115/1636952945
React【SPA】react-router-dom v6 でルーティング
これを読んでみよう。
codepen を ReactRouter で検索。
https://codepen.io/danbuda/pen/WGOPbo
これを実装してみよう。

---

simple-single-page-application-demo
forked => fork すると元記事がわからなくなるね
https://codepen.io/kalz2q/pen/abjzdPm
方針 html => react の App の return に書き換えて表示してみる。
=> ここまではできた。各ページを置き換える方法がわからない。
とりあえず save => 23-temp-spa

---

react checkbox components
https://codepen.io/Nfinleymusic/pen/OgqzpV
とりあえずなぞってみようか。

---

https://codepen.io/oliviale/pen/xxboXzo toggles

## と言うのがクリックを多数処理していたので参考。html のところに pug で書かれているがこれはロジックが追えるのではないか。とりあえず fork しようか。 => checkbox だった。

wenting zhang css icon animation
=> 22-css-icon-animation

---

ボックスにバッテン
20-content2716 => フォントを使うと良くない。なぜならフォントは CSS とは別の体系なので、コントロールが出来ない。場所が不安定。
21-box-cross を作る。材料は overlap material icon

---

css icon 使い方
CSS でアイコンを作成するには？おすすめのアイコンフォントサービスも紹介
https://web-camp.io/magazine/archives/89316

wenting zhang css
=> 19-css-icon-menu

---

overlap-material-icon => dvi.failed_icon
=> 面白かったし勉強にもなったが求めているものとは違う。

---

accordion-dot
に戻る

---

一休みして
React によるアコーディオンメニューの実装方法
https://nishinatoshiharu.com/react-accordion/#_react-spring

useRef による DOM の高さの取得 <= 実験してみよう

---

accordion-dot
をやってみる。考え方がぜんぜん違うので云々。

---

react accordion
accordion - react - hook
Devyan
https://codepen.io/lovemaui/pen/bGwwxwx
が動いているのでこれでやろう。
=> とりあえず書き写したところ props が云々。Component スタイルを解こう。
一旦 09-temp-accordion-devy.tsx.txt として保存した。
=> 動いたのだが個別に動かない。個別に isOpen のデータを持たせれば良いと思うがどうか。
=> list 表示でないので key が不要なのはそれはそれで構わないか。

---

【React】React でボタンをクリックすると、内容が表示されるアコーディオンを実装する
これは <div ref={contentEl}
でエラーになりました。

---

accordion
qiita めっちゃ汎用的なアコーディオンメニューを作ろう
は font-awesome と scss を使っているのでボツ。
dotinstall のをやろう。

---

hello names を作ってみて、文字列処理をもう少し学びたいと思った。
課題 heredoc から id 入りの json を作る

[Tips] JavaScript で CSV を読み込んで JSON を作る
react-csv2json

---

HTML【フォーム】12 ～出力欄（output）
https://programmercollege.jp/column/2716/
を読んでみよう。
=> 読みだしたらそもそも react で数値を云々。
=> react documents を読もう。

---

形は後で整えるとしてとりあえず copy と paste ボタンを考える
=> copy は動くが past が云々。
=> 一旦諦める。

---

最初は
navigator clipboard codepen
=> navigator-clipboard.txt

下の句

# react-misc
