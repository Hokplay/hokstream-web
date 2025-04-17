import Icon from '@/shared/ui/component/Icon/Icon.tsx';
import type { GrassrootsSection } from '@/ui/caseStudy/translation/CaseStudyTranslation.ts';

interface GrassrootsSportsProps {
  data: GrassrootsSection;
}

function GrassrootsSports({ data }: GrassrootsSportsProps) {
  return (
    <section className="p-[40px_0_60px]">
      <div className="max-w-1280px mx-auto">
        <h2 className="section-title">{data.title}</h2>
        {data.subtitles.map((subtitle, index) => (
          <p
            key={index}
            x-class="lg-text-20px leading-normal"
            uno-text="$Text 16px"
          >
            {subtitle}
          </p>
        ))}

        <div
          x-class="relative mt-60% md-mt-0 md-flex-items-center"
          uno-flex="~ justify-between items-start gap-5px"
        >
          <div className="relative top-[-70px] md-top-0 p-[0_4px_4px_4px] lg-p-[0_8px_8px_8px] bg-#46D3CA rounded-12px z-2 flex-1">
            <div x-class="lg-py-15px text-center">
              <Icon name="Camera" x-class="w-20px lg-w-40px align-middle" />
            </div>
            <div x-class="rounded-12px overflow-hidden">
              <div x-class="aspect-160/90 bg-#ffffff">
                <img
                  x-class="w-full h-full object-cover align-middle"
                  src={data.thirdPersonPerspective.image}
                  alt={data.thirdPersonPerspective.title}
                />
              </div>
              <p
                x-class="my-0 p-[15px_0_30px_15px] md-p-[15px_15px] bg-#ffffff"
                uno-font="bold"
              >
                {data.thirdPersonPerspective.title}
              </p>
            </div>
          </div>
          <div x-class="absolute w-full bottom-100% md-static md-w-40% lg-w-50%">
            <Icon
              name="Basketball"
              x-class="w-full h-full object-cover align-middle"
            />
          </div>
          <div className="relative top-[-40px] md-top-0 p-[0_4px_4px_4px] lg-p-[0_8px_8px_8px] bg-#FC2F70 rounded-12px z-2 flex-1">
            <div x-class="lg-py-15px text-center">
              <Icon name="Camera" x-class="w-20px lg-w-40px align-middle" />
            </div>
            <div x-class="rounded-12px overflow-hidden">
              <div x-class="aspect-160/90">
                <img
                  x-class="w-full h-full object-cover align-middle"
                  src={data.secondPersonPerspective.image}
                  alt={data.secondPersonPerspective.title}
                />
              </div>
              <p
                x-class="my-0 p-[15px_0_30px_15px] md-p-[15px_15px] bg-#ffffff"
                uno-font="bold"
              >
                {data.secondPersonPerspective.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrassrootsSports;
