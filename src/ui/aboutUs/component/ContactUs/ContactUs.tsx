import type { SupportedLocale } from '@/i18n/SupportedLocale.ts';

import './ContactUs.scss';

const translations = {
  'zh-TW': {
    contactUs: '聯絡我們',
    name: '姓名',
    email: '信箱',
    phone: '手機號碼',
    description: '描述',
    send: '發送',
    requiredField: '必填欄位'
  },
  'en-US': {
    contactUs: 'Contact Us',
    name: 'Name',
    email: 'Email',
    phone: 'Phone Number',
    description: 'Description',
    send: 'Send',
    requiredField: 'Required field'
  }
};

interface ContactUsProps {
  locale: SupportedLocale;
}

function ContactUs({ locale }: ContactUsProps) {
  const t = translations[locale];

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <h2>{t.contactUs}</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">
              {t.name} <span className="required">*</span>
            </label>
            <input type="text" id="name" name="name" required placeholder="-" />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              {t.email} <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="-"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              {t.phone} <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="-"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">
              {t.description} <span className="required">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              placeholder="-"
            ></textarea>
          </div>

          <div className="form-action">
            <button type="submit" className="submit-btn">
              {t.send} ➤
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
