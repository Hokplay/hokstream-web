export interface HomeTranslation {
  bannerSection: BannerSection;
  howSportsmeshWorksSection: HowItWorksSection;
  partnersSection: Partner[];
}

export interface BannerSection {
  title: string;
  image: string;
  tags: Tag[];
}

export interface HowItWorksSection {
  title: string;
  traditionalProduction: Production;
  communityProduction: Production;
}

export interface Tag {
  label: string;
}

export interface Production {
  title: string;
  description: string;
  image: string;
}

export interface Partner {
  logoUrl: string;
  name: string;
}
