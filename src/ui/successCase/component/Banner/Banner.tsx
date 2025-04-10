interface BannerProps {
  title: string;
}

function Banner({ title }: BannerProps) {
  return (
    <section x-class="max-w-1200px mx-auto" uno-flex="~">
      <h1 uno-text="96px">{title}</h1>
      <div
        x-class="max-w-845px aspect-845/644 overflow-hidden"
        uno-border="rounded-20px"
      >
        <img
          x-class="w-full h-full object-cover"
          src="/images/CaseStudy_Hero_Image.JPG"
          alt="eSports streaming setup"
        />
      </div>
    </section>
  );
}

export default Banner;
