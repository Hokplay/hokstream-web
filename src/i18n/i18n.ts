import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import yaml from 'js-yaml';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['translations'],
    defaultNS: 'translations',
    backend: {
      loadPath: '/locale/{{lng}}/{{ns}}.yaml',
      parse: (data: string) => yaml.load(data),
      cache: false
    },
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false
    },
    detection: {
      caches: ['cookie'],
      order: ['cookie', 'navigator'],
      lookupCookie: 'back-office-locale'
    }
  });

export default i18n;
