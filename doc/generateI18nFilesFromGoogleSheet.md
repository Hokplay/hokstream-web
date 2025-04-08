# 使用腳本從 Google Sheet 生成 i18n 的 YAML 檔案

## 獲取 Google API 憑證

按照以下步驟獲取訪問 Google Sheets 所需的 API 憑證：

1. **創建 Google Cloud 項目**
    - 前往 [Google Cloud 控制台](https://console.cloud.google.com/)
    - 點擊上方的「選擇專案」，然後「建立專案」

2. **啟用 Google Sheets API**
    - 到 Google Cloud 控制台中的「API 和服務」
    - 點選上方的「+啟用 API 和服務」
    - 在 API 程式庫搜尋「Google Sheets API」，並啟用它

3. **建立憑證**
    - 在「API 和服務」的左側 menu 中，選取「憑證」
    - 點擊上方「建立憑證」並選擇建立「服務帳戶」
    - 生成金鑰，並下載金鑰 JSON 檔案。並放在專案的 `script` 資料夾內。注意，後續請勿 git commit 該金鑰 JSON 檔

4. **共用 Google Sheet**
    - 打開與 PM 共同維護的 Google Sheet
    - 點擊右上方「共用」，並加入服務帳戶的 Email (Email 即為步驟 3. 的金鑰 JSON 檔案中的 `client_email`)。注意，基於安全性考量，應只授予服務帳戶檢視的權限，不要開放編輯



## Google Sheet 表格

使用與 PM 共同維護的 Google Sheet。該 Google Sheet 會有二個必要的工作表：
1. 「Languages 工作表」用來產生 languages.json 檔案
2. 「translations 工作表」，用來產生 i18n 要用的 YAML 檔案

**「Languages 工作表」必須為以下格式**：

| language | name |
|----------|------|
| en-US    | English   |
| zh-TW    | 中文(繁體)   |

**「translations 工作表」必須為以下格式**：
- 注意欄位的 title，script 會判斷「translations 工作表」中欄位的 title 是否有「Languages 工作表」中所定義的 language，有的話就會產生對應名稱的語系資料夾，例如產生 `zh-TW` 和 `en-US` 的資料夾

| key               | zh-TW | en-US   |
|-------------------|-------|---------|
| app.button.delete | 刪除    | Delete  |
| app.login         | 登入    | Login   |



## 使用腳本

1. 在 `.env.dev.local` 填寫 `I18N_GOOGLE_SPREADSHEET_ID` (在 Google Sheet 的網址上有)
2. 在 `.env.dev.local` 中的 `I18N_GOOGLE_SERVICE_ACCOUNT_CREDENTIALS_FULL_FILE_NAME` 填寫憑證金鑰 JSON 檔案完整名稱，包含副檔名
3. 執行以下指令，生成 YAML 檔案：

```bash
npm run dev:generate-i18n-files
```

## 檔案結構
運行腳本後：
- 會在專案的 `src/i18n`資料夾生成一個 `languages.json`的檔案，可用來生成選擇語言的下拉選單
- 會在專案的 `public/locale` 資料夾內生成語系的資料夾，語系資料夾裡會有 namespace 的 YAML 檔案

```
project/
├── public/
│   └── locale/
│       ├── zh-TW/
│       │   └── translations.yaml
│       └── en-US/
│           └── translations.yaml
├── src/
│   └── i18n/
│       └── languages.json
└── script/
    ├── generateI18nFilesFromGoogleSheet.js
    └── your-google-service-account-credentials.json
```
