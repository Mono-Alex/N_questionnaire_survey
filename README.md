# N_questionnaire_survey
- N予備校の生放送で使用しているアンケートツールを勝手に作成してみました。
- 初代のツールは冬仕様にしています。index.htmlはQitta記事用に作成して残しています。何かあったらすぐに消します。
- [初代できたかどうかアンケート](https://mono-alex.github.io/N_questionnaire_survey/)
- 現在、index_ver2.1が最新バージョンです。
- [できたかどうかアンケート（改）ver2.1](https://mono-alex.github.io/N_questionnaire_survey/index_ver2.1)
- MITライセンスでOSSにしています。
- This software is released under the MIT License, see LICENSE.txt.
---
# できたかどうかアンケートについて

![概要](https://github.com/Mono-Alex/N_questionnaire_survey/readmeImages/readme001.jpeg)

1. 先生側　できたかどうかアンケート（ツール）に記入して、生徒側に放送画面で見せる。
1. 生徒側　N予備校のアンケートの選択肢を選び、先生側に理解度を教える。
1. 先生側　理解度のパーセンテージをみて授業の進め方を変更する。

---
# 更新履歴
- Commits on Dec 11, 2017 リポジトリ作成
- Commits on Dec 19, 2017　MITライセンスの追加
- Commits on Dec 25, 2017　デザインの微修正（index_ver2.0 画面右上で背景と文字が変更できるタブの追加、テキストエリア選択時の影を非表示、テキストエリアをの外枠を丸みのあるものに変更）
-

---
# 経緯
- cssの勉強をしようとして.pureなjavascriptとcssでよく使うアンケートツールを作成
- 見た目がいまいちなのでcssのデザイン本買ってみて、雪の降るアニメーションを作った結果が初代ツールとなった。
- cssの動きとか色々できそうだからマウスでホバーしたら、動いてクリックすると背景色が変わる機能をつけてみる。現在はその機能は削除。
- 見た目をデバイスごとにいい感じにするのが環境的に難しいのでbootstrapで実装した。ver2以降
- デザインを行うことの難しさを知る←今ここ
- 使う人が、より使ってくれるような機能を増やす＝＞次回
