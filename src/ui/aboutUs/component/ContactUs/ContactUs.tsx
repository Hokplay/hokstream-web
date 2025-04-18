import type { ContactUsSection } from '@/ui/aboutUs/translation/AboutUsPageTranslation.ts';

import './ContactUs.scss';

interface ContactUsProps {
  data: ContactUsSection;
}

function ContactUs({ data }: ContactUsProps) {
  const { title, form } = data;
  return (
    <section className="contact-section">
      <div className="section-container">
        <h2>{title}</h2>
        <form className="contact-form" method="POST" name="contactForm">
          <div className="form-group">
            <input type="hidden" name="form-name" value="contactForm" />

            <label htmlFor="name">
              {form.name} <span className="required">*</span>
            </label>
            <input type="text" name="name" required placeholder="-" />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              {form.email} <span className="required">*</span>
            </label>
            <input type="email" name="email" required placeholder="-" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              {form.phone} <span className="required">*</span>
            </label>
            <input type="tel" name="phone" required placeholder="-" />
          </div>

          <div className="form-group">
            <label htmlFor="description">
              {form.description} <span className="required">*</span>
            </label>
            <textarea
              name="description"
              required
              rows={5}
              placeholder="-"
            ></textarea>
          </div>

          <div className="form-action">
            <button type="submit" className="submit-btn">
              {form.send} ➤
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
