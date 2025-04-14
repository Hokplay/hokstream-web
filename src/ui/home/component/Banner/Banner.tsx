import Tags from '@/ui/home/component/Tags/Tags.tsx';
import ContactUsLink from '@/shared/ui/component/ContactUsButton/ContactUsLink.tsx';

interface BannerProps {
  title: string;
}
function Banner({ title }: BannerProps) {
  return (
    <section
      x-class="py-30px md-flex-row md-flex-items-center"
      uno-flex="~ col justify-between gap-20px"
    >
      <div x-class="md-order-2">
        <h1 x-class="my-0 text-45px md-text-60px lg-text-96px">{title}</h1>
        <Tags />
        <ContactUsLink />
      </div>
      <div
        x-class="w-full aspect-628/644 overflow-hidden"
        uno-border="rounded-20px"
      >
        <img
          x-class="w-100% h-100% object-cover object-right"
          src="/images/home/Landing_Hero_Image.png"
          alt="Streaming on phone"
        />
      </div>
    </section>
  );
}

export default Banner;
