import type { ContactUsSection } from '@/ui/aboutUs/translation/AboutUsPageTranslation.ts';

import './ContactUs.scss';

interface ContactUsProps {
  data: ContactUsSection;
}

function ContactUs({ data }: ContactUsProps) {
  const { title, form } = data;

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <h2>{title}</h2>
        <form method="POST" className="contact-form">
          <input type="hidden" name="form-name" value="contact-form" />
          <input name="bot-field" hidden />
          <div className="form-group">
            <label htmlFor="name">
              {form.name} <span className="required">*</span>
            </label>
            <input type="text" id="name" name="name" required placeholder="-" />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              {form.email} <span className="required">*</span>
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
              {form.phone} <span className="required">*</span>
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
              {form.description} <span className="required">*</span>
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
              {form.send} ➤
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
