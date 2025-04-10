import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import Partners from '@/ui/home/component/Partners/Partners.tsx';
import { translations } from '@/ui/home/translations.ts';
import Banner from '@/ui/home/component/Banner/Banner.tsx';

import './Home.scss';

function HomeView() {
  const { locale } = useTranslation();
  const t = translations[locale];

  return (
    <div className="intro-page px-20px lg-px-0 max-w-1200px mx-auto">
      <Banner title={t.sportsmeshTitle} />
      <section className="how-it-works">
        <h2>{t.howItWorks}</h2>

        <div className="md-flex-row" uno-flex="~ col items-center gap-30px">
          <div className="traditional bg-#ffffff">
            <h3>{t.traditional}</h3>
            <p>{t.traditionalDesc}</p>
            <div className="flow-diagram">
              <img
                x-if={locale === 'zh-TW'}
                src="/images/ZH_traditional_brocasting.png"
                alt="傳統製作流程"
              />
              <img
                x-if={locale === 'en-US'}
                src="/images/EN_tradtional.png"
                alt="傳統製作流程"
              />
            </div>
          </div>

          <div className="vs">VS</div>

          <div className="social bg-#ffffff">
            <h3>{t.social}</h3>
            <p>{t.socialDesc}</p>
            <div className="flow-diagram">
              <img
                x-if={locale === 'zh-TW'}
                src="/images/ZH_social_broadcasting.png"
                alt="社群製作流程"
              />
              <img
                x-if={locale === 'en-US'}
                src="/images/EN_social.png"
                alt="Community production"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="partners">
        <Partners />
      </section>
    </div>
  );
}

export default HomeView;
