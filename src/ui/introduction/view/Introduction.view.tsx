import Banner from '@/ui/introduction/Banner/Banner.tsx';
import CoreValue from '@/ui/introduction/CoreValue/CoreValue.tsx';
import ScenariosSection from '@/ui/introduction/ScenariosSection/ScenariosSection.tsx';
import { translations } from '@/ui/introduction/translation/translations.ts';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';

function IntroductionView() {
  const { locale } = useTranslation();
  const content = translations[locale];

  return (
    <div x-class="pb-80px">
      <div x-class="pb-60px px-20px xl-px-0 max-w-1280px mx-auto">
        <Banner data={content.bannerSection} />
        <CoreValue data={content.coreValueSection} />
      </div>
      <ScenariosSection data={content.scenarioSection} />
    </div>
  );
}

export default IntroductionView;
