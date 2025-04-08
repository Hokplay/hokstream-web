import { useTranslation as useReactI18NextTranslation } from 'react-i18next';
import type { SupportedLocale } from '../SupportedLocale.ts';

interface Translation {
  t: (key: string, options?: Record<string, unknown>) => string;
  i18n: {
    language: SupportedLocale;
    changeLanguage: (language: SupportedLocale) => Promise<void>;
  };
  locale: SupportedLocale;
  changeLocale: (locale: SupportedLocale) => Promise<void>;
}

export function useTranslation(): Translation {
  const { t, i18n } = useReactI18NextTranslation();

  const locale: SupportedLocale = i18n.language as SupportedLocale;

  return {
    t,
    i18n: {
      language: locale,
      changeLanguage: async language => {
        await i18n.changeLanguage(language);
      }
    },
    locale,
    async changeLocale(locale) {
      await i18n.changeLanguage(locale);
    }
  };
}
