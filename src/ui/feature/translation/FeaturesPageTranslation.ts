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
  multiLocationSection: {
    title: string;
    image: string;
    items: MultiLocationItem[];
  };
  sportsBehaviorSection: SportsBehaviorSection;
  articleSection: ArticleSection;
  canHelpSection: {
    title: string;
    tabs: CanHelpTab[];
  };
};

export type SportsBehaviorSection = {
  title: string;
  items: SportsBehaviorItem[];
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
  name: string;
  items: CanHelpItem[];
};
