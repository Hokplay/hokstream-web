// Updated src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const translations = {
  'zh-TW': {
    intro: '簡介',
    aboutUs: '我們是誰',
    successCases: '成功案例',
    features: '功能',
  },
  'en': {
    intro: 'Introduction',
    aboutUs: 'About Us',
    successCases: 'Success Cases',
    features: 'Features',
  }
};

function Header({ language, toggleLanguage }) {
  // We'll use setLanguage instead of toggleLanguage for the dropdown
  const setLanguage = (lang) => {
    if (lang !== language) {
      toggleLanguage();
    }
  };
  const t = translations[language];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <Link to="/">
              <img src="/images/Logo_Default.png" alt="SportsMesh Logo" />
            </Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li><Link to="/">{t.intro}</Link></li>
            
              <li><Link to="/cases">{t.successCases}</Link></li>
              <li><Link to="/features">{t.features}</Link></li>
              <li><Link to="/about">{t.aboutUs}</Link></li>
            </ul>
          </nav>
        </div>
        <div className="right-nav">
          <div className="language-dropdown">
            <button className="language-selector-btn">
              {language === 'zh-TW' ? '中文' : 'EN'} ▼
            </button>
            <div className="language-dropdown-content">
              <a href="#" onClick={(e) => {e.preventDefault(); setLanguage('zh-TW');}}>中文</a>
              <a href="#" onClick={(e) => {e.preventDefault(); setLanguage('en');}}>EN</a>
            </div>
          </div>
          <button className="login-btn">{t.login}</button>
        </div>
      </div>
    </header>
  );
}

export default Header;