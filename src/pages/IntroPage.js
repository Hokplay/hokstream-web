import React from 'react';
import './IntroPage.css';
// Images will be replaced later

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
  'en': {
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
    traditionalDesc: 'One-way transmission, requiring extra materials from streaming platforms, wasting unnecessary time',
    social: 'Social Production',
    socialDesc: 'Multi-directional transmission for creating materials, no distance impact, achieving fully centralized effect'
  }
};

function IntroPage({ language }) {
  const t = translations[language];
  
  return (
    <div className="intro-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-image">
            <img src="https://via.placeholder.com/400x320" alt="Streaming on phone" />
          </div>
          <div className="hero-text">
            <h1>{t.sportsmeshTitle}</h1>
            <div className="tags">
              <span className="tag">{t.realTimeVideo}</span>
              <span className="tag">{t.aiAnalysis}</span>
              <span className="tag">{t.game}</span>
              <span className="tag">{t.socialMedia}</span>
              <span className="tag">{t.dataAnalysis}</span>
              <span className="tag">{t.fan}</span>
            </div>
            <button className="contact-btn">{t.contactBtn}</button>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>{t.howItWorks}</h2>
        
        <div className="comparison">
          <div className="traditional">
            <h3>{t.traditional}</h3>
            <p>{t.traditionalDesc}</p>
            <div className="flow-diagram">
              <img src="https://via.placeholder.com/400x320" alt="Traditional production flow" />
            </div>
          </div>
          
          <div className="vs">VS</div>
          
          <div className="social">
            <h3>{t.social}</h3>
            <p>{t.socialDesc}</p>
            <div className="flow-diagram">
              <img src="https://via.placeholder.com/400x320" alt="SportsMesh production flow" />
            </div>
          </div>
        </div>
      </section>

      <section className="partners">
  <div className="partner-carousel-container">
    <div className="partner-carousel">
      <div className="partner-track">
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 1" />
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 2" />
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 3" />
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 4" />
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 5" />
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 6" />
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 7" />
        {/* Duplicate logos to create seamless rotation effect */}
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 1" />
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 2" />
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 3" />
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 4" />
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 5" />
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 6" />
        <img src="https://via.placeholder.com/120x60" alt="Partner logo 7" />
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default IntroPage;
