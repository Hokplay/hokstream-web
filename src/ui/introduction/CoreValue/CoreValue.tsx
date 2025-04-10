import { data } from './data.ts';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import Row from '@/shared/ui/component/Row/Row.tsx';
import Col from '@/shared/ui/component/Col/Col.tsx';

function CoreValue() {
  const { locale } = useTranslation();

  return (
    <section>
      <h2 uno-text="36px">{data.title[locale]}</h2>
      <Row gutter={[24, 16]}>
        {data.itemList.map(item => (
          <Col key={item.id} md={12} lg={8}>
            <div>
              <div
                x-class="w-full aspect-410/280 overflow-hidden"
                uno-border="rounded-20px"
              >
                <img
                  x-class="w-full h-full"
                  src={item.image}
                  alt={item.description[locale]}
                />
              </div>
              <p
                x-class="mt-10px"
                uno-text="$Primary 24px center"
                uno-font="bold"
              >
                {item.description[locale]}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default CoreValue;
