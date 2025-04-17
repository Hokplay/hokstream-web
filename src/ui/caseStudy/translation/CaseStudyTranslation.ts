export interface CaseStudyTranslation {
  bannerSection: BannerSection;
  productionStatsSection: ProductionStatsSection;
  tournamentSection: TournamentSection;
  eventsGallerySection: EventsGallerySection;
  partnersSection: PartnersSection;
  grassrootsSection: GrassrootsSection;
}

export interface BannerSection {
  title: string;
  image: string;
}

export interface ProductionStatsSection {
  title: string;
  subtitles: string[];
  items: ProductionStatsItem[];
}

interface ProductionStatsItem {
  title: string;
  stat: string;
}

interface TournamentArticle {
  title: string;
  subTitles: string[];
  image: string;
}

export interface TournamentSection {
  title: string;
  subtitles: string[];
  article: TournamentArticle;
  carouselItems: TournamentCarouselItem[];
}

export interface EventsGallerySection {
  title: string;
  paragraphs: string[];
  images: EventsImage[];
}

export interface GrassrootsSection {
  title: string;
  subtitles: string[];
  thirdPersonPerspective: {
    title: string;
    image: string;
  };
  secondPersonPerspective: {
    title: string;
    image: string;
  };
}

export interface PartnersSection {
  title: string;
  partners: Partner[];
}

export interface TournamentCarouselItem {
  title: string;
  image: string;
  list: string[];
}

interface EventsImage {
  title: string;
  image: string;
}

interface Partner {
  name: string;
  logo: string;
}
