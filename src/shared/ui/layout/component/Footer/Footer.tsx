import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import { Link } from 'react-router-dom';
import { RoutePath } from '@/ui/route/RoutePath.ts';

import './Footer.scss';

const translations = {
  'zh-TW': {
    sportsmesh: 'SPORTSMESH',
    contact: '聯絡',
    email: '電郵',
    address: '地址',
    addressText: '103台北市大同區承德路一段70-1號16樓',
    menu: '目錄',
    intro: '簡介',
    successCases: '成功案例',
    features: '功能',
    aboutUs: '聯絡我們',
    support: '支援',
    privacyPolicy: '隱私權政策',
    termsOfService: '使用者條款',
    copyright: '©2025 SPORTSMESH Inc. All Right Reserved.'
  },
  'en-US': {
    sportsmesh: 'SPORTSMESH',
    contact: 'Contact',
    email: 'Email',
    address: 'Address',
    addressText:
      '16F., No. 70-1, Sec. 1, Chengde Rd., Datong District, Taipei City',
    menu: 'Menu',
    intro: 'Introduction',
    successCases: 'Case Study',
    features: 'Features',
    aboutUs: 'About Us',
    support: 'Support',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    copyright: '©2025 SPORTSMESH Inc. All Right Reserved.'
  }
};

function Footer() {
  const { locale } = useTranslation();
  const t = translations[locale];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>{t.sportsmesh}</h4>
          <div className="contact-info">
            <div>
              <strong>{t.email}:</strong> contact@sportsmesh.com
            </div>
            <div>
              <strong>{t.address}:</strong> {t.addressText}
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>{t.menu}</h4>
          <ul>
            <li>
              <Link to={RoutePath.Intro}>{t.intro}</Link>
            </li>
            <li>
              <Link to={RoutePath.Cases}>{t.successCases}</Link>
            </li>
            <li>
              <Link to={RoutePath.Features}>{t.features}</Link>
            </li>
            <li>
              <Link to={RoutePath.About}>{t.aboutUs}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t.support}</h4>
          <ul>
            <li>
              <Link to={RoutePath.PrivacyPolicy}>{t.privacyPolicy}</Link>
            </li>
            <li>
              <Link to={RoutePath.TermsOfService}>{t.termsOfService}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>{t.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
