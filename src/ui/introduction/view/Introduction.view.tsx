import Banner from '@/ui/introduction/Banner/Banner.tsx';
import CoreValue from '@/ui/introduction/CoreValue/CoreValue.tsx';

import './Introduction.scss';

function IntroductionView() {
  return (
    <div>
      <div x-class="pb-60px px-15px max-w-1200px mx-auto">
        <Banner />
        <CoreValue />
      </div>
    </div>
  );
}

export default IntroductionView;
