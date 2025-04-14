export interface Scenario {
  title: string;
  description: string;
}

interface CarouselItem {
  image: string;
}

export interface ScenarioSection {
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

export interface ScenarioSections {
  scenarioSections: ScenarioSection[];
}
