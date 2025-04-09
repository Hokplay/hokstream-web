// src/pages/Features.js - Fixed syntax error
import FeatureCards from '@/ui/feature/component/FeatureCards/FeatureCards.tsx';
import CoreFeatures from '@/ui/feature/component/CoreFeatures/CoreFeatures.tsx';
import VideoProcessing from '@/ui/feature/component/VideoProcessing/VideoProcessing.tsx';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';

import './Features.scss';

const translations = {
  'zh-TW': {
    ourStrengths: '我們的強項？',
    productFeatures: '產品亮點',
    modernLiveProduction: '設計＆轉播分離',
    modernLiveProductionDesc:
      '將轉播設計與執行分開，讓無經驗的使用者也能輕鬆製作並發布轉播內容',
    resourceManagement: '遠程製作',
    resourceManagementDesc: '支援遠程操作及多路異地訊號切換',
    dataAnalyticsCenter: 'Ｗeb3去中心化',
    dataAnalyticsCenterDesc:
      '運用Web3概念，透過去中心化和邊緣運算減少延遲，提升轉播品質',
    contentProtection: '無學習門檻',
    contentProtectionDesc: '所有參與者無需安裝軟體或學習程式，降低參與門檻',
    unlimitedFlexibility: '不限遊戲屬性',
    unlimitedFlexibilityDesc:
      '根應用範圍廣泛，讓非電競遊戲也能輕鬆進行多人互動直播，取代OB功能據您的特定需求自訂和擴展平台',
    enhancedCollaboration: '強化場域能力',
    enhancedCollaborationDesc:
      '將社群成員與場域主的能力發揮，讓實體場域成為本地社群的活動中心',
    coreFeatures: '核心功能',
    liveBroadcastController: '多元通道直播控制器',
    singlePersonMultiCamera: '單人多個攝像機操作',
    singlePersonMultiCameraDesc:
      '一個人可以控制多個攝像機，提高效率並降低人力成本',
    intelligentDirecting: '智能指揮架構獨創功能',
    intelligentDirectingDesc:
      '直覺式的指揮工具，使直播導演工作更加輕鬆和有效率',
    templateLibrary: '範本庫預設',
    templateLibraryDesc: '使用預設模板快速開始您的項目，節省時間和精力',
    customTemplateFunction: '自訂預設模板功能',
    customTemplateFunctionDesc:
      '創建和保存您自己的模板，以便將來使用和保持品牌一致性',
    gameControlTools: '遊戲自動化控制工具',
    social: '社群媒體',
    socialDesc: '在不同社交媒體平台上無縫分發您的內容，擴大您的覆蓋範圍',
    internalNetwork: '內部網絡',
    internalNetworkDesc: '通過內部網絡輕鬆共享內容，確保團隊成員始終保持同步',
    multiSceneLive: '多場景直播製作',
    multiSceneLiveDesc:
      '同時管理多個場景的直播製作，無需額外的設備或人力，充分利用您的資源並提高效率',
    noLearningThreshold: '無學習門檻',
    noLearningThresholdDesc:
      '即使沒有專業技術知識的用戶，也可以輕鬆上手使用我們的平台，開始創建令人驚嘆的直播內容',
    noGameLimitations: '不限游戲屬性',
    noGameLimitationsDesc:
      '管理遊戲屬性，可以與任意多個不同遊戲中的不同屬性連接，並與我們的平台集成，提供全面的遊戲直播體驗',
    decentralizedDesign: '去中心化設計',
    decentralizedDesignDesc:
      '我們採用去中心化設計理念，確保沒有單點故障，並在系統某一部分出現問題時提供冗餘，提高可靠性和可用性',
    moreFeatures: '還在新增....',
    all: '全部',
    game: '遊戲',
    live: '直播',
    centralizedTitle: '中心化',
    decentralizedTitle: '非中心化',
    videoProcessing: 'Video Processing App',
    uploadVideo: 'Upload Video',
    enterCustomPrompt: 'Enter Custom Prompt',
    process: 'Process',
    description: 'Description',
    downloadClips: 'Download Clips'
  },
  'en-US': {
    ourStrengths: 'Our Strengths?',
    productFeatures: 'Product Highlights',
    modernLiveProduction: 'Modern Live Production',
    modernLiveProductionDesc:
      'Efficient live production process without extra professional knowledge required',
    resourceManagement: 'Resource Management',
    resourceManagementDesc:
      'Comprehensive and simple management of your materials and resources',
    dataAnalyticsCenter: 'Data Analytics Center',
    dataAnalyticsCenterDesc:
      'Comprehensive data analysis and reporting to make data-driven decisions',
    contentProtection: 'Digital Protection Measures',
    contentProtectionDesc:
      'Protect your content and intellectual property from unauthorized use',
    unlimitedFlexibility: 'Unlimited Flexibility',
    unlimitedFlexibilityDesc:
      'Customize and extend the platform according to your specific needs',
    enhancedCollaboration: 'Enhanced Collaboration',
    enhancedCollaborationDesc:
      'Facilitate seamless collaboration between team members, regardless of their location',
    coreFeatures: 'Core Features',
    liveBroadcastController: 'Multi-channel Live Broadcast Controller',
    singlePersonMultiCamera: 'Single-person Multi-camera Operation',
    singlePersonMultiCameraDesc:
      'One person can control multiple cameras, increasing efficiency and reducing manpower costs',
    intelligentDirecting: 'Intelligent Directing Framework',
    intelligentDirectingDesc:
      'Intuitive directing tools that make live broadcast direction work easier and more efficient',
    templateLibrary: 'Template Library Presets',
    templateLibraryDesc:
      'Use preset templates to quickly start your projects, saving time and effort',
    customTemplateFunction: 'Custom Preset Template Features',
    customTemplateFunctionDesc:
      'Create and save your own templates for future use and brand consistency',
    gameControlTools: 'Game Automation Control Tools',
    social: 'Social Media',
    socialDesc:
      'Seamlessly distribute your content across different social media platforms, expanding your reach',
    internalNetwork: 'Internal Network',
    internalNetworkDesc:
      'Easily share content through the internal network, ensuring team members always stay in sync',
    multiSceneLive: 'Multi-scene Live Production',
    multiSceneLiveDesc:
      'Manage multi-scene live productions simultaneously without extra equipment or manpower, maximizing your resources and efficiency',
    noLearningThreshold: 'No Learning Threshold',
    noLearningThresholdDesc:
      'Users without technical expertise can easily start using our platform and create amazing live content',
    noGameLimitations: 'No Game Property Limitations',
    noGameLimitationsDesc:
      'Manage game properties, connect with any number of different properties in different games, and integrate with our platform for a comprehensive game streaming experience',
    decentralizedDesign: 'Decentralized Design',
    decentralizedDesignDesc:
      'We adopt a decentralized design philosophy to ensure no single point of failure and provide redundancy if one part of the system has issues, increasing reliability and availability',
    moreFeatures: 'Still adding....',
    all: 'All',
    game: 'Game',
    live: 'Live',
    centralizedTitle: 'Centralized',
    decentralizedTitle: 'Decentralized',
    videoProcessing: 'Video Processing App',
    uploadVideo: 'Upload Video',
    enterCustomPrompt: 'Enter Custom Prompt',
    process: 'Process',
    description: 'Description',
    downloadClips: 'Download Clips'
  }
};

// Define real image paths - assuming images are stored in the public folder
const images = {
  heroImage: '/images/faces-collage.jpg', // Image 1
  broadcastSetup: '/images/features/Multi-Location-Remote-Production.png', // Image 2
  audioControls: '/images/audio-controls.jpg', // Image 3
  channelSettings: '/images/channel-settings.jpg', // Image 4
  gameInterface: '/images/game-interface.jpg', // Image 5
  videoProcessing: '/images/video-processing-app.jpg', // Image 6
  iconLive: '/images/icon-live.png',
  gameCollage: '/images/category_less.png', // New game collage image
  decentralizedDesign: '/images/features/Decentralized-Design.png',
  iconResource: '/images/icon-resource.png',
  iconAnalytics: '/images/Web3去中心化-icon.png',
  iconProtection: '/images/learning_curve-icon.png',
  iconFlexibility: '/images/catless-icon.png',
  iconCollaboration: '/images/reinforce_cat-icon.png',
  networkBg: '/images/network-bg.png'
};

function FeatureView() {
  const { locale } = useTranslation();
  const t = translations[locale];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">{t.ourStrengths}</h1>
          <div className="hero-image">
            <img src={images.heroImage} alt="Digital faces collage" />
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="product-highlights">
        <div className="container">
          <h2 className="section-title">{t.productFeatures}</h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon">
                <img
                  src={images.iconLive || '/images/icon-placeholder.png'}
                  alt="Live Production"
                />
              </div>
              <div className="highlight-content">
                <h3>{t.modernLiveProduction}</h3>
                <p>{t.modernLiveProductionDesc}</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <img
                  src={images.iconResource || '/images/icon-placeholder.png'}
                  alt="Resource Management"
                />
              </div>
              <div className="highlight-content">
                <h3>{t.resourceManagement}</h3>
                <p>{t.resourceManagementDesc}</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <img
                  src={images.iconAnalytics || '/images/icon-placeholder.png'}
                  alt="Data Analytics"
                />
              </div>
              <div className="highlight-content">
                <h3>{t.dataAnalyticsCenter}</h3>
                <p>{t.dataAnalyticsCenterDesc}</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <img
                  src={images.iconProtection || '/images/icon-placeholder.png'}
                  alt="Content Protection"
                />
              </div>
              <div className="highlight-content">
                <h3>{t.contentProtection}</h3>
                <p>{t.contentProtectionDesc}</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <img
                  src={images.iconFlexibility || '/images/icon-placeholder.png'}
                  alt="Flexibility"
                />
              </div>
              <div className="highlight-content">
                <h3>{t.unlimitedFlexibility}</h3>
                <p>{t.unlimitedFlexibilityDesc}</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <img
                  src={
                    images.iconCollaboration || '/images/icon-placeholder.png'
                  }
                  alt="Collaboration"
                />
              </div>
              <div className="highlight-content">
                <h3>{t.enhancedCollaboration}</h3>
                <p>{t.enhancedCollaborationDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CoreFeatures />
      <VideoProcessing />
      {/* Additional Features */}
      <section className="additional-features">
        <div className="container">
          <div className="feature-item">
            <div className="feature-image">
              <img
                src={images.broadcastSetup}
                alt="Multi-scene live production"
              />
            </div>
            <div className="feature-text">
              <h2>{t.multiSceneLive}</h2>
              <p>{t.multiSceneLiveDesc}</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-image">
              <img
                src={images.videoProcessing}
                alt="No learning threshold - Video Processing App"
              />
            </div>
            <div className="feature-text">
              <h2>{t.noLearningThreshold}</h2>
              <p>{t.noLearningThresholdDesc}</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-image game-collage-image">
              <img
                src={images.gameCollage}
                alt="Various game types supported"
              />
            </div>
            <div className="feature-text">
              <h2>{t.noGameLimitations}</h2>
              <p>{t.noGameLimitationsDesc}</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-image game-collage-image">
              <img
                src={images.decentralizedDesign}
                alt="Various game types supported"
              />
            </div>
            <div className="feature-text">
              <h2>{t.decentralizedDesign}</h2>
              <p>{t.decentralizedDesignDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <FeatureCards />
      {/* More Features */}
    </div>
  );
}

export default FeatureView;
