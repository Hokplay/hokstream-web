import { imageList } from '@/ui/home/imageList.ts';
import Marquee from '@/shared/ui/component/Marquee/Marquee.tsx';

function Partners() {
  return (
    <Marquee autoFill={true}>
      {imageList.map(image => (
        <div key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" />
        </div>
      ))}
    </Marquee>
  );
}

export default Partners;
