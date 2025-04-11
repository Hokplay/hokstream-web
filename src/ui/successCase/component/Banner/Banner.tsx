interface BannerProps {
  title: string;
}

function Banner({ title }: BannerProps) {
  return (
    <section x-class="py-30px md-flex-row" uno-flex="~ col justify-between">
      <h1 x-class="text-50px md-text-60px lg-text-96px">{title}</h1>
      <div x-class="w-full md-w-65% aspect-845/644 rounded-20px overflow-hidden">
        <img
          x-class="w-full h-full object-cover"
          src="/images/caseStudy/CaseStudy_Hero_Image.JPG"
          alt="eSports streaming setup"
        />
      </div>
    </section>
  );
}

export default Banner;
