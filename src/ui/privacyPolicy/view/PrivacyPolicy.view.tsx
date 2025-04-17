import PrivacyPolicy from '@/ui/privacyPolicy/component/PrivacyPolicy/PrivacyPolicy.tsx';
import BackNavigation from '@/shared/ui/component/BackNavigation/BackNavigation.tsx';

function PrivacyPolicyView() {
  return (
    <div x-class="max-w-1280px px-20px lg-px-0 mx-auto" uno-p="t-60px b-80px">
      <BackNavigation />
      <PrivacyPolicy />
    </div>
  );
}

export default PrivacyPolicyView;
