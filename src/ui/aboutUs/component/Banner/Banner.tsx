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
      <h2 x-class="md-pl-450px whitespace-pre-line text-60px md-text-96px">
        {title}
      </h2>
    </div>
  );
}

export default Banner;
