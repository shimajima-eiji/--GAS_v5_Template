## Checklist
- Is the disclosure range of the repository correct?
- Did you write README.gs?
  - The first line is `\ / *`
  - The last line is `* \ /`
- Have you introduced Github Actions (see system information)
- Are you setting secrets?
  - EMAIL
  - GASID (Translate GASID: https://github.com/shimajima-eiji/- GAS_v5_Translate)

## background
Use [Google Apps Script GitHub Assistant] (https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo?hl=ja) to support the construction of an efficient development environment.

## Main links
-[Repository] (https://github.com/shimajima-eiji/--GAS_v5_)
  -[Template] (https://github.com/shimajima-eiji/--GAS_v5_Template)
-[Gdrive: Directory] (https://drive.google.com/drive/my-drive)
-[Gdrive: Script] (https://script.google.com/home)
-[Gdrive: Spreadsheets] (https://docs.google.com/spreadsheets)

## System version
ver1.0.0

## limit


## environmental variables
| key | value | Usage | Remarks |
| --- | ----- | --- | ---- |

## Debugger
```
function debug_(関数名) {

}
```

## Parameters
### doGet (Delete if not)
Pass the parameter after the endpoint with? (Key 1) = (value 1) & (key 2) = (value 2)

```
# GASはリダイレクトするので-Lは必須
curl -X GET -L (エンドポイント)?(パラメータ)
```

#### request
| Key | Key Required | Expected Value | Overview |
| --- | ------- | --------- | --- |

#### Response
The response is in ([String] or [JSON String] or [JSONS String]) format

| Key | Possibility of Missing | Expected Value | Overview |
| --- | ---------- | --------- | --- |

### doPost (Delete if not available)
Compliant with each library

#### request
| Key | Key Required | Expected Value | Overview |
| --- | ------- | --------- | --- |

#### Response
The response is in ([String] or [JSON String] or [JSONS String]) format

| Key | Possibility of Missing | Expected Value | Overview |
| --- | ---------- | --------- | --- |

The response is in ([String] or [JSON String] or [JSONS String]) format

## System management information
| System name | Information |
| --------- | ---- |
| README format version | ver4.2022.02.08 |
README.gs-> README.md | https://github.com/shimajima-eiji/--GAS_v5_Template/blob/main/.github/workflows/convert_gs2md.yml |
translate ja-> en | https://github.com/shimajima-eiji/--GAS_v5_Template/blob/main/.github/workflows/translate_ja2en.yml |

