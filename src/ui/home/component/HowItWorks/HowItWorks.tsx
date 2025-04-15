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
        <div className="traditional bg-#ffffff">
          <h3>{traditionalProduction.title}</h3>
          <p>{traditionalProduction.description}</p>
          <div className="flow-diagram">
            <img
              src={traditionalProduction.image}
              alt={traditionalProduction.title}
            />
          </div>
        </div>

        <div className="vs">VS</div>

        <div className="social bg-#ffffff">
          <h3>{communityProduction.title}</h3>
          <p>{communityProduction.description}</p>
          <div className="flow-diagram">
            <img
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
