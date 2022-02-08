/*
## 確認事項
- リポジトリの公開範囲は正しいか
- README.gsは書いたか
  - 最初の行は`¥/*`
  - 最後の行は`*¥/`
- GithubActionsは導入したか（システム情報を参照）
- secretsを設定しているか
  - EMAIL
  - GASID(Translate GASID: https://github.com/shimajima-eiji/--GAS_v5_Translate)

## 経緯

## 主要リンク
- [リポジトリ](https://github.com/shimajima-eiji/--GAS_v5_)
- [Gdrive:ディレクトリ](https://drive.google.com/drive/my-drive)
- [Gdrive:スクリプト](https://script.google.com/home)
- [Gdrive:スプレッドシート](https://docs.google.com/spreadsheets)

## システムバージョン
ver1.0.0

## 制限


## 環境変数
|key|value|用途|備考|
|---|---|---|---|

## デバッガ
```
function debug_(関数名) {

}
```

## パラメータ
### doGet(ない場合は削除)
エンドポイントの後に?(キー1)=(値1)&(キー2)=(値2)でパラメータを渡す

```
# GASはリダイレクトするので-Lは必須
curl -X GET -L (エンドポイント)?(パラメータ)
```

#### リクエスト
|キー|キー必須|想定される値|概要|
|---|-------|---------|---|

#### レスポンス
レスポンスは([String] or [JSON String] or [JSONS String])形式

|キー|欠損の可能性|想定される値|概要|
|---|----------|---------|---|

### doPost(ない場合は削除)
各ライブラリに準拠

#### リクエスト
|キー|キー必須|想定される値|概要|
|---|-------|---------|---|

#### レスポンス
レスポンスは([String] or [JSON String] or [JSONS String])形式

|キー|欠損の可能性|想定される値|概要|
|---|----------|---------|---|

レスポンスは([String] or [JSON String] or [JSONS String])形式

## システム管理情報
| システム名称 | 情報 |
| --- | --- |
| READMEフォーマットのバージョン | ver2.2022.02.08 |
| README.gs -> README.md | https://github.com/shimajima-eiji/--GAS_v5_Template/blob/main/.github/workflows/convert_gs2md.yml |
| translate ja -> en | https://github.com/shimajima-eiji/--GAS_v5_Template/blob/main/.github/workflows/translate_ja2en.yml |

*/
