import type { ArticleSection } from '@/ui/feature/translation/FeaturesPageTranslation.ts';

import './AdditionalFeatures.scss';

interface AdditionalFeaturesProps {
  data: ArticleSection;
}

function AdditionalFeatures({ data }: AdditionalFeaturesProps) {
  return (
    <section className="additional-features">
      <div className="container">
        {data.articles.map(item => (
          <div className="feature-item" key={item.title}>
            <div className="feature-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="feature-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdditionalFeatures;
