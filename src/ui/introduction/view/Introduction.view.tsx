import Banner from '@/ui/introduction/Banner/Banner.tsx';
import CoreValue from '@/ui/introduction/CoreValue/CoreValue.tsx';

import './Introduction.scss';

function IntroductionView() {
  return (
    <div>
      <div x-class="pb-60px px-20px xl-px-0 max-w-1200px mx-auto">
        <Banner />
        <CoreValue />
      </div>
    </div>
  );
}

export default IntroductionView;
