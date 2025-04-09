import TeamMember from '@/ui/aboutUs/component/TeamMember/TeamMember.tsx';
import ContactUs from '@/ui/aboutUs/component/ContactUs/ContactUs.tsx';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import Banner from '@/ui/aboutUs/component/Banner/Banner.tsx';

import './AboutUs.scss';

const translations = {
  'zh-TW': {
    whoWeAre: '關於我們',
    aboutUsDescription:
      '我們是一支專注低延遲直播技術與AI影像應用的跨界團隊，成員涵蓋系統架構、AI開發及專案管理。我們擅長處理電子競技與運動賽事的高即時性、多訊源直播需求，提供從訊號整合、轉播製作到雲端串流的完整解決方案，打造穩定且具互動性的觀看體驗。此外，我們利用AI影像理解技術，將直播內容轉化為結構化資訊，應用於自動標記與精華剪輯，提升內容價值。未來將持續推動技術創新，深化即時影音應用，並與夥伴共同打造下一代互動影音生態',
    coreValues: '核心理念',
    flexibility: '靈活使用，世界範圍',
    performance: '最能以訂製及製作能力',
    security: '製作點擊大+製作品質高+保安全',
    gamer: '遊戲方',
    gamerDesc:
      '(Gamers Text) SPORTSMESH 為遊戲玩家提供保存遊戲及演播室的平台，讓您的遊戲內容以最佳畫質和場景進行現場直播。我們的技術心以遊戲玩家設想出發，共同針對高品質影像及保障開發。共同打造最優質影音保障體驗!',
    downloadApp: '下載遊戲應用',
    tryWeb: '或試用網頁版',
    comingSoon: 'Coming Soon (價值解釋',
    comingSoonDesc:
      'Coming Soon (Lorem ipsum no matter status accessed text and note developer code and icon. developer design formatter design)',
    moreInfo: '更多資訊',
    creator: '製作方',
    creatorDesc:
      '(Creators Text) 製作於導播室甬道。保留舞台原有共同的氣氛，SPORTSMESH 確保您在創造觀眾群聚焦的方向引導。共同創作嘗試更多與舞臺內演出效果優化高度連動。更輕易化的雙向。使用更移，不受現場環境限制',
    venue: '場域方',
    venueDesc:
      '(Venues Text) 舞台設計導播器效果設定，優化地區域 SPORTSMESH 成場地優勢。共同參與世界的節目，連接您場地共同參與場景可見見！協作可多於持久的共同。',
    // Team section
    teamTitle: '團隊成員',
    // Contact section
    contactUs: '聯絡我們',
    name: '姓名',
    email: '信箱',
    phone: '手機號碼',
    description: '描述',
    send: '發送',
    requiredField: '必填欄位'
  },
  'en-US': {
    whoWeAre: 'About\nUs',
    aboutUsDescription:
      "We're passionate about low-latency live streaming and AI technology, translating expertise into practical solutions. With cross-disciplinary experience in system architecture, AI, and project management, we quickly identify and address industry needs, particularly in esports and sports broadcasting. We specialize in managing complex, multi-source live events, providing end-to-end streaming solutions from on-site production to cloud-based transmission, ensuring stable and interactive viewing experiences. Our AI modules enable real-time video understanding, automated tagging, and highlight generation, transforming visuals into actionable insights. Moving forward, we'll continue innovating at the intersection of streaming and AI, collaborating to build next-gen interactive media ecosystems.",
    serviceEnCaption: 'the most hands-on turnkey based broadcast bot',
    coreValues: 'Core Values',
    flexibility: 'Flexibility, Global Range',
    performance: 'Customized Production Capabilities',
    security: 'Enhanced Production + High Quality + Security',
    gamer: 'For Gamers',
    gamerDesc:
      '(Gamers Text) SPORTSMESH provides gamers with a platform to save games and studio broadcasts, enabling you to livestream your game content with the best quality and scenes. Our technology is designed with gamers in mind, jointly developing high-quality video protection. Together we create the best audio-visual protection experience!',
    downloadApp: 'Download Game App',
    tryWeb: 'or Try Web Version',
    comingSoon: 'Coming Soon (Value Explanation)',
    comingSoonDesc:
      'Coming Soon (Lorem ipsum no matter status accessed text and note developer code and icon. developer design formatter design)',
    moreInfo: 'More Info',
    creator: 'For Creators',
    creatorDesc:
      "(Creators Text) Create in the broadcast studio corridor. Preserving the original shared atmosphere of the stage, SPORTSMESH ensures you guide the audience's focus in the creation direction. Co-creation attempts more optimization with on-stage performance effects. Simplifies two-way interaction. More portable, not limited by on-site environment.",
    venue: 'For Venues',
    venueDesc:
      '(Venues Text) Stage design director effect settings, optimize regional SPORTSMESH venue advantages. Participate in global programs, connect your venue with visible shared scenes! Collaborative work is more persistent than individual efforts.',
    // Team section
    teamTitle: 'Our Team',
    // Contact section
    contactUs: 'Contact Us',
    name: 'Name',
    email: 'Email',
    phone: 'Phone Number',
    description: 'Description',
    send: 'Send',
    requiredField: 'Required field'
  }
};

function AboutUs() {
  const { locale } = useTranslation();
  const t = translations[locale];

  return (
    <div className="about-us-page">
      <Banner title={t.whoWeAre} />
      {/* About Us Section */}
      <section className="hero-section max-w-1200px mx-auto" id="about">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{t.whoWeAre}</h1>
            <p className="about-description">{t.aboutUsDescription}</p>
          </div>
        </div>
      </section>

      <TeamMember />

      {/* Contact Us Section */}
      <ContactUs locale={locale} />
    </div>
  );
}

export default AboutUs;
