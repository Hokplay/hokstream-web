import type { BannerSection } from '@/ui/caseStudy/translation/CaseStudyTranslation.ts';

interface BannerProps {
  data: BannerSection;
}

function Banner({ data }: BannerProps) {
  const { title, image } = data;

  return (
    <section
      x-class="relative h-85vh lg-h-auto lg-pt-60px lg-max-w-1280px lg-mx-auto overflow-hidden"
      uno-flex="~ items-center"
    >
      <img
        x-class="lg-hidden absolute w-full h-full object-cover object-[65%_50%] h-full"
        src={image}
        alt={title}
      />
      <div x-class="absolute min-w-460px w-125% left-[-42%] aspect-1/1 top-1/2 translate-y--1/2 bg-$Base opacity-90 rounded-full lg-hidden" />
      <h1
        className="my-0 xl-text-96px z-2 pl-10px max-w-60% lg-max-w-40% lg-mb-20px"
        uno-text="50px $Secondary"
      >
        {title}
      </h1>
      <div x-class="hidden lg-block h-full lg-h-auto max-w-845px mx-auto aspect-845/644 rounded-20px overflow-hidden">
        <img x-class="w-full h-full" src={image} alt={title} />
      </div>
    </section>
  );
}

export default Banner;
