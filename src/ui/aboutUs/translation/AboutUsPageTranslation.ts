import TeamMember from '@/ui/aboutUs/component/TeamMember/TeamMember.tsx';

export type AboutUsPageTranslation = {
  bannerSection: BannerSection;
  aboutUsSection: AboutUsSection;
  teamMemberSection: TeamMemberSection;
  contactUsSection: ContactUsSection;
};

export type BannerSection = {
  title: string;
};

export type AboutUsSection = {
  title: string;
  description: string;
};

export type TeamMemberSection = {
  members: TeamMember[];
};

export type ContactUsSection = {
  title: string;
  form: ContactUsForm;
};

type TeamMember = {
  image: string;
  name: string;
  bio: string[];
};

type ContactUsForm = {
  contactUs: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  send: string;
  requiredField: string;
};
