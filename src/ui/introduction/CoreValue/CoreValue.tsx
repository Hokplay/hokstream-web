import type { CoreValueSection } from '@/ui/introduction/translation/IntroductionPageTranslation.ts';
import Row from '@/shared/ui/component/Row/Row.tsx';
import Col from '@/shared/ui/component/Col/Col.tsx';

interface CoreValueProps {
  data: CoreValueSection;
}

function CoreValue({ data }: CoreValueProps) {
  return (
    <section>
      <h2 uno-text="36px">{data.title}</h2>
      <Row gutter={[24, 16]}>
        {data.items.map(item => (
          <Col key={item.title} xs={24} md={12} lg={8}>
            <div>
              <div
                x-class="aspect-410/280 overflow-hidden"
                uno-border="rounded-20px"
              >
                <img
                  x-class="w-full h-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <p
                x-class="mt-10px lg-text-24px"
                uno-text="$Primary 20px center"
                uno-font="bold"
              >
                {item.title}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default CoreValue;
