import type { ContactUsSection } from '@/ui/aboutUs/translation/AboutUsPageTranslation.ts';

import './ContactUs.scss';

interface ContactUsProps {
  data: ContactUsSection;
}

function ContactUs({ data }: ContactUsProps) {
  const { title, form } = data;
  console.log(title, form);
  return (
    <section className="contact-section">
      <div className="section-container">
        <form method="POST" name="contactform" className="contactForm">
          <input type="hidden" name="form-name" value="contactForm" />

          <input type="text" name="name" placeholder="Enter your name" />

          <input type="email" name="email" placeholder="Enter your email" />

          <textarea name="message" placeholder="Messaage"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
