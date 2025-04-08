import { google } from 'googleapis';
import fs from 'fs';
import path, { dirname } from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.dev.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SPREADSHEET_ID = process.env.I18N_GOOGLE_SPREADSHEET_ID; // 替換 Google Sheet ID
const CREDENTIALS_PATH = path.join(
  __dirname,
  process.env.I18N_GOOGLE_SERVICE_ACCOUNT_CREDENTIALS_FULL_FILE_NAME
); // 金鑰 JSON 檔案位置

async function generateI18nFilesFromGoogleSheet() {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  // 獲取試算表的元數據以取得工作表名稱
  const spreadsheetMetadata = await sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID
  });

  const sheetsList = spreadsheetMetadata.data.sheets;

  // 抓取 Languages 工作表資料
  const languageSheet = sheetsList.find(
    sheet => sheet.properties.title === 'Languages'
  );
  const definedLanguages = [];
  if (languageSheet) {
    const languageData = await fetchSheetData(
      sheets,
      SPREADSHEET_ID,
      languageSheet.properties.title
    );

    // 獲取已定義的語言代碼
    const [headers, ...rows] = languageData;
    const languageIndex = headers.indexOf('language');
    if (languageIndex !== -1) {
      rows.forEach(row => {
        if (row[languageIndex]) {
          definedLanguages.push(row[languageIndex].trim());
        }
      });
    }
    await saveLanguagesJSON(languageData);
  } else {
    console.error('Error: 未找到 "Languages" 工作表，跳過語言檔案生成。');
  }

  // 抓取 translations 工作表翻譯資料
  const translationSheet = sheetsList.find(
    sheet => sheet.properties.title === 'Translations'
  );
  if (translationSheet) {
    const translationData = await fetchSheetData(
      sheets,
      SPREADSHEET_ID,
      translationSheet.properties.title
    );
    await processTranslationData(translationData, definedLanguages);
  } else {
    console.error('Error: 未找到 "translations" 工作表，無法生成翻譯檔案。');
  }
}

// 抓取 Google Sheet 資料
async function fetchSheetData(sheets, spreadsheetId, sheetName) {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: sheetName
  });

  return response.data.values;
}

// 處理翻譯資料
async function processTranslationData(rows, definedLanguages) {
  if (rows && rows.length) {
    const i18nData = {};
    const keyOccurrences = {}; // 儲存每個 key 的出現行數

    const titles = rows[0]; // 取得標題行
    const validTitles = titles.filter(
      title => title === 'key' || definedLanguages.includes(title)
    );

    rows.slice(1).forEach((row, rowIndex) => {
      const key = row[0];
      const lineNumber = rowIndex + 2; // 加 2 因為索引從 0 開始，且資料從第 2 行起

      if (key && key.trim() !== '') {
        if (keyOccurrences[key]) {
          keyOccurrences[key].push(lineNumber);
        } else {
          keyOccurrences[key] = [lineNumber];
        }

        validTitles.slice(1).forEach((title, langIndex) => {
          const value = row[langIndex + 1] || '';
          if (value.trim() !== '') {
            if (!i18nData[title]) {
              i18nData[title] = {};
            }
            i18nData[title][key] = value;
          }
        });
      }
    });

    const duplicateKeys = Object.entries(keyOccurrences).filter(
      ([, occurrences]) => occurrences.length > 1
    );
    if (duplicateKeys.length > 0) {
      console.error('檢測到重複的 Key：');
      duplicateKeys.forEach(([key, occurrences]) => {
        console.error(`Key: "${key}" 重複於行數: ${occurrences.join(', ')}`);
      });
      console.error('Error: 發現重複的 Key，停止生成 YAML 文件。');
      return;
    }

    await saveYamlFiles(validTitles, i18nData);
  } else {
    console.error('Error: 沒有找到翻譯資料。');
  }
}

// 儲存 translation.yaml 文件
async function saveYamlFiles(titles, i18nData) {
  const outputDir = path.join(__dirname, '../public/locale');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    for (const lang of titles.slice(1)) {
      const langDir = path.join(outputDir, lang);
      if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true });
      }

      const fileContent = yaml.dump(i18nData[lang] || {});
      fs.writeFileSync(
        path.join(langDir, 'translations.yaml'),
        fileContent,
        'utf8'
      );
    }
    console.log(
      `Translation.yaml 文件已儲存在 /public/locale，各語系資料夾為 ${titles
        .slice(1)
        .join(', ')}！`
    );
  } catch (error) {
    console.error('Error: 儲存 translation.yaml 文件時發生錯誤：', error);
  }
}

// 處理 Languages 工作表並儲存為 JSON
async function saveLanguagesJSON(rows) {
  const outputPath = path.join(__dirname, '../src/i18n/languages.json');

  if (rows && rows.length > 0) {
    const [headers, ...dataRows] = rows;
    const languageIndex = headers.indexOf('language');
    const nameIndex = headers.indexOf('name');

    if (languageIndex === -1 || nameIndex === -1) {
      console.error(
        'Error: "Languages" 工作表缺少 "language" 或 "name" 欄位。'
      );
      return;
    }

    const languages = dataRows.map(row => ({
      language: row[languageIndex],
      name: row[nameIndex]
    }));

    try {
      fs.writeFileSync(outputPath, JSON.stringify(languages, null, 2), 'utf8');
      console.log('語言檔案已成功儲存至 src/i18n/languages.json');
    } catch (error) {
      console.error('Error: 儲存語言檔案時發生錯誤：', error);
    }
  } else {
    console.error('Error: 無法生成 languages.json，"Languages" 工作表沒有資料');
  }
}

// 執行函式
generateI18nFilesFromGoogleSheet().catch(console.error);
