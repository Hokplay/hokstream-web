import type { ArticleSection } from '@/ui/feature/translation/FeaturesPageTranslation.ts';

import './AdditionalFeatures.scss';

interface AdditionalFeaturesProps {
  data: ArticleSection;
}

function AdditionalFeatures({ data }: AdditionalFeaturesProps) {
  return (
    <section className="additional-features">
      {data.articles.map(item => (
        <div className="feature-item" key={item.title}>
          <div className="feature-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="feature-text">
            <h2 uno-text="$Primary">{item.title}</h2>
            <p x-class="lg-24px">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default AdditionalFeatures;
