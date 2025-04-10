import Tags from '@/ui/home/component/Tags/Tags.tsx';
import ContactUsButton from '@/shared/ui/component/ContactUsButton/ContactUsButton.tsx';

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
        <ContactUsButton />
      </div>
      <div
        x-class="w-full aspect-628/644 overflow-hidden"
        uno-border="rounded-20px"
      >
        <img
          x-class="w-100% h-100% object-cover object-right"
          src="/images/Landing_Hero_Image.png"
          alt="Streaming on phone"
        />
      </div>
    </section>
  );
}

export default Banner;
