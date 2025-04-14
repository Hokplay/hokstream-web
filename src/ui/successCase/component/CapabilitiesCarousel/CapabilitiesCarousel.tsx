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
                loading="lazy"
              />
              <div
                x-class="absolute h-full w-120px md-w-150px lg-w-200px lg-px-[10px_10px_10px_0] left-0 top-0 xl-py-20px bg-white/60 backdrop-blur-[20px]"
                uno-p="x-10px y-10px"
              >
                <h3 x-class="my-0 xl-text-24px" uno-text="18px $Primary">
                  {slider.title}
                </h3>
                <ul x-class="pl-0 list-none">
                  {slider.list.map((listItem, i) => (
                    <li
                      key={i}
                      uno-text="12px $Secondary"
                      x-class="md-text-16px xl-text-20px"
                      uno-flex="~ gap-10px"
                    >
                      <span>•</span>
                      <span>{listItem}</span>
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
