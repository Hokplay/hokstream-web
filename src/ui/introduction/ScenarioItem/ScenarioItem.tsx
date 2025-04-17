import { useRef, useState } from 'react';
import Slider from '@/shared/ui/component/Slider/Slider.tsx';
import { carouselSettings } from '@/ui/introduction/ScenarioItem/carouselSettings.ts';
import Tag from '@/shared/ui/component/Tag/Tag.tsx';
import Icon from '@/shared/ui/component/Icon/Icon.tsx';
import Button from '@/shared/ui/component/Button/Button.tsx';
import type { ScenarioItem } from '@/ui/introduction/translation/IntroductionPageTranslation.ts';

type ScenarioSectionItemProps = {
  data: ScenarioItem;
  sectionRef: (element: HTMLDivElement | null) => void;
};

function ScenarioItem({ data, sectionRef }: ScenarioSectionItemProps) {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === data.carouselItems.length - 1;

  return (
    <section id={data.id} ref={sectionRef} x-class="p-[125px_0_20px_0]">
      <h2 x-class="my-0" uno-text="$Primary 36px">
        {data.title}
      </h2>
      <p x-class="my-5px" uno-text="$Text 20px">
        {data.introduction}
      </p>
      <div x-class="mb-20px" uno-flex="~ gap-5px">
        {data.tags.map(tag => (
          <Tag label={tag} key={tag} />
        ))}
      </div>
      <div x-class="lg-flex lg-gap-30px">
        <div x-class="lg-w-60%">
          <Slider
            ref={sliderRef}
            {...carouselSettings}
            beforeChange={(_, newIndex) => setCurrentSlide(newIndex)}
          >
            {data.carouselItems.map((item, index) => (
              <div key={index} x-class="overflow-hidden">
                <div x-class="aspect-16/9 overflow-hidden">
                  <img
                    x-class="w-full h-full object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h3 uno-text="20px" x-class="xl-text-24px">
            {data.scenario.title}
          </h3>
          <p uno-text="$Text 20px">{data.scenario.description}</p>
          <div uno-flex="~ justify-between">
            <button
              x-class="w-140px bg-#ffffff hover:bg-$Primary-Light leading-28px hover:text-$Secondary duration-500 cursor-pointer"
              uno-border="solid 2px rounded-20px $Primary"
              uno-text="$Primary"
              uno-flex="~ items-center justify-center gap-5px"
            >
              <span>{data.moreInfo.label}</span>
              <Icon name="ThinRightArrow" />
            </button>
            <div x-class="flex items-center justify-center gap-10px">
              <Button
                type="text"
                disabled={isFirstSlide}
                onClick={() => sliderRef.current?.slickPrev()}
                x-class="px-10px py-5px rounded cursor-pointer"
              >
                <Icon
                  name="LefTArrow"
                  x-class={[{ 'text-$Text': isFirstSlide }]}
                />
              </Button>
              <div x-class="flex gap-5px">
                {data.carouselItems.map((_, index) => (
                  <div
                    key={index}
                    x-class={[
                      'w-20px h-20px rounded-full bg-$Neutral duration-300',
                      { 'bg-$Primary': currentSlide === index }
                    ]}
                  />
                ))}
              </div>
              <Button
                type="text"
                onClick={() => sliderRef.current?.slickNext()}
                disabled={isLastSlide}
                x-class="px-10px py-5px rounded cursor-pointer"
              >
                <Icon
                  name="RightArrow"
                  x-class={[{ 'text-$Text': isLastSlide }]}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScenarioItem;
