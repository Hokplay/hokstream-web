import type { ProductHighlightsSection } from '@/ui/feature/translation/FeaturesPageTranslation.ts';

import './ProductHighlights.scss';

interface ProductHighlightsProps {
  data: ProductHighlightsSection;
}

function ProductHighlights({ data }: ProductHighlightsProps) {
  return (
    <section className="product-highlights">
      <div className="container">
        <h2 uno-text="$Secondary 32px" className="lg-36px">
          {data.title}
        </h2>
        <div className="" uno-flex="~ justify-center wrap">
          {data.highlights.map(item => (
            <div
              key={item.title}
              uno-flex="~ col items-center"
              x-class="p-10px lg-flex-row gap-15px w-50% lg-w-30%"
            >
              <img src={item.icon} alt={item.title} x-class="w-80px h-80px" />
              <div className="highlight-content text-center lg-text-left">
                <h3 x-class="text-$Primary">{item.title}</h3>
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
