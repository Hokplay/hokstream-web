import type { AboutUsPageTranslation } from './AboutUsPageTranslation.ts';

export const enUsTranslation: AboutUsPageTranslation = {
  bannerSection: {
    title: 'ABOUT\nUS'
  },
  aboutUsSection: {
    title: 'ABOUT US',
    description:
      "We're passionate about low-latency live streaming and AI technology, translating expertise into practical solutions. With cross-disciplinary experience in system architecture, AI, and project management, we quickly identify and address industry needs, particularly in esports and sports broadcasting. We specialize in managing complex, multi-source live events, providing end-to-end streaming solutions from on-site production to cloud-based transmission, ensuring stable and interactive viewing experiences. Our AI modules enable real-time video understanding, automated tagging, and highlight generation, transforming visuals into actionable insights. Moving forward, we'll continue innovating at the intersection of streaming and AI, collaborating to build next-gen interactive media ecosystems."
  },
  teamMemberSection: {
    members: [
      {
        image: '/images/aboutUs/Kevin_Pai_Placeholder.png',
        name: 'KEVIN PAI',
        bio: [
          'With 13 years of experience in the gaming industry, I have held positions at multiple gaming companies. I previously served as the person in charge of the online game League of Legends in the Taiwan, Hong Kong, Macau, and Southeast Asia regions. Later, I held senior management positions such as General Manager and Executive Director at renowned gaming companies, including Garena, SEA Group, Supercell, Riot Games, Tencent, FunPlus, and TESL.',
          'I am well-versed in the upstream and downstream ecosystem of the gaming industry and am committed to building a more comprehensive gaming ecosystem, including communities, game publishing, marketing, esports, and digital content.'
        ]
      }
    ]
  },
  contactUsSection: {
    title: 'CONTACT US',
    form: {
      contactUs: 'Contact Us',
      name: 'Name',
      email: 'Email',
      phone: 'Phone Number',
      description: 'Description',
      send: 'Send',
      requiredField: 'Required field'
    }
  }
};
