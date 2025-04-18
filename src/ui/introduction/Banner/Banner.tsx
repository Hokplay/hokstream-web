import type { BannerSection } from '@/ui/introduction/translation/IntroductionPageTranslation.ts';
import Row from '@/shared/ui/component/Row/Row.tsx';
import Col from '@/shared/ui/component/Col/Col.tsx';

interface BannerProps {
  data: BannerSection;
}
function Banner({ data }: BannerProps) {
  return (
    <Row x-class="py-30px" align="middle">
      <Col xs={24} md={10}>
        <h2 x-class="my-0 mb-10px text-50px md-text-60px lg-text-96px">
          {data.title}
        </h2>
      </Col>
      <Col xs={24} md={14}>
        <div x-class="aspect-16/9 rounded-20px overflow-hidden">
          <iframe
            uno-border="none"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/JWJCzhxRZFw?si=-hzC9VwYYIuXTjEw"
            title="SportsMesh"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Col>
    </Row>
  );
}

export default Banner;
