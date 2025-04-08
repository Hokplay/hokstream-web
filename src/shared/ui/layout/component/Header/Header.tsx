import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import I18nSelector from '@/i18n/component/I18nSelector/I18nSelector.tsx';

import './Header.scss';

const translations = {
  'zh-TW': {
    intro: '簡介',
    aboutUs: '關於我們',
    successCases: '成功案例',
    features: '功能'
  },
  'en-US': {
    intro: 'Introduction',
    aboutUs: 'About Us',
    successCases: 'Success Cases',
    features: 'Features'
  }
};

function Header() {
  const { locale } = useTranslation();
  const t = translations[locale];

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
              <li>
                <Link to="/intro">{t.intro}</Link>
              </li>

              <li>
                <Link to="/cases">{t.successCases}</Link>
              </li>
              <li>
                <Link to="/features">{t.features}</Link>
              </li>
              <li>
                <Link to="/about">{t.aboutUs}</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right-nav">
          <div className="language-dropdown">
            <I18nSelector />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
