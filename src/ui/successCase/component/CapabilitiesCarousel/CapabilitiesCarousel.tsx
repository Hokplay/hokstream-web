import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import Slider from '@/shared/ui/component/Slider/Slider.tsx';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const translations = {
  'zh-TW': [
    {
      title: '動員成本',
      image: '/images/cost.png',
      list: ['40組螢幕', '20位人員', '10台電腦', '5組控台', '4套軟體']
    },
    {
      title: '現場人力',
      image: '/images/man_power.png',
      list: ['導播', '音控', '字卡', 'OB觀察者', '鋼管', '攝影師', '製作人']
    },
    {
      title: '僅使用',
      image: '/images/usage.png',
      list: [
        '2組螢幕',
        '2位人員',
        '1台電腦',
        '1台 edge server',
        '1套線上導播機軟體'
      ]
    }
  ],
  'en-US': [
    {
      title: 'Resources Required',
      image: '/images/cost.png',
      list: [
        '40 monitors',
        '20 staff members',
        '10 computers',
        '5 control stations',
        '4 software suites'
      ]
    },
    {
      title: 'Venue Staff',
      image: '/images/man_power.png',
      list: [
        'Director',
        'Sound control',
        'Graphics',
        'Observer',
        'Production manager',
        'Cameraman',
        'Producer'
      ]
    },
    {
      title: 'Now Just Using',
      image: '/images/usage.png',
      list: [
        '2 monitors',
        '2 staff members',
        '1 computer',
        '1 edge server',
        '1 online directing software'
      ]
    }
  ]
};

function CapabilitiesCarousel() {
  const { locale } = useTranslation();
  const sliderList = translations[locale];

  return (
    <Slider {...settings}>
      {sliderList.map((slider, index) => (
        <div key={index} x-class="md-px-10px">
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
  );
}

export default CapabilitiesCarousel;
