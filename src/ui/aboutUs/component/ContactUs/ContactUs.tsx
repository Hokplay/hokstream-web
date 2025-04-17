import { contactConfig } from '@/config/contactConfig.ts';
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
        <form className="contact-form">
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
            {/*<button type="submit" className="submit-btn">*/}
            {/*  {t.send} ➤*/}
            {/*</button>*/}
            <a
              href={`mailto:${contactConfig.email}`}
              target="_blank"
              x-class="block ml-auto max-w-max bg-$Primary cursor-pointer no-underline leading-28px"
              uno-text="#ffffff"
              uno-border="rounded-20px"
              uno-p="x-20px y-4px"
              rel="noreferrer"
            >
              {form.send}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
