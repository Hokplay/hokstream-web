import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import Slider from '@/shared/ui/component/Slider/Slider.tsx';
import { carouselSettings } from './carouselSettings.ts';
import { translations } from './translations.ts';

function CapabilitiesCarousel() {
  const { locale } = useTranslation();
  const sliderList = translations[locale];

  return (
    <section x-class="pb-120px">
      <Slider {...carouselSettings} x-class="pb-15px">
        {sliderList.map((slider, index) => (
          <div key={index} x-class="md-px-10px overflow-hidden">
            <div
              x-class="relative min-h-240px aspect-16/9 overflow-hidden"
              uno-border="rounded-20px"
            >
              <img
                x-class="w-full h-full object-cover"
                src={slider.image}
                alt={slider.title}
              />
              <div
                x-class="absolute h-full w-120px md-w-150px lg-w-200px md-px-20px left-0 top-0 lg-py-40px bg-white/60 backdrop-blur-[20px]"
                uno-p="x-10px y-20px"
              >
                <h3 x-class="my-0 lg-text-24px" uno-text="20px $Primary">
                  {slider.title}
                </h3>
                <ul x-class="pl-20px">
                  {slider.list.map((listItem, i) => (
                    <li
                      key={i}
                      uno-text="12px"
                      x-class="md-text-16px lg-text-20px"
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default CapabilitiesCarousel;
