import { useRef, useState } from 'react';
import Slider from '@/shared/ui/component/Slider/Slider.tsx';
import { carouselSettings } from '@/ui/introduction/ScenarioSectionItem/carouselSettings.ts';
import Tag from '@/shared/ui/component/Tag/Tag.tsx';
import Icon from '@/shared/ui/component/Icon/Icon.tsx';
import Button from '@/shared/ui/component/Button/Button.tsx';
import type { ScenarioSection } from '@/ui/introduction/translations/Scenarios.ts';

type ScenarioSectionItemProps = {
  section: ScenarioSection;
  sectionRef: (el: HTMLDivElement | null) => void;
};

function ScenarioSectionItem({
  section,
  sectionRef
}: ScenarioSectionItemProps) {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === section.carouselItems.length - 1;

  return (
    <section x-class="p-[125px_0_20px_0]" id={section.id} ref={sectionRef}>
      <h2 x-class="my-0" uno-text="$Primary 36px">
        {section.title}
      </h2>
      <p x-class="my-5px" uno-text="$Text 20px">
        {section.introduction}
      </p>
      <div x-class="mb-20px" uno-flex="~ gap-5px">
        {section.tags.map(tag => (
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
            {section.carouselItems.map((item, index) => (
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
            {section.scenario.title}
          </h3>
          <p uno-text="$Text 20px">{section.scenario.description}</p>
          <div uno-flex="~ justify-between">
            <button
              x-class="w-140px bg-#ffffff hover:bg-$Primary-Light leading-28px hover:text-$Secondary duration-500 cursor-pointer"
              uno-border="solid 2px rounded-20px $Primary"
              uno-text="$Primary"
              uno-flex="~ items-center justify-center gap-5px"
            >
              <span>{section.moreInfo.label}</span>
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
                {section.carouselItems.map((_, index) => (
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

export default ScenarioSectionItem;
