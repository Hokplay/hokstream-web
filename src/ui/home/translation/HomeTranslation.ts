export interface HomeTranslation {
  banner: BannerData;
  howSportsmeshWorksSection: HowItWorksSection;
  partners: PartnerInfo[];
}

export interface BannerTag {
  label: string;
}

export interface BannerData {
  title: string;
  image: string;
  tags: BannerTag[];
}

export interface ProductionInfo {
  type: string;
  description: string;
  image: string;
}

export interface HowItWorksSection {
  title: string;
  productions: ProductionInfo[];
}

export interface PartnerInfo {
  logoUrl: string;
  name: string;
}
