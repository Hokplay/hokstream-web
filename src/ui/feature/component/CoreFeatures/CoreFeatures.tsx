import type { MultiLocationSection } from '@/ui/feature/translation/FeaturesPageTranslation.ts';

import './CoreFeatures.scss';

interface CoreFeaturesProps {
  title: string; // TODO: 暫時，應拆出去
  data: MultiLocationSection;
}

const CoreFeatures = ({ title, data }: CoreFeaturesProps) => {
  return (
    <section className="core-features-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>

        <div className="module-badge">
          <span>{data.title}</span>
        </div>

        <div className="mb-40px max-w-720px mx-auto overflow-hidden">
          <img x-class="w-full" src={data.image} alt={data.title} />
        </div>

        <div className="feature-cards-grid">
          {data.items.map(item => (
            <div
              className="feature-card bg-#ffffff rounded-20px overflow-hidden"
              key={item.title}
            >
              <div className="feature-image aspect-320/200">
                <img
                  x-class="w-full h-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div x-class="p-20px">
                <div
                  className="my-10px font-bold lg-text-24px"
                  uno-text="20px $Primary"
                >
                  {item.title}
                </div>
                <div className="feature-description lg-text-20px">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
