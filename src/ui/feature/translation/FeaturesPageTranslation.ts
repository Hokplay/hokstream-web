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
  highlights: ProductHighlight[];
};

export type ArticleSection = {
  articles: Article[];
};

export type CoreFeatureSection = {
  title: string;
  multiLocationSection: {
    title: string;
    image: string;
    items: MultiLocationItem[];
  };
  sportsBehaviorSection: SportsBehaviorSection;
  articleSection: ArticleSection;
  canHelpSection: CanHelpSection;
};

export type SportsBehaviorSection = {
  title: string;
  items: SportsBehaviorItem[];
};

export type CanHelpSection = {
  title: string;
  tabs: CanHelpTab[];
};

type ProductHighlight = {
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
  name: string;
  items: CanHelpItem[];
};
