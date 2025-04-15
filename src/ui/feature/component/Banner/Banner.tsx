interface BannerProps {
  title: string;
  image: string;
}

function Banner({ title, image }: BannerProps) {
  return (
    <div
      x-class={`relative lg-block h-85vh lg-h-auto lg-pt-60px bg-[url(${image})] lg-bg-none overflow-hidden items-center`}
      uno-bg="no-repeat [position:60%_50%] cover"
      uno-flex="~"
    >
      <div x-class="absolute w-120% left-[-42%] aspect-1/1 top-1/2 translate-y--1/2 bg-$Base opacity-90 rounded-full lg-hidden" />
      <h1 className="my-0 xl-text-96px z-2 pl-10px max-w-60%" uno-text="64px">
        {title}
      </h1>
      <div x-class="hidden lg-block h-full lg-h-auto max-w-951px mx-auto aspect-951/511 rounded-20px overflow-hidden">
        <img x-class="w-full h-full" src={image} alt={title} />
      </div>
    </div>
  );
}

export default Banner;
