import { translations } from '@/ui/privacyPolicy/translation/translations.ts';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';

function PrivacyPolicy() {
  const { locale } = useTranslation();
  const content = translations[locale];

  return (
    <div>
      <h2 uno-text="$Secondary 36px">{content.pageTitle}</h2>
      <p uno-text="$Text 20px">{content.description}</p>
      {content.sections.map(section => (
        <section key={section.title} x-class="pl-20px">
          <h3 x-class="mb-0" uno-text="$Accent 36px">
            {section.title}
          </h3>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} x-class="whitespace-pre-line" uno-text="$Text 20px">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
      <span uno-text="$Secondary 20px">{content.lastUpdated}</span>
    </div>
  );
}

export default PrivacyPolicy;
