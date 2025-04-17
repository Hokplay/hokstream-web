import type { ProductionStatsSection } from '@/ui/caseStudy/translation/CaseStudyTranslation.ts';
import Row from '@/shared/ui/component/Row/Row.tsx';
import Col from '@/shared/ui/component/Col/Col.tsx';

interface ProductionStatsProps {
  data: ProductionStatsSection;
}
function StatsSection({ data }: ProductionStatsProps) {
  return (
    <div className="py-40px">
      <h1 x-class="m-0 text-lg-36px" uno-text="32px">
        {data.title}
      </h1>
      {data.subtitles.map((subTitle, index) => (
        <p key={index} x-class="mt-5px mb-40px" uno-text="$Text 20px">
          {subTitle}
        </p>
      ))}

      <Row justify="center">
        {data.items.map((item, index) => (
          <Col key={index} xs={8} x-class="relative">
            <div x-class="h-full text-center" uno-flex="~ col justify-between">
              <div
                x-class="mb-10px md-text-16px max-w-90%"
                uno-text="14px $Accent"
                uno-font="semibold"
              >
                {item.title}
              </div>
              <span
                x-class="text-42px lg-text-64px"
                uno-text="$Primary"
                uno-font="semibold"
              >
                {item.stat}
              </span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default StatsSection;
