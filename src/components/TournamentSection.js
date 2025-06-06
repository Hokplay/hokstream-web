import React from 'react';

const translations = {
  'zh-TW': {
    tournamentTitle: '2022 英雄聯盟 校園電子競技決賽',
    approachLine1: '採用傳統本地製作方式',
    approachLine2: '動用大量專業人力和設備資源',
    venueLabel: '萬能科技大學現場',
    singleOperatorTitle: '僅需一位人員操作線上導播機',
    singleOperatorDetails: '(整合導播、字卡、成因、推流等需求)'
  },
  'en': {
    tournamentTitle: '2022 League of Legends Campus eSports Finals',
    approachLine1: 'Using traditional local production methods',
    approachLine2: 'Utilizing substantial professional manpower and equipment resources',
    venueLabel: 'Vanung University Venue',
    singleOperatorTitle: 'Only one person needed to operate the online directing system',
    singleOperatorDetails: '(Integrating directing, graphics, production elements, and streaming needs)'
  }
};

const TournamentSection = ({ language}) => {
  const t = translations[language];
  
  return (
    <div className="tournament-section" style={{ 
      backgroundColor: '#fff', 
      padding: '40px 0 60px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px' 
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold',
          marginBottom: '16px',
          textAlign: 'left'
        }}>
          {t.tournamentTitle}
        </h2>
        
        <div style={{ marginBottom: '30px' }}>
          <p style={{ 
            fontSize: '1rem', 
            color: '#666', 
            margin: '4px 0',
            textAlign: 'left'
          }}>
            {t.approachLine1}
          </p>
          <p style={{ 
            fontSize: '1rem', 
            color: '#666', 
            margin: '4px 0',
            textAlign: 'left'
          }}>
            {t.approachLine2}
          </p>
        </div>
        
        <div style={{ 
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <span style={{ 
            display: 'inline-block',
            backgroundColor: '#222',
            color: '#fff',
            padding: '10px 25px',
            borderRadius: '30px',
            fontSize: '1rem'
          }}>
            {t.venueLabel}
          </span>
        </div>
        
        <div style={{ 
          textAlign: 'center',
          marginBottom: '30px',
          color: '#3366cc'
        }}>
          <p style={{ 
            fontSize: '1.2rem', 
            margin: '0',
            fontWeight: 'bold'
          }}>
            {t.singleOperatorTitle}
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            margin: '5px 0 0 0'
          }}>
            {t.singleOperatorDetails}
          </p>
        </div>
        
        <div style={{ 
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '30px'
        }}>
          <img 
            src="/images/CaseStudy_萬能科技大學現場.png" 
            alt="League of Legends Tournament Setup" 
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
};

export default TournamentSection;