import { useState } from 'react';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';

import './AboutUs.scss';

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

function AboutUsView() {
  const { locale } = useTranslation();
  const t = translations[locale];
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleContactChange = e => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };

  const handleContactSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', contactForm);
    // Reset form after submission
    setContactForm({
      name: '',
      email: '',
      phone: '',
      description: ''
    });
    // Show success message or other feedback
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <h2>{t.contactUs}</h2>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              {t.name} <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactForm.name}
              onChange={handleContactChange}
              required
              placeholder="-"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              {t.email} <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactForm.email}
              onChange={handleContactChange}
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
              value={contactForm.phone}
              onChange={handleContactChange}
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
              value={contactForm.description}
              onChange={handleContactChange}
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

export default AboutUsView;
