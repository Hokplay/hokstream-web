import zhTW from 'antd/es/locale/zh_TW';
import enUS from 'antd/es/locale/en_US';
import type { Locale as AntdLocale } from 'antd/es/locale';
import type { SupportedLocale } from './SupportedLocale.ts';

const antdLocaleMap: Record<SupportedLocale, AntdLocale> = {
  'zh-TW': zhTW,
  'en-US': enUS
};

export function getAntdLocale(i18nLanguage: SupportedLocale): AntdLocale {
  return antdLocaleMap[i18nLanguage];
}
