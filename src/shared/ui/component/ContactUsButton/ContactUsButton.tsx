import { useTranslation } from '@/i18n/hook/useTranslation.ts';

function ContactUsButton() {
  const { t } = useTranslation();

  return (
    <button
      x-class="min-h-32px bg-$Primary mt-30px cursor-pointer"
      uno-text="#ffffff"
      uno-border="none rounded-20px"
      uno-p="x-20px y-4px"
    >
      {t('contact')}
    </button>
  );
}

export default ContactUsButton;
