import { useRef } from 'react';
import Segmented from '@/shared/ui/component/Segmented/Segmented.tsx';
import ScenarioItem from '@/ui/introduction/ScenarioItem/ScenarioItem.tsx';
import Affix from '@/shared/ui/component/Affix/Affix.tsx';
import type { ScenarioSection } from '@/ui/introduction/translation/IntroductionPageTranslation.ts';

import './ScenariosSection.scss';

interface ScenarioSectionProps {
  data: ScenarioSection;
}

function ScenariosSection({ data }: ScenarioSectionProps) {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const options = data.map(section => ({
    label: section.title,
    value: section.id
  }));

  function onChange(target: string) {
    const targetSection = sectionRefs.current[target];
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Affix offsetTop={80}>
        <div x-class="py-3px bg-$Accent">
          <Segmented
            x-class="segmented max-w-1280px mx-auto font-bold"
            options={options}
            block
            shape="round"
            onChange={onChange}
          />
        </div>
      </Affix>
      <div x-class="px-16px xl-px-0 max-w-1280px mx-auto">
        {data.map(section => (
          <ScenarioItem
            key={section.id}
            data={section}
            sectionRef={el => (sectionRefs.current[section.id] = el)}
          />
        ))}
      </div>
    </>
  );
}

export default ScenariosSection;
