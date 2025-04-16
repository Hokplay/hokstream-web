import { useMemo, useState } from 'react';
import type { CanHelpSection } from '@/ui/feature/translation/FeaturesPageTranslation.ts';

import './FeatureCards.scss';

interface FeatureCardsProps {
  data: CanHelpSection;
}

function FeatureCards({ data }: FeatureCardsProps) {
  const tabMap = useMemo(() => {
    return new Map(data.tabs.map(tab => [tab.name, tab]));
  }, [data.tabs]);

  const [activeTab, setActiveTab] = useState(data.tabs[0].name);
  const currentTabData = tabMap.get(activeTab);

  return (
    <section className="feature-cards-section">
      <h2 className="section-title">{data.title}</h2>

      <div className="w-fit mx-auto bg-$Primary-Light rounded-40px py-4px">
        {data.tabs.map(item => (
          <button
            key={item.name}
            x-class={['user-tab', { active: activeTab === item.name }]}
            onClick={() => setActiveTab(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="feature-cards-grid">
        {currentTabData?.items.map(item => (
          <div
            className="feature-card shadow-[2px_4px_4px_0_rgba(0,0,0,0.25)]"
            key={item.title}
          >
            <h3 uno-text="$Secondary 20px center">{item.title}</h3>
            <p className="" uno-text="$Primary center" uno-font="bold">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;
