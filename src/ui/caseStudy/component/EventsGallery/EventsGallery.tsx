import type { EventsGallerySection } from '@/ui/caseStudy/translation/CaseStudyTranslation.ts';

interface EventsGalleryProps {
  data: EventsGallerySection;
}
function EventsGallery({ data }: EventsGalleryProps) {
  return (
    <section className="events-section">
      <div className="max-w-1280px mx-auto">
        <h2 className="section-title">{data.title}</h2>
        {data.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            x-class="lg-text-20px leading-normal"
            uno-text="$Text 16px"
          >
            {paragraph}
          </p>
        ))}

        <div
          className="sm-grid
              grid-cols-[1_1_1]
              grid-rows-[1_1]
              grid-flow-col
              gap-2"
        >
          {data.images.map((item, index) => (
            <div
              key={index}
              x-class={[{ 'row-span-2': index === 0 || index === 3 }]}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsGallery;
