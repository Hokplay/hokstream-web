// src/components/VideoProcessing.js - Simplified to use images
import React from 'react';
import './VideoProcessing.css';

const translations = {
  'zh-TW': {
    motionAnalysis: '運動行為偵測與記錄',
    videoUnderstanding: '影片理解',
    videoUnderstandingDesc: '透過模型理解影片內容，進而能應用到各種商務情境並轉化成功能',
    contentAnalysis: '內容解析',
    contentAnalysisDesc: 'AI能夠讀取遊戲畫面中的資訊，例如血量、副本、怪物狀態、傷害數值等等'
  },
  'en': {
    motionAnalysis: 'Motion Behavior Detection and Recording',
    videoUnderstanding: 'Video Understanding',
    videoUnderstandingDesc: 'Understand video content through models, apply to various business scenarios and transform into functional features',
    contentAnalysis: 'Content Analysis',
    contentAnalysisDesc: 'AI can read information from game screens, such as health, dungeons, monster status, damage values, etc.'
  }
};

const VideoProcessing = ({ language }) => {
  const t = translations[language];
  
  return (
    <section className="video-processing-section">
      <div className="container">
        <div className="module-badge">
          <span>{t.motionAnalysis}</span>
        </div>
        
        <div className="analysis-cards">
          <div className="analysis-card">
            <div className="analysis-image">
              <img src="/images/v_understands.png" alt="Video processing application" />
            </div>
            <div className="analysis-content">
              <h3>{t.videoUnderstanding}</h3>
              <p>{t.videoUnderstandingDesc}</p>
            </div>
          </div>
          
          <div className="analysis-card">
            <div className="analysis-image">
              <img src="/images/video-processing-app.jpg" alt="Game interface with data analysis" />
            </div>
            <div className="analysis-content">
              <h3>{t.contentAnalysis}</h3>
              <p>{t.contentAnalysisDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProcessing;