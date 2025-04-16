import type { SportsBehaviorSection } from '@/ui/feature/translation/FeaturesPageTranslation.ts';

import './VideoProcessing.scss';

interface VideoProcessingProps {
  data: SportsBehaviorSection;
}

function VideoProcessing({ data }: VideoProcessingProps) {
  return (
    <section className="video-processing-section">
      <div className="container">
        <div className="module-badge">
          <span>{data.title}</span>
        </div>

        <div className="analysis-cards">
          {data.items.map(item => (
            <div className="analysis-card" key={item.title}>
              <div className="aspect-640/346 overflow-hidden">
                <img
                  x-class="w-full h-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="analysis-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoProcessing;
