// src/components/FeatureCards.js
import React, { useState } from 'react';
import './FeatureCards.css';
const translations = {
  'zh-TW': {
    title: '這些都能幫...',
    gamer: '遊戲方',
    creator: '製作方',
    venue: '場域方',
    
    // Multi-location Remote Production Card
    multiLocation: '多地遠程製作',
    multiLocationGamer: '更多社群自製的對抗內容',
    multiLocationCreator: '降低社群賽事製作成本、減少設備&人力物流成本',
    multiLocationVenue: '自行製作店內比賽&轉播、網咖間賽事、跨地公司盃...等',
    
    // No Learning Threshold Card
    noLearning: '無學習門檻',
    noLearningGamer: '更多跨社群對抗內容、線上節目製作成本下降',
    noLearningCreator: '線上節目製作難易度下降、內容彈性增加、清晰成本下降',
    noLearningVenue: '輕鬆獲取場域內外所有需要畫面',
    
    // No Game Limitations Card
    noGameLimits: '不限游戲屬性',
    noGameLimitsGamer: '節省研發OB成本，提早開始建立競技社群',
    noGameLimitsCreator: '擴充業務內容，以往不易製作的SLG國戰轉播可以輕鬆完成',
    noGameLimitsVenue: '擁有自製內容能力、應用領域靈活彈性',
    
    // Decentralized Design Card
    decentralized: '去中心化設計',
    decentralizedGamer: '提升社群製作內容彈性、強化社區自主宣傳、降低廣告壓力',
    decentralizedCreator: '提升製作彈性、降低物流成本',
    decentralizedVenue: '從單純場域經營升級成內容製作中心、大量內容製作機會訓練製作人才'
  },
  'en': {
    title: 'All These Can Help...',
    gamer: 'Gamer',
    creator: 'Creator',
    venue: 'Venue',
    
    // Multi-location Remote Production Card
    multiLocation: 'Multi-location Remote Production',
    multiLocationGamer: 'More community-created competitive content',
    multiLocationCreator: 'Lower community event production costs, reduced equipment & logistics costs',
    multiLocationVenue: 'In-store competitions & broadcasts, inter-café events, cross-location company tournaments, etc.',
    
    // No Learning Threshold Card
    noLearning: 'No Learning Threshold',
    noLearningGamer: 'More cross-community competitive content, lower online program production costs',
    noLearningCreator: 'Easier online program production, increased content flexibility, lower clarity costs',
    noLearningVenue: 'Easily obtain all needed views from inside and outside the venue',
    
    // No Game Limitations Card
    noGameLimits: 'No Game Limitations',
    noGameLimitsGamer: 'Save OB development costs, start building competitive communities earlier',
    noGameLimitsCreator: 'Expand business content, easily broadcast previously difficult SLG nation battles',
    noGameLimitsVenue: 'Gain self-produced content capabilities, flexible application domains',
    
    // Decentralized Design Card
    decentralized: 'Decentralized Design',
    decentralizedGamer: 'Increase community content flexibility, strengthen community-led promotion, reduce advertising pressure',
    decentralizedCreator: 'Enhance production flexibility, reduce logistics costs',
    decentralizedVenue: 'Upgrade from simple venue operations to content production center, training opportunities for production talent'
  }
};

const FeatureCards = ({ language }) => {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState('gamer');
  
  const getFeatureContent = (featureKey) => {
    switch (activeTab) {
      case 'gamer':
        return t[`${featureKey}Gamer`];
      case 'creator':
        return t[`${featureKey}Creator`];
      case 'venue':
        return t[`${featureKey}Venue`];
      default:
        return t[`${featureKey}Gamer`];
    }
  };
  
  return (
    <section className="feature-cards-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="user-tabs">
          <button 
            className={`user-tab ${activeTab === 'gamer' ? 'active' : ''}`} 
            onClick={() => setActiveTab('gamer')}
          >
            {t.gamer}
          </button>
          <button 
            className={`user-tab ${activeTab === 'creator' ? 'active' : ''}`} 
            onClick={() => setActiveTab('creator')}
          >
            {t.creator}
          </button>
          <button 
            className={`user-tab ${activeTab === 'venue' ? 'active' : ''}`} 
            onClick={() => setActiveTab('venue')}
          >
            {t.venue}
          </button>
        </div>
        
        <div className="feature-cards-grid">
          <div className="feature-card">
            <h3 className="feature-title">{t.multiLocation}</h3>
            <p className="feature-description">{getFeatureContent('multiLocation')}</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">{t.noLearning}</h3>
            <p className="feature-description">{getFeatureContent('noLearning')}</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">{t.noGameLimits}</h3>
            <p className="feature-description">{getFeatureContent('noGameLimits')}</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">{t.decentralized}</h3>
            <p className="feature-description">{getFeatureContent('decentralized')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;