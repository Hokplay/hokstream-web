import type { ArticleSection } from '@/ui/feature/translation/FeaturesPageTranslation.ts';
import Row from '@/shared/ui/component/Row/Row.tsx';
import Col from '@/shared/ui/component/Col/Col.tsx';

import './AdditionalFeatures.scss';

interface AdditionalFeaturesProps {
  data: ArticleSection;
}

function AdditionalFeatures({ data }: AdditionalFeaturesProps) {
  return (
    <section className="additional-features">
      {data.articles.map(item => (
        <Row
          key={item.title}
          gutter={[24, 16]}
          x-class="py-20px"
          align={{ md: 'middle' }}
        >
          <Col xs={24} md={13}>
            <div x-class="aspect-16/9 rounded-20px overflow-hidden">
              <img
                x-class="w-full h-full object-cover"
                src={item.image}
                alt={item.title}
              />
            </div>
          </Col>
          <Col xs={24} md={11}>
            <div>
              <h2 x-class="mb-10px md-mt-0 lg-text-36px" uno-text="$Primary">
                {item.title}
              </h2>
              <p x-class="lg-text-24px text-16px leading-normal">
                {item.description}
              </p>
            </div>
          </Col>
        </Row>
      ))}
    </section>
  );
}

export default AdditionalFeatures;
