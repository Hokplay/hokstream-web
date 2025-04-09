import { useTranslation } from '@/i18n/hook/useTranslation.ts';

function ContactUsButton() {
  const { t } = useTranslation();

  return (
    <a
      href="mailto:contact@sportsmesh.com"
      target="_blank"
      x-class="block max-w-max bg-$Primary cursor-pointer no-underline leading-28px"
      uno-text="#ffffff"
      uno-border="none rounded-20px"
      uno-p="x-20px y-4px"
      rel="noreferrer"
    >
      {t('contact')}
    </a>
  );
}

export default ContactUsButton;
