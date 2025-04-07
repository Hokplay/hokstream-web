import React, { useState } from 'react';
import './SuccessCases.css';
import ProductionStats from '../components/ProductionStats';
import TournamentSection from '../components/TournamentSection';
import CapabilitiesCarousel from '../components/CapabilitiesCarousel';
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
    tournamentDesc: '英雄聯盟校園電子競技賽事決賽現場各個角落為賽事提供全方位的協調保障',
    multiFunctionTitle: '多媒體協作平台',
    multiFunctionDesc: '同步一人多機操控+效率化 (直播內容，字幕，圖表，背景等等等)',
    operationCapabilities: '運營能力',
    operationList: [
      '多個直播',
      '社交媒體',
      '分析',
      '人工智慧',
      '終端用戶'
    ],
    techCapabilities: '技術能力',
    techList: [
      '網絡',
      '終端',
      '播放器',
      '雲端化',
      '協作'
    ],
    eventsSection: '精彩電競節',
    eventsDesc: '我們的媒體直播軟件能夠在現場及早做好，利用我，範圍的特性下，口現場直播通過各平台同步直播面基礎原設及現場感重視區域營銷活動展示，同步實現媒體直播及協助策展舉辦方建立完整的社區和營銷渠道，讓任何來訪者都能被吸引來到手機或電腦前了解，讓現場感擴大化。',
    partner: '合作夥伴',
    grassrootsSection: '草根社群體育',
    grassrootsDesc: '足球草根運動的各界聯合愛好者',
    singleTracking: '單人人體追蹤',
    doubleTracking: '雙人人體追蹤'
  },
  'en': {
    whatWeDid: 'What We Did?',
    socialMediaAdvantages: 'Social Media Production Advantages',
    efficiency: 'Production Efficiency',
    costReduction: 'Content Production Time',
    responseTime: 'Low Latency Data Response',
    percent: '90%',
    times: '10x',
    seconds: '<1s',
    tournament: '2022 League of Legends Campus eSports Finals',
    tournamentDesc: 'Providing comprehensive coordination and protection for the League of Legends campus eSports finals from every corner of the venue',
    multiFunctionTitle: 'Multi-media Collaboration Platform',
    multiFunctionDesc: 'Synchronous one-person multi-device control + efficiency (live content, subtitles, charts, backgrounds, etc.)',
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
    eventsDesc: 'Our media broadcasting software is ready early at the venue, utilizing our range of features to synchronize live broadcasts across various platforms, emphasizing the venue\'s original setup and presence. It simultaneously achieves media broadcasting and helps event organizers establish complete community and marketing channels, attracting any visitor to their mobile phones or computers to learn more, maximizing the sense of being present.',
    partner: 'Partners',
    grassrootsSection: 'Grassroots Community Sports',
    grassrootsDesc: 'Various united enthusiasts of grassroots football sports',
    singleTracking: 'Single-person Body Tracking',
    doubleTracking: 'Two-person Body Tracking'
  }
};

function SuccessCases({ language }) {
  const t = translations[language];
  const [activeDot, setActiveDot] = useState(0);
  
  return (
    <div className="success-cases-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">{t.whatWeDid}</h1>
          <div className="hero-image">
            <img src="https://via.placeholder.com/800x400" alt="eSports streaming setup" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ProductionStats language={language} />

      {/* Tournament Section */}
      <TournamentSection language={language} />

      {/* Capabilities Section */}
      <CapabilitiesCarousel language={language} />

      {/* Events Gallery Section */}
      <section className="events-section">
        <div className="container">
          <h2 className="section-title">{t.eventsSection}</h2>
          <p className="events-description">{t.eventsDesc}</p>
          
          <div className="events-gallery">
            <div className="gallery-item">
              <img src="/images/桃園電競節_1.jpg" alt="Event 1" />
            </div>
            <div className="gallery-item">
              <img src="/images/桃園電競節_2.jpg" alt="Event 2" />
            </div>
            <div className="gallery-item">
              <img src="/images/桃園電競節_3.jpg" alt="Event 3" />
            </div>
            <div className="gallery-item">
              <img src="/images/桃園電競節_4.jpg" alt="Event 4" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h3 className="partner-title">{t.partner}</h3>
          <div className="partners-logo-container">
            <div className="partner-logo">
              <img src="/images/Schools_Logo/健行科大.png" alt="Partner 1" />
              <span>健行科大</span>
            </div>
            <div className="partner-logo">
              <img src="/images/Schools_Logo/樹德科大.png" alt="Partner 2" />
              <span>樹德科大</span>
            </div>
            <div className="partner-logo">
              <img src="/images/Schools_Logo/永平工商.png" alt="Partner 3" />
              <span>永平工商</span>
            </div>
            <div className="partner-logo">
              <img src="/images/Schools_Logo/萬能科大.png" alt="Partner 4" />
              <span>萬能科大</span>
            </div>
            <div className="partner-logo">
              <img src="/images/Schools_Logo/黎明科大.png" alt="Partner 5" />
              <span>黎明科大</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grassroots Sports Section */}
      <section className="grassroots-section">
        <div className="container">
          <h2 className="section-title">{t.grassrootsSection}</h2>
          <p className="grassroots-description">{t.grassrootsDesc}</p>
          
          <div className="tracking-cards">
            <div className="tracking-card green">
              <img src="/images/thirdperson.png" alt="Single-person tracking" />
              <p>{t.singleTracking}</p>
            </div>
            <div className="tracking-card outline">
              <img src="/images/diagram.jpg" alt="Diagram" />
            </div>
            <div className="tracking-card pink">
              <img src="/images/secondperson.png" alt="Two-person tracking" />
              <p>{t.doubleTracking}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuccessCases;