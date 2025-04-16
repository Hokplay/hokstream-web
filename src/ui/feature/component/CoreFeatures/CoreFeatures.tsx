import type { MultiLocationSection } from '@/ui/feature/translation/FeaturesPageTranslation.ts';

import './CoreFeatures.scss';

interface CoreFeaturesProps {
  data: MultiLocationSection;
}

const CoreFeatures = ({ data }: CoreFeaturesProps) => {
  return (
    <section className="core-features-section">
      <div className="container">
        <h2 className="section-title">{data.title}</h2>

        <div className="module-badge">
          <span>{data.title}</span>
        </div>

        <div className="mb-40px max-w-720px mx-auto overflow-hidden">
          <img x-class="w-full" src={data.image} alt="Broadcasting interface" />
        </div>

        <div className="feature-cards-grid">
          {data.items.map(item => (
            <div className="feature-card" key={item.title}>
              <div className="feature-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="feature-content">
                <div className="feature-title">{item.title}</div>
                <div className="feature-description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
