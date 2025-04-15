import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import Partners from '@/ui/home/component/Partners/Partners.tsx';
import Banner from '@/ui/home/component/Banner/Banner.tsx';
import { translations } from '@/ui/home/translation/translations.ts';
import HowItWorks from '@/ui/home/component/HowItWorks/HowItWorks.tsx';

function HomeView() {
  const { locale } = useTranslation();
  const { bannerSection, howSportsmeshWorksSection, partnersSection } =
    translations[locale];

  return (
    <>
      <div className="px-20px xl-px-0 max-w-1200px mx-auto">
        <Banner data={bannerSection} />
        <HowItWorks data={howSportsmeshWorksSection} />
      </div>
      <section className="p-[40px_0_100px_0]">
        <Partners data={partnersSection} />
      </section>
    </>
  );
}

export default HomeView;
