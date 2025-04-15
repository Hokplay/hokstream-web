import Tags from '@/ui/home/component/Tags/Tags.tsx';
import ContactUsLink from '@/shared/ui/component/ContactUsButton/ContactUsLink.tsx';
import type { BannerSection } from '@/ui/home/translation/HomeTranslation.ts';

interface BannerProps {
  data: BannerSection;
}

function Banner({ data }: BannerProps) {
  return (
    <section
      x-class="py-30px md-flex-row md-flex-items-center"
      uno-flex="~ col justify-between gap-20px"
    >
      <div x-class="md-order-2">
        <h1 x-class="my-0 text-45px md-text-60px lg-text-96px">{data.title}</h1>
        <Tags data={data.tags} />
        <ContactUsLink />
      </div>
      <div
        x-class="w-full aspect-628/644 overflow-hidden"
        uno-border="rounded-20px"
      >
        <img
          x-class="w-100% h-100% object-cover object-right"
          src={data.image}
          alt={data.title}
        />
      </div>
    </section>
  );
}

export default Banner;
