import type { BannerSection } from '@/ui/introduction/translation/IntroductionPageTranslation.ts';

interface BannerProps {
  data: BannerSection;
}
function Banner({ data }: BannerProps) {
  return (
    <section x-class="py-30px md-flex-row" uno-flex="~ col justify-between">
      <h2 x-class="text-50px md-text-60px lg-text-96px">{data.title}</h2>
      <div x-class="w-full md-w-65% aspect-845/644 rounded-20px overflow-hidden">
        <img x-class="w-full h-full" src={data.image} alt={data.title} />
      </div>
    </section>
  );
}

export default Banner;
