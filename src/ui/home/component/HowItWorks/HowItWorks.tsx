import type { HowItWorksSection } from '@/ui/home/translation/HomeTranslation.ts';

import './HowItWorks.scss';

interface HowItWorksProps {
  data: HowItWorksSection;
}

function HowItWorks({ data }: HowItWorksProps) {
  const { traditionalProduction, communityProduction } = data;
  return (
    <section className="how-it-works">
      <h2>{data.title}</h2>

      <div className="md-flex-row" uno-flex="~ col items-center gap-30px">
        <div x-class="flex-1">
          <h3 x-class="p-[8px_16px] w-fit mx-auto bg-$Secondary text-#ffffff rounded-40px">
            {traditionalProduction.title}
          </h3>
          <p
            uno-text="$Accent"
            x-class="px-25px font-bold mb-20px lg-text-20px"
          >
            {traditionalProduction.description}
          </p>
          <div className="mx-auto bg-#ffffff rounded-40px shadow-[2px_4px_4px_0_rgba(0,0,0,0.25)]">
            <img
              x-class="w-full max-w-320px"
              src={traditionalProduction.image}
              alt={traditionalProduction.title}
            />
          </div>
        </div>

        <div className="vs">VS</div>

        <div x-class="flex-1">
          <h3 x-class="p-[8px_16px] w-fit mx-auto bg-$Secondary text-#ffffff rounded-40px">
            {communityProduction.title}
          </h3>
          <p uno-text="$Accent 20px" x-class="px-25px font-bold mb-20px">
            {communityProduction.description}
          </p>
          <div className="mx-auto bg-#ffffff rounded-40px shadow-[2px_4px_4px_0_rgba(0,0,0,0.25)]">
            <img
              x-class="w-full max-w-320px"
              src={communityProduction.image}
              alt={communityProduction.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
