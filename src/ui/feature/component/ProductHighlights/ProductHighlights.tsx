import type { ProductHighlightsSection } from '@/ui/feature/translation/FeaturesPageTranslation.ts';

import './ProductHighlights.scss';

interface ProductHighlightsProps {
  data: ProductHighlightsSection;
}

function ProductHighlights({ data }: ProductHighlightsProps) {
  return (
    <section className="product-highlights">
      <div className="container">
        <h2 className="section-title">{data.title}</h2>
        <div className="highlights-grid">
          {data.highlights.map(item => (
            <div className="highlight-item" key={item.title}>
              <div className="highlight-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <div className="highlight-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductHighlights;
