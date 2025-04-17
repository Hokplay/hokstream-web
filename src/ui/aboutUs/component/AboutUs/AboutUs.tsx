import type { AboutUsSection } from '@/ui/aboutUs/translation/AboutUsPageTranslation.ts';

import './AboutUs.scss';

interface AboutUsProps {
  data: AboutUsSection;
}

function AboutUs({ data }: AboutUsProps) {
  return (
    <section className="hero-section max-w-1280px mx-auto" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{data.title}</h1>
          <p className="about-description">{data.description}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
