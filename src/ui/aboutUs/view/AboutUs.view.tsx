import TeamMember from '@/ui/aboutUs/component/TeamMember/TeamMember.tsx';
import ContactUs from '@/ui/aboutUs/component/ContactUs/ContactUs.tsx';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import Banner from '@/ui/aboutUs/component/Banner/Banner.tsx';
import AboutUs from '@/ui/aboutUs/component/AboutUs/AboutUs.tsx';
import { translations } from '@/ui/aboutUs/translation/translations.ts';

import './AboutUs.scss';

function AboutUsView() {
  const { locale } = useTranslation();
  const content = translations[locale];

  return (
    <div>
      <Banner title={content.bannerSection.title} />
      <AboutUs data={content.aboutUsSection} />
      <TeamMember data={content.teamMemberSection} />
      <ContactUs data={content.contactUsSection} />
    </div>
  );
}

export default AboutUsView;
