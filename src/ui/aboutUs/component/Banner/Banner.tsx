import './Banner.scss';

interface BannerProps {
  title: string;
}

function Banner({ title }: BannerProps) {
  return (
    <div
      x-class="h-90vh bg-[position:15%_50%] bg-[url('/images/aboutUs/hokstream-logo.webp')]"
      uno-flex="~ justify-center items-center"
      uno-bg="no-repeat"
    >
      <h2 x-class="xl-pl-400px whitespace-pre-line text-40px sm-text-70px md-text-86px">
        {title}
      </h2>
    </div>
  );
}

export default Banner;
