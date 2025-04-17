import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import ProductionStats from '@/ui/caseStudy/component/ProductionStats/ProductionStats.tsx';
import TournamentSection from '@/ui/caseStudy/component/TournamentSection/TournamentSection.tsx';
import CapabilitiesCarousel from '@/ui/caseStudy/component/CapabilitiesCarousel/CapabilitiesCarousel.tsx';
import Banner from '@/ui/caseStudy/component/Banner/Banner.tsx';
import EventsGallery from '@/ui/caseStudy/component/EventsGallery/EventsGallery.tsx';
import Partners from '@/ui/caseStudy/component/Partners/Partners.tsx';
import GrassrootsSports from '@/ui/caseStudy/component/GrassrootsSports/GrassrootsSports.tsx';
import { translations } from '@/ui/caseStudy/translation/translations.ts';

function CaseStudyView() {
  const { locale } = useTranslation();
  const content = translations[locale];

  return (
    <>
      <Banner data={content.bannerSection} />
      <div x-class="px-16px xl-px-0 max-w-1280px mx-auto">
        <ProductionStats data={content.productionStatsSection} />
        <TournamentSection data={content.tournamentSection} />
        <CapabilitiesCarousel data={content.tournamentSection.carouselItems} />
        <EventsGallery data={content.eventsGallerySection} />
        <Partners data={content.partnersSection} />
        <GrassrootsSports data={content.grassrootsSection} />
      </div>
    </>
  );
}

export default CaseStudyView;
