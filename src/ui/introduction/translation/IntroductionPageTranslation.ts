export interface IntroductionPageTranslation {
  bannerSection: BannerSection;
  coreValueSection: CoreValueSection;
  scenarioSection: ScenarioSection;
}

export interface BannerSection {
  image: string;
  title: string;
}

export interface CoreValueSection {
  title: string;
  items: CoreValueItem[];
}

export type ScenarioSection = ScenarioItem[];

type CoreValueItem = {
  title: string;
  image: string;
};

type Scenario = {
  title: string;
  description: string;
};

interface CarouselItem {
  image: string;
}

export interface ScenarioItem {
  id: string;
  title: string;
  introduction: string;
  tags: string[];
  scenario: Scenario;
  carouselItems: CarouselItem[];
  moreInfo: {
    label: string;
    linkTo: string;
  };
}
