import Banner from '@/ui/introduction/Banner/Banner.tsx';
import CoreValue from '@/ui/introduction/CoreValue/CoreValue.tsx';
import ScenariosSection from '@/ui/introduction/ScenariosSection/ScenariosSection.tsx';

import './Introduction.scss';

function IntroductionView() {
  return (
    <div x-class="pb-80px">
      <div x-class="pb-60px px-20px xl-px-0 max-w-1200px mx-auto">
        <Banner />
        <CoreValue />
      </div>
      <ScenariosSection />
    </div>
  );
}

export default IntroductionView;
