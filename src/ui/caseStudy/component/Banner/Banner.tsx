import type { BannerSection } from '@/ui/caseStudy/translation/CaseStudyTranslation.ts';

interface BannerProps {
  data: BannerSection;
}

function Banner({ data }: BannerProps) {
  return (
    <section x-class="py-30px md-flex-row" uno-flex="~ col justify-between">
      <h1 x-class="text-50px md-text-60px lg-text-96px">{data.title}</h1>
      <div x-class="w-full md-w-65% aspect-845/644 rounded-20px overflow-hidden">
        <img
          x-class="w-full h-full object-cover"
          src={data.image}
          alt={data.title}
        />
      </div>
    </section>
  );
}

export default Banner;
