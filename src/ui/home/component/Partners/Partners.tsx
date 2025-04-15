import Marquee from '@/shared/ui/component/Marquee/Marquee.tsx';
import type { Partner } from '@/ui/home/translation/HomeTranslation.ts';

interface PartnersProps {
  data: Partner[];
}

function Partners({ data }: PartnersProps) {
  return (
    <Marquee autoFill={true}>
      {data.map(image => (
        <div key={image.name}>
          <img src={image.logoUrl} alt={image.name} />
        </div>
      ))}
    </Marquee>
  );
}

export default Partners;
