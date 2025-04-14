import { useRef } from 'react';
import Segmented from '@/shared/ui/component/Segmented/Segmented.tsx';
import { translations } from '../translations/translations.ts';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import ScenarioSectionItem from '@/ui/introduction/ScenarioSectionItem/ScenarioSectionItem.tsx';
import Affix from '@/shared/ui/component/Affix/Affix.tsx';

import './ScenariosSection.scss';

function ScenariosSection() {
  const { locale } = useTranslation();
  const content = translations[locale];
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const options = content.scenarioSections.map(section => ({
    label: section.title,
    value: section.id
  }));

  function onChange(value: string) {
    const section = sectionRefs.current[value];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Affix offsetTop={80}>
        <div x-class="py-3px bg-$Accent">
          <Segmented
            x-class="segmented max-w-1200px mx-auto font-bold"
            options={options}
            block
            shape="round"
            onChange={onChange}
          />
        </div>
      </Affix>
      <div x-class="px-16px xl-px-0 max-w-1200px mx-auto">
        {content.scenarioSections.map(section => (
          <ScenarioSectionItem
            key={section.id}
            section={section}
            sectionRef={el => (sectionRefs.current[section.id] = el)}
          />
        ))}
      </div>
    </>
  );
}

export default ScenariosSection;
