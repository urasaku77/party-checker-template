# 仲間大会用パーティチェッカーテンプレート

# 機能

- ルール、使い方、注意事項の記載
- TN の入力
- 禁止ポケモン、制限ポケモンの設定

# 設定箇所

## タイトル、日時

pages\index.tsx
components\title\title.tsx

## ルール

components\rule\rule.tsx

## 使い方

components\step.tsx

## 注意事項

components\caution\caution.tsx

## ポケモン

data\pokemon.tsx

- 選択できるポケモンが不足している場合は「**list**」に追加
- 禁止したいポケモンは「**baned**」に追加
- 制限ポケモンは選択ルールの設定が可能
  - {}ごとに一つのルール
  - 「**name**」に制限したいポケモン、「**num**」に入れることのできるポケモン数を記載

# 使い方

## テンプレートからブランチ作成

本レポジトリ画面にある use this template をクリックしてください。このレポジトリを元にした新たなレポジトリが作成できます。

## Editor の設定

本レポジトリをクローンして各エディターで開いてください

### VSCode

- 「Prettier」のプラグインをインストールしてください
  - Prettier の設定が反映されます
- 「Jest Test Explorer」のプラグインをインストールしてください
  - ボタンでテストを実行することができます
  - 参考：https://kakkoyakakko2.hatenablog.com/entry/2019/11/03/003000
- 「Code Spell Checker」のプラグインをインストールしてください
  - 自動でスペルチェックしてくれます
  - チェックを無視したいワードがあれば、「cspell.json」ファイルに記載してください
  - 参考：https://rochefort.hatenablog.com/entry/vscode_spell_checker

#### （補足）setting.json の開き方

- 「command + shift + P」(Windows の場合は「Ctrl + Shift + P」)でコマンドパレットを開く
- 検索ワードに「settings」（日本語化済みの場合は「設定」）と入力
- Preferences: Open Settings(JSON)(日本語化済みなら基本設定:　設定(JSON)を開く)を選択

## パッケージのインストール

- **npm install**を実行してください

## git hooks の有効化

- **npx simple-git-hooks**を実行してください

これで設定が完了です
プロジェクトの開発を進めることができます

## 各種コマンド

- package.json に記載しているコマンドに関して説明します
- 「npm run 」の後に記載しているコマンドを入れて走らせることができます

### dev

- 開発環境でのデプロイが可能です
- デフォルトでは**http://localhost:3000** にデプロイされます（pages/index.tsx がトップページ）

### build

- 本番環境で使用するアプリケーションをビルドできます

### start

- 本番環境で Next.js を起動
- こちらも設定しなければ**http://localhost:3000** にデプロイされます

### デプロイ先の設定

- dev、prod 環境それぞれで環境変数ファイルを作ることで、デプロイ先を指定できます
- その他 API キーなどの設定もできます
  **※ production 用の環境ファイル（.env.production）のみ用意しています（このままでは動きません）**
  参考 URL：https://qiita.com/KZ-taran/items/64cad61096cf45f18c24

### lint

- eslint・prettier を使用して ts(js)ファイルのフォーマットチェックを行います

### lint-css

- stylelint を使用して css ファイルのフォーマットチェックを行います

### fix

- eslint・prettier・stylelint を使用して ts・css ファイルのフォーマットを行います
- 自動修正オプション付きですので、自動的に修正されます

### test

- jest を利用したテストを走らせることができます

## git hook に関して

commit 前に上記の fix コマンドが自動で実行される

## package.json の補足

2、3 行目の内容は、必要に応じてプロジェクトごとの内容に書き換えてください
ビルドには影響ないので必須ではありません

# 備考

何か不具合や疑問点などございましたら、Issue または PR にてご連絡ください
