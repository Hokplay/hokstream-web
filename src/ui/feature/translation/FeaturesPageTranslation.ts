export type FeaturesPageTranslation = {
  bannerSection: BannerSection;
  productHighlightsSection: ProductHighlightsSection;
  coreFeatureSection: CoreFeatureSection;
};

export type BannerSection = {
  title: string;
  image: string;
};

export type ProductHighlightsSection = {
  title: string;
  highlights: HighlightItem[];
};

export type ArticleSection = {
  articles: Article[];
};

export type CoreFeatureSection = {
  title: string;
  multiLocationSection: MultiLocationSection;
  sportsBehaviorSection: SportsBehaviorSection;
  articleSection: ArticleSection;
  canHelpSection: CanHelpSection;
};

export type MultiLocationSection = {
  title: string;
  image: string;
  items: MultiLocationItem[];
};

export type SportsBehaviorSection = {
  title: string;
  items: SportsBehaviorItem[];
};

export type CanHelpSection = {
  title: string;
  tabs: CanHelpTab[];
};

type HighlightItem = {
  icon: string;
  title: string;
  description: string;
};

type MultiLocationItem = {
  image: string;
  title: string;
  description: string;
};

type SportsBehaviorItem = {
  image: string;
  title: string;
  description: string;
};

type Article = {
  title: string;
  image: string;
  description: string;
};

type CanHelpItem = {
  title: string;
  description: string;
};

type CanHelpTab = {
  id: string;
  name: string;
  items: CanHelpItem[];
};
