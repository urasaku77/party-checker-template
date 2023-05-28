# nextjs-starter
このレポジトリはNext.jsプロジェクトを作る際に必要なツール群をまとめたスターターキットである

# 使い方
## テンプレートからブランチ作成
本レポジトリ画面にある use this template をクリックしてください。このレポジトリを元にした新たなレポジトリが作成できます。

## Editorの設定
本レポジトリをクローンして各エディターで開いてください

### VSCode
- 「Prettier」のプラグインをインストールしてください
  - Prettierの設定が反映されます
- 「Jest Test Explorer」のプラグインをインストールしてください
  - ボタンでテストを実行することができます
  - 参考：https://kakkoyakakko2.hatenablog.com/entry/2019/11/03/003000
- 「Code Spell Checker」のプラグインをインストールしてください
  - 自動でスペルチェックしてくれます
  - チェックを無視したいワードがあれば、「cspell.json」ファイルに記載してください
  - 参考：https://rochefort.hatenablog.com/entry/vscode_spell_checker

#### （補足）setting.jsonの開き方
- 「command + shift + P」(Windowsの場合は「Ctrl + Shift + P」)でコマンドパレットを開く
- 検索ワードに「settings」（日本語化済みの場合は「設定」）と入力
- Preferences: Open Settings(JSON)(日本語化済みなら基本設定:　設定(JSON)を開く)を選択

## パッケージのインストール
- **npm install**を実行してください

## git hooksの有効化
- **npx simple-git-hooks**を実行してください

これで設定が完了です
プロジェクトの開発を進めることができます

## 各種コマンド
- package.jsonに記載しているコマンドに関して説明します
- 「npm run 」の後に記載しているコマンドを入れて走らせることができます

### dev
- 開発環境でのデプロイが可能です
- デフォルトでは**http://localhost:3000** にデプロイされます（pages/index.tsxがトップページ）

### build
- 本番環境で使用するアプリケーションをビルドできます

### start
- 本番環境でNext.jsを起動
- こちらも設定しなければ**http://localhost:3000** にデプロイされます

### デプロイ先の設定
- dev、prod環境それぞれで環境変数ファイルを作ることで、デプロイ先を指定できます
- その他APIキーなどの設定もできます
**※ production用の環境ファイル（.env.production）のみ用意しています（このままでは動きません）**
  参考URL：https://qiita.com/KZ-taran/items/64cad61096cf45f18c24

### lint
- eslint・prettierを使用してts(js)ファイルのフォーマットチェックを行います

### lint-css
- stylelintを使用してcssファイルのフォーマットチェックを行います

### fix
- eslint・prettier・stylelintを使用してts・cssファイルのフォーマットを行います
- 自動修正オプション付きですので、自動的に修正されます

### test
- jestを利用したテストを走らせることができます

## git hookに関して
commit前に上記のfixコマンドが自動で実行される

## package.jsonの補足
2、3行目の内容は、必要に応じてプロジェクトごとの内容に書き換えてください
ビルドには影響ないので必須ではありません

# 備考
何か不具合や疑問点などございましたら、IssueまたはPRにてご連絡ください
