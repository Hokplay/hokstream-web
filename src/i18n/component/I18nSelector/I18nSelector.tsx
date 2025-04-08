import Select from '@/shared/ui/component/Select/Select.tsx';
import { useTranslation } from '../../hook/useTranslation.ts';
import supportedLanguages from '../../languages.json';
import type { SupportedLocale } from '../../SupportedLocale.ts';

type LanguageOption = {
  label: string;
  value: string;
};

const languages: LanguageOption[] = supportedLanguages.map(item => ({
  label: item.name,
  value: item.language
}));

function I18nSelector({ ...props }) {
  const { i18n } = useTranslation();

  async function handleLanguageChange(language: SupportedLocale) {
    await i18n.changeLanguage(language);
  }

  return (
    <Select
      {...props}
      value={i18n.language}
      options={languages}
      popupMatchSelectWidth={false}
      onChange={handleLanguageChange}
    />
  );
}
export default I18nSelector;
