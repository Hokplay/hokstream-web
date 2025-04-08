import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import Tags from '@/ui/home/component/Tags/Tags.tsx';
import Partners from '@/ui/home/component/Partners/Partners.tsx';
import ContactUsButton from '@/shared/ui/component/ContactUsButton/ContactUsButton.tsx';

import './Home.scss';

const translations = {
  'zh-TW': {
    sportsmeshTitle: 'SPORTSMESH',
    realTimeVideo: '即時視頻',
    aiAnalysis: 'AI 分析',
    game: '遊戲',
    socialMedia: '社交媒體',
    dataAnalysis: '數據分析',
    fan: '粉絲',
    contactBtn: '聯絡我們',
    howItWorks: 'SPORTSMESH如何運作?',
    traditional: '傳統製作',
    traditionalDesc: '單向傳輸，額外從體影平台取得素材，浪費無謂的時間',
    social: '社群製作',
    socialDesc: '多向傳訊製作素材，不需距離影響，達到全中心化效果'
  },
  'en-US': {
    sportsmeshTitle: 'SPORTSMESH',
    realTimeVideo: 'Real-time Video',
    aiAnalysis: 'AI Analysis',
    game: 'Game',
    socialMedia: 'Social Media',
    dataAnalysis: 'Data Analysis',
    fan: 'Fan',
    contactBtn: 'Contact Us',
    howItWorks: 'How SPORTSMESH Works?',
    traditional: 'Traditional Production',
    traditionalDesc:
      'One-way transmission, requiring extra materials from streaming platforms, wasting unnecessary time',
    social: 'Social Production',
    socialDesc:
      'Multi-directional transmission for creating materials, no distance impact, achieving fully centralized effect'
  }
};

function HomeView() {
  const { locale } = useTranslation();
  const t = translations[locale];

  return (
    <div className="intro-page">
      <section
        uno-flex="~ gap-20px items-center"
        x-class="max-w-1200px mx-auto"
        uno-p="y-60px"
      >
        <div x-class="aspect-628/644 overflow-hidden" uno-border="rounded-20px">
          <img
            x-class="w-100% h-100% object-cover object-right"
            src="/images/Landing_Hero_Image.png"
            alt="Streaming on phone"
          />
        </div>
        <div>
          <h1 x-class="my-0" uno-text="96px">
            {t.sportsmeshTitle}
          </h1>
          <Tags />
          {/*<button x-class="contact-btn mt-30px">{t.contactBtn}</button>*/}
          <ContactUsButton />
        </div>
      </section>

      <section className="how-it-works">
        <h2>{t.howItWorks}</h2>

        <div className="comparison">
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
