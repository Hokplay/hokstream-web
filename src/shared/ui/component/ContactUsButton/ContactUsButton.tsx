import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import { contactConfig } from '@/config/contactConfig.ts';

function ContactUsButton({ ...props }) {
  const { t } = useTranslation();

  return (
    <a
      href={`mailto:${contactConfig.email}`}
      target="_blank"
      x-class={[
        'block max-w-max bg-$Primary cursor-pointer no-underline leading-28px',
        props.className
      ]}
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
