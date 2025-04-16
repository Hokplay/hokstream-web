import FeatureCards from '@/ui/feature/component/FeatureCards/FeatureCards.tsx';
import CoreFeatures from '@/ui/feature/component/CoreFeatures/CoreFeatures.tsx';
import VideoProcessing from '@/ui/feature/component/VideoProcessing/VideoProcessing.tsx';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import Banner from '@/ui/feature/component/Banner/Banner.tsx';
import { translations } from '@/ui/feature/translation/translations.ts';
import ProductHighlights from '@/ui/feature/component/ProductHighlights/ProductHighlights.tsx';
import AdditionalFeatures from '@/ui/feature/component/AdditionalFeatures/AdditionalFeatures.tsx';

import './Features.scss';

function FeatureView() {
  const { locale } = useTranslation();
  const content = translations[locale];

  return (
    <div className="features-page">
      <section x-class="max-w-1200px mx-auto">
        <Banner data={content.bannerSection} />
        <ProductHighlights data={content.productHighlightsSection} />
      </section>
      <CoreFeatures />
      <VideoProcessing
        data={content.coreFeatureSection.sportsBehaviorSection}
      />
      <div x-class="max-w-1200px mx-auto">
        <AdditionalFeatures data={content.coreFeatureSection.articleSection} />
        <FeatureCards />
      </div>
    </div>
  );
}

export default FeatureView;
