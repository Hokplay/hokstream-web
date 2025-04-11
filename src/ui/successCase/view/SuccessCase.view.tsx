import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import ProductionStats from '@/ui/successCase/component/ProductionStats/ProductionStats.tsx';
import TournamentSection from '@/ui/successCase/component/TournamentSection/TournamentSection.tsx';
import CapabilitiesCarousel from '@/ui/successCase/component/CapabilitiesCarousel/CapabilitiesCarousel.tsx';
import Banner from '@/ui/successCase/component/Banner/Banner.tsx';
import Icon from '@/shared/ui/component/Icon/Icon.tsx';

import './SuccessCase.scss';

const translations = {
  'zh-TW': {
    whatWeDid: '我們做了什麼？',
    socialMediaAdvantages: '社群製作優勢成果',
    efficiency: '製作效率',
    costReduction: '內容製作時間',
    responseTime: '低延遲數據響應',
    percent: '90%',
    times: '10x',
    seconds: '<1s',
    tournament: '2022 英雄聯盟 校園電子競技決賽',
    tournamentDesc:
      '英雄聯盟校園電子競技賽事決賽現場各個角落為賽事提供全方位的協調保障',
    multiFunctionTitle: '多媒體協作平台',
    multiFunctionDesc:
      '同步一人多機操控+效率化 (直播內容，字幕，圖表，背景等等等)',
    operationCapabilities: '運營能力',
    operationList: ['多個直播', '社交媒體', '分析', '人工智慧', '終端用戶'],
    techCapabilities: '技術能力',
    techList: ['網絡', '終端', '播放器', '雲端化', '協作'],
    eventsSection: '精彩電競節',
    eventsDesc:
      '我們的媒體直播軟件能夠在現場及早做好，利用我，範圍的特性下，口現場直播通過各平台同步直播面基礎原設及現場感重視區域營銷活動展示，同步實現媒體直播及協助策展舉辦方建立完整的社區和營銷渠道，讓任何來訪者都能被吸引來到手機或電腦前了解，讓現場感擴大化。',
    partner: '合作夥伴',
    grassrootsSection: '草根社群體育',
    grassrootsDesc: '足球草根運動的各界聯合愛好者',
    singleTracking: '單人人體追蹤',
    doubleTracking: '雙人人體追蹤'
  },
  'en-US': {
    whatWeDid: 'What We Did?',
    socialMediaAdvantages: 'Social Media Production Advantages',
    efficiency: 'Production Efficiency',
    costReduction: 'Content Production Time',
    responseTime: 'Low Latency Data Response',
    percent: '90%',
    times: '10x',
    seconds: '<1s',
    tournament: '2022 League of Legends Campus eSports Finals',
    tournamentDesc:
      'Providing comprehensive coordination and protection for the League of Legends campus eSports finals from every corner of the venue',
    multiFunctionTitle: 'Multi-media Collaboration Platform',
    multiFunctionDesc:
      'Synchronous one-person multi-device control + efficiency (live content, subtitles, charts, backgrounds, etc.)',
    operationCapabilities: 'Operational Capabilities',
    operationList: [
      'Multiple Livestreams',
      'Social Media',
      'Analytics',
      'Artificial Intelligence',
      'End Users'
    ],
    techCapabilities: 'Technical Capabilities',
    techList: [
      'Network',
      'Terminals',
      'Players',
      'Cloud Integration',
      'Collaboration'
    ],
    eventsSection: 'Exciting eSports Events',
    eventsDesc:
      "Our media broadcasting software is ready early at the venue, utilizing our range of features to synchronize live broadcasts across various platforms, emphasizing the venue's original setup and presence. It simultaneously achieves media broadcasting and helps event organizers establish complete community and marketing channels, attracting any visitor to their mobile phones or computers to learn more, maximizing the sense of being present.",
    partner: 'Partners',
    grassrootsSection: 'Grassroots Community Sports',
    grassrootsDesc: 'Various united enthusiasts of grassroots football sports',
    singleTracking: 'Single-person Body Tracking',
    doubleTracking: 'Two-person Body Tracking'
  }
};

function SuccessCaseView() {
  const { locale } = useTranslation();
  const t = translations[locale];

  return (
    <div x-class="px-16px xl-px-0 max-w-1200px mx-auto">
      <Banner title={t.whatWeDid} />

      {/* Stats Section */}
      <ProductionStats />

      {/* Tournament Section */}
      <TournamentSection />

      {/* Capabilities Section */}
      <CapabilitiesCarousel />

      {/* Events Gallery Section */}
      <section className="events-section">
        <div className="max-w-1200px mx-auto">
          <h2 className="section-title">{t.eventsSection}</h2>
          <p className="events-description">{t.eventsDesc}</p>

          <div
            className="sm-grid
              grid-cols-[1_1_1]
              grid-rows-[1_1]
              grid-flow-col
              gap-2"
          >
            <div className="row-span-2">
              <img
                src="/images/caseStudy/桃園電競節_1.webp"
                alt="Event 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="/images/caseStudy/桃園電競節_2.webp"
                alt="Event 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="/images/caseStudy/桃園電競節_3.webp"
                alt="Event 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="row-span-2">
              <img
                src="/images/caseStudy/桃園電競節_4.webp"
                alt="Event 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="max-w-1200px mx-auto">
          <h3 className="partner-title">{t.partner}</h3>
          <div className="partners-logo-container">
            <div className="partner-logo">
              <img
                src="/images/caseStudy/Schools_Logo/健行科大.png"
                alt="Partner 1"
              />
              <span>健行科大</span>
            </div>
            <div className="partner-logo">
              <img
                src="/images/caseStudy/Schools_Logo/樹德科大.png"
                alt="Partner 2"
              />
              <span>樹德科大</span>
            </div>
            <div className="partner-logo">
              <img
                src="/images/caseStudy/Schools_Logo/永平工商.png"
                alt="Partner 3"
              />
              <span>永平工商</span>
            </div>
            <div className="partner-logo">
              <img
                src="/images/caseStudy/Schools_Logo/萬能科大.png"
                alt="Partner 4"
              />
              <span>萬能科大</span>
            </div>
            <div className="partner-logo">
              <img
                src="/images/caseStudy/Schools_Logo/黎明科大.png"
                alt="Partner 5"
              />
              <span>黎明科大</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grassroots Sports Section */}
      <section className="p-[40px_0_60px]">
        <div className="max-w-1200px mx-auto">
          <h2 className="section-title">{t.grassrootsSection}</h2>
          <p className="grassroots-description">{t.grassrootsDesc}</p>

          <div
            x-class="relative mt-60% md-mt-0 md-flex-items-center"
            uno-flex="~ justify-between items-start gap-5px"
          >
            <div className="relative top-[-70px] md-top-0 p-[0_4px_4px_4px] lg-p-[0_8px_8px_8px] bg-#46D3CA rounded-12px z-2 flex-1">
              <div x-class="py-8px lg-py-15px text-center">
                <Icon name="Camera" x-class="w-20px lg-w-40px align-middle" />
              </div>
              <div x-class="aspect-160/90 bg-#ffffff rounded-12px">
                <img
                  x-class="w-full h-full object-cover align-middle"
                  src="/images/caseStudy/thirdperson.png"
                  alt="Single-person tracking"
                />
                <p
                  x-class="my-0 p-[15px_0_30px_15px] md-p-[15px_15px]"
                  uno-font="bold"
                >
                  {t.singleTracking}
                </p>
              </div>
            </div>
            <div x-class="absolute w-full bottom-100% md-static md-w-50%">
              <img
                x-class="w-full h-full object-cover align-middle"
                src="/src/shared/ui/asset/icon/basketball.svg"
                alt="草根社群體育"
              />
            </div>
            <div className="relative top-[-40px] md-top-0 p-[0_4px_4px_4px] lg-p-[0_8px_8px_8px] bg-#FC2F70 rounded-12px z-2 flex-1">
              <div x-class="py-8px lg-py-15px text-center">
                <Icon name="Camera" x-class="w-20px lg-w-40px align-middle" />
              </div>
              <div x-class="aspect-160/90 bg-#ffffff rounded-12px">
                <img
                  x-class="w-full h-full object-cover align-middle"
                  src="/images/caseStudy/secondperson.png"
                  alt="Two-person tracking"
                />
                <p
                  x-class="my-0 p-[15px_0_30px_15px] md-p-[15px_15px]"
                  uno-font="bold"
                >
                  {t.doubleTracking}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuccessCaseView;
