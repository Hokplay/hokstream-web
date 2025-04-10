import Tags from '@/ui/home/component/Tags/Tags.tsx';
import ContactUsButton from '@/shared/ui/component/ContactUsButton/ContactUsButton.tsx';

interface BannerProps {
  title: string;
}
function Banner({ title }: BannerProps) {
  return (
    <section
      uno-flex="~ gap-20px items-center"
      x-class="max-w-1200px mx-auto"
      uno-p="y-60px"
    >
      <div x-class="aspect-628/644 overflow-hidden" uno-border="rounded-20px">
        <img
          x-class="w-100% h-100% object-cover object-right"
          src="/images/Landing_Hero_Image.png"
          alt="Streaming on phone"
        />
      </div>
      <div>
        <h1 x-class="my-0" uno-text="96px">
          {title}
        </h1>
        <Tags />
        <ContactUsButton />
      </div>
    </section>
  );
}

export default Banner;
