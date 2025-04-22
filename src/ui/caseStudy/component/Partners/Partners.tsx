import type { PartnersSection } from '@/ui/caseStudy/translation/CaseStudyTranslation.ts';

import './Partners.scss';

interface PartnersProps {
  data: PartnersSection;
}

function Partners({ data }: PartnersProps) {
  return (
    <section className="partners-section">
      <div className="max-w-1280px mx-auto">
        <h3 className="partner-title">{data.title}</h3>
        <div className="partners-logo-container">
          {data.partners.map(partner => (
            <div key={partner.name} className="partner-logo">
              <div x-class="w-144px h-80px mb-8px">
                <img
                  x-class="w-full h-full object-contain mb-10px"
                  src={partner.logo}
                  alt={partner.name}
                />
              </div>

              <span uno-text="16px #101113">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
