import React, { useState } from 'react';
import './AboutUs.css';
import TeamMember from '../components/TeamMember';
import ContactUs from '../components/ContactUs';

const translations = {
  'zh-TW': {
    whoWeAre: '關於我們',
    aboutUsDescription: '我們是一支專注低延遲直播技術與AI影像應用的跨界團隊，成員涵蓋系統架構、AI開發及專案管理。我們擅長處理電子競技與運動賽事的高即時性、多訊源直播需求，提供從訊號整合、轉播製作到雲端串流的完整解決方案，打造穩定且具互動性的觀看體驗。此外，我們利用AI影像理解技術，將直播內容轉化為結構化資訊，應用於自動標記與精華剪輯，提升內容價值。未來將持續推動技術創新，深化即時影音應用，並與夥伴共同打造下一代互動影音生態。',
    serviceCaption: '提取便捷導播功能',
    serviceEnCaption: 'the most hands-on turnkey based broadcast bot',
    coreValues: '核心理念',
    flexibility: '靈活使用，世界範圍',
    performance: '最能以訂製及製作能力',
    security: '製作點擊大+製作品質高+保安全',
    gamer: '遊戲方',
    gamerDesc: '(Gamers Text) SPORTSMESH 為遊戲玩家提供保存遊戲及演播室的平台，讓您的遊戲內容以最佳畫質和場景進行現場直播。我們的技術心以遊戲玩家設想出發，共同針對高品質影像及保障開發。共同打造最優質影音保障體驗!',
    downloadApp: '下載遊戲應用',
    tryWeb: '或試用網頁版',
    comingSoon: 'Coming Soon (價值解釋',
    comingSoonDesc: 'Coming Soon (Lorem ipsum no matter status accessed text and note developer code and icon. developer design formatter design)',
    moreInfo: '更多資訊',
    creator: '製作方',
    creatorDesc: '(Creators Text) 製作於導播室甬道。保留舞台原有共同的氣氛，SPORTSMESH 確保您在創造觀眾群聚焦的方向引導。共同創作嘗試更多與舞臺內演出效果優化高度連動。更輕易化的雙向。使用更移，不受現場環境限制',
    venue: '場域方',
    venueDesc: '(Venues Text) 舞台設計導播器效果設定，優化地區域 SPORTSMESH 成場地優勢。共同參與世界的節目，連接您場地共同參與場景可見見！協作可多於持久的共同。',
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
  'en': {
    whoWeAre: 'About Us',
    aboutUsDescription: 'We are a cross-disciplinary team focused on low-latency broadcasting technology and AI image applications, with members covering system architecture, AI development, and project management. We excel at handling the high immediacy and multi-source broadcasting needs of e-sports and sporting events, providing complete solutions from signal integration, broadcast production to cloud streaming, creating stable and interactive viewing experiences. Additionally, we use AI image understanding technology to transform broadcast content into structured information, applied to automatic tagging and highlight editing, enhancing content value. In the future, we will continue to promote technological innovation, deepen real-time audio and video applications, and work with partners to build the next generation of interactive audio and video ecosystem.',
    serviceCaption: 'Streamlined Broadcasting Features',
    serviceEnCaption: 'the most hands-on turnkey based broadcast bot',
    coreValues: 'Core Values',
    flexibility: 'Flexibility, Global Range',
    performance: 'Customized Production Capabilities',
    security: 'Enhanced Production + High Quality + Security',
    gamer: 'For Gamers',
    gamerDesc: '(Gamers Text) SPORTSMESH provides gamers with a platform to save games and studio broadcasts, enabling you to livestream your game content with the best quality and scenes. Our technology is designed with gamers in mind, jointly developing high-quality video protection. Together we create the best audio-visual protection experience!',
    downloadApp: 'Download Game App',
    tryWeb: 'or Try Web Version',
    comingSoon: 'Coming Soon (Value Explanation)',
    comingSoonDesc: 'Coming Soon (Lorem ipsum no matter status accessed text and note developer code and icon. developer design formatter design)',
    moreInfo: 'More Info',
    creator: 'For Creators',
    creatorDesc: '(Creators Text) Create in the broadcast studio corridor. Preserving the original shared atmosphere of the stage, SPORTSMESH ensures you guide the audience\'s focus in the creation direction. Co-creation attempts more optimization with on-stage performance effects. Simplifies two-way interaction. More portable, not limited by on-site environment.',
    venue: 'For Venues',
    venueDesc: '(Venues Text) Stage design director effect settings, optimize regional SPORTSMESH venue advantages. Participate in global programs, connect your venue with visible shared scenes! Collaborative work is more persistent than individual efforts.',
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


function AboutUs({ language = 'zh-TW' }) {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState('gamer');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };
  
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', contactForm);
    // Reset form after submission
    setContactForm({
      name: '',
      email: '',
      phone: '',
      description: ''
    });
    // Show success message or other feedback
  };
  
  return (
    <div className="about-us-page">
      {/* About Us Section */}
      <section className="hero-section" id="about">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{t.whoWeAre}</h1>
            <p className="about-description">{t.aboutUsDescription}</p>
          </div>
          <div className="hero-image">
            <img src="/images/Introduction_Hero_Placeholder_Video.png" alt="Broadcasting service" />
            <div className="caption">
              <p>{t.serviceCaption}</p>
              <p className="en-caption">{t.serviceEnCaption}</p>
            </div>
          </div>
        </div>
      </section>


      <TeamMember language={language} />



      {/* Contact Us Section */}
      <ContactUs language={language} />
    </div>
  );
}

export default AboutUs;