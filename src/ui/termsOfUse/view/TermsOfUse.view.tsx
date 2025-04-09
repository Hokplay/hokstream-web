import TermsOfUse from '@/ui/termsOfUse/component/TermsOfUse/TermsOfUse.tsx';
import BackNavigation from '@/shared/ui/component/BackNavigation/BackNavigation.tsx';

function TermsOfUseView() {
  return (
    <div x-class="max-w-1200px mx-auto" uno-p="t-60px b-80px">
      <BackNavigation />
      <TermsOfUse />
    </div>
  );
}

export default TermsOfUseView;
