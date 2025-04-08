import './CoreFeatures.scss';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';

const translations = {
  'zh-TW': {
    title: '核心功能',
    remoteModule: '多地遠端互動製播模組',
    onlineSubtitle: '線上字卡/開頭動畫',
    onlineSubtitleDesc:
      '製作者可即時進行字卡修改，透過賽事設計者統一設計，確保完美符合轉需求',
    remoteInteraction: '異地低延遲多訊源互動',
    remoteInteractionDesc:
      '所有訊號延遲都低於 0.5秒內，支援最多18路訊號，60FPS',
    eventProcess: '賽事流程控管',
    eventProcessDesc:
      '主辦單位/賽事設計者使用預先設定好的轉播流程&場景，控管所有操作單位行為，最大程度降低人為失誤的可能性',
    multiSourceSignal: '來自各地的訊號源',
    multiSourceSignalDesc:
      '可收取來自電腦桌面、手機、攝影機等不同訊源，訊源位置來自各個地方。使用者僅需掃描QRCode或是使用瀏覽器打開連結即可提供訊源'
  },
  'en-US': {
    title: 'Core Features',
    remoteModule: 'Multi-location Remote Interactive Broadcasting Module',
    onlineSubtitle: 'Online Lower Thirds/Opening Animations',
    onlineSubtitleDesc:
      'Creators can update subtitles in real-time, unified through event designers to perfectly match broadcast requirements',
    remoteInteraction: 'Low Latency Multi-Source Remote Interaction',
    remoteInteractionDesc:
      'All signal delays are under 0.5 seconds, supporting up to 18 signal streams at 60 FPS',
    eventProcess: 'Event Process Management',
    eventProcessDesc:
      'Organizers/event designers use predefined broadcasting workflows and scenes to control operations, minimizing human errors',
    multiSourceSignal: 'Signal Sources from Multiple Locations',
    multiSourceSignalDesc:
      'Supports various input sources like desktop screens, smartphones, and cameras from multiple locations. Users only need to scan a QR code or open a link via browser to provide sources'
  }
};

const CoreFeatures = () => {
  const { locale } = useTranslation();
  const t = translations[locale];

  return (
    <section className="core-features-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>

        <div className="module-badge">
          <span>{t.remoteModule}</span>
        </div>

        <div className="main-feature-image">
          <img
            src="/images/broadcasting_interface.png"
            alt="Broadcasting interface"
          />
        </div>

        <div className="feature-cards-grid">
          <div className="feature-card">
            <div className="feature-image">
              <img
                src="/images/faces-collage.jpg"
                alt="Online subtitles and animations"
              />
            </div>
            <div className="feature-content">
              <div className="feature-title">{t.onlineSubtitle}</div>
              <div className="feature-description">{t.onlineSubtitleDesc}</div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src="/images/low_latency.png" alt="Remote interaction" />
            </div>
            <div className="feature-content">
              <div className="feature-title">{t.remoteInteraction}</div>
              <div className="feature-description">
                {t.remoteInteractionDesc}
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src="/images/flow.png" alt="Event process management" />
            </div>
            <div className="feature-content">
              <div className="feature-title">{t.eventProcess}</div>
              <div className="feature-description">{t.eventProcessDesc}</div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img
                src="/images/signals.png"
                alt="Multi-location signal sources"
              />
            </div>
            <div className="feature-content">
              <div className="feature-title">{t.multiSourceSignal}</div>
              <div className="feature-description">
                {t.multiSourceSignalDesc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
