import type { ScenarioSections } from '@/ui/introduction/translations/Scenarios.ts';

// TODO: 整合其他 section
export const enUsTranslation: ScenarioSections = {
  scenarioSections: [
    {
      id: 'game-company',
      title: 'Game Company',
      introduction:
        '(Sample Text) SPORTSMESH provides game developers with the most advanced streaming solutions, ensuring that your game content is delivered to audiences with the best quality and smoothness. Our decentralized architecture enables seamless collaboration between developers, content creators, and venue operators, creating a more interactive live streaming experience',
      tags: ['不限遊戲屬性', '強化場域能力'],
      scenario: {
        title: 'Coming Soon (Scenario Explanation',
        description:
          'Coming Soon (Lorem ipsum in mattis tellus euismod leo orci odio elementum vitae sed lorem venenatis mi nunc vulputate dictum fermentum feugiat.)'
      },
      carouselItems: [
        { image: '/images/introduction/image-placeholder.png' },
        { image: '/images/introduction/image-placeholder.png' },
        { image: '/images/introduction/image-placeholder.png' }
      ],
      moreInfo: {
        label: 'Learn More',
        linkTo: ''
      }
    },
    {
      id: 'creator',
      title: 'Creator',
      introduction:
        "(Sample Text) Whether you're an editor, live broadcast director, or content creator, SPORTSMESH allows you to collaborate in real-time with game developers and venue operators to produce high-quality live content. Our decentralized design means you can edit and adjust visuals instantly, without being limited by equipment or location",
      tags: ['不限遊戲屬性', '強化場域能力'],
      scenario: {
        title: 'Coming Soon (Scenario Explanation',
        description:
          'Coming Soon (Lorem ipsum in mattis tellus euismod leo orci odio elementum vitae sed lorem venenatis mi nunc vulputate dictum fermentum feugiat.)'
      },
      carouselItems: [
        { image: '/images/introduction/image-placeholder.png' },
        { image: '/images/introduction/image-placeholder.png' },
        { image: '/images/introduction/image-placeholder.png' }
      ],
      moreInfo: {
        label: 'Learn More',
        linkTo: ''
      }
    },
    {
      id: 'venue',
      title: 'Venue',
      introduction:
        '(Sample Text) As an event venue or tournament organizer, SPORTSMESH enables you to collaborate with game developers and content creators to ensure every detail of the live broadcast is perfectly presented. Our decentralized system allows you to participate in production in real time, providing a more flexible live streaming solution',
      tags: ['不限遊戲屬性', '強化場域能力'],
      scenario: {
        title: 'Coming Soon (Scenario Explanation',
        description:
          'Coming Soon (Lorem ipsum in mattis tellus euismod leo orci odio elementum vitae sed lorem venenatis mi nunc vulputate dictum fermentum feugiat.)'
      },
      carouselItems: [
        { image: '/images/introduction/image-placeholder.png' },
        { image: '/images/introduction/image-placeholder.png' },
        { image: '/images/introduction/image-placeholder.png' }
      ],
      moreInfo: {
        label: 'Learn More',
        linkTo: ''
      }
    }
  ]
};
