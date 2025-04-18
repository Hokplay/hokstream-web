import type { IntroductionPageTranslation } from '@/ui/introduction/translation/IntroductionPageTranslation.ts';

export const enUsTranslation: IntroductionPageTranslation = {
  bannerSection: {
    image: '/images/introduction/Introduction_Hero_Placeholder_Video.webp',
    title: 'SPORTSMESH'
  },
  coreValueSection: {
    title: 'Core Value',
    items: [
      {
        image: '/images/introduction/輕鬆使用_低學習門欄.webp',
        title: 'Easy to Use, Low Learning Curve'
      },
      {
        image: '/images/introduction/賦能社群成員製作能力.webp',
        title: 'Empower Community Members in Content Creation'
      },
      {
        image: '/images/introduction/製作數量大_製作品質高_低成本.webp',
        title: 'High Production Volume + High Quality + Low Cost'
      }
    ]
  },
  scenarioSection: [
    {
      id: 'game-company',
      title: 'Game Company',
      introduction:
        'SPORTSMESH provides game developers with the most advanced streaming solutions, ensuring that your game content is delivered to audiences with the best quality and smoothness. Our decentralized architecture enables seamless collaboration between developers, content creators, and venue operators, creating a more interactive live streaming experience',
      tags: ['不限遊戲屬性', '強化場域能力'],
      scenario: {
        title: 'Gaming community',
        description:
          'Game providers create dedicated program scripts for the community, enabling them to generate a large amount of consistent, high-quality, and effective content — thereby increasing player engagement and lifetime value.'
      },
      carouselItems: [
        { image: '/images/introduction/遊戲方_假情境圖.webp' }
        // { image: '/images/introduction/image-placeholder.png' },
        // { image: '/images/introduction/image-placeholder.png' }
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
        "Whether you're an editor, live broadcast director, or content creator, SPORTSMESH allows you to collaborate in real-time with game developers and venue operators to produce high-quality live content. Our decentralized design means you can edit and adjust visuals instantly, without being limited by equipment or location",
      tags: ['不限遊戲屬性', '強化場域能力'],
      scenario: {
        title: 'Multi-source Remote Production',
        description:
          'With SPORTSMESH, only standard equipment and minimal manpower are needed to enable real-time broadcasting and production across multiple locations, enhancing competitive advantage.'
      },
      carouselItems: [
        { image: '/images/introduction/製作方_假情景圖.webp' }
        // { image: '/images/introduction/image-placeholder.png' },
        // { image: '/images/introduction/image-placeholder.png' }
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
        'As an event venue or tournament organizer, SPORTSMESH enables you to collaborate with game developers and content creators to ensure every detail of the live broadcast is perfectly presented. Our decentralized system allows you to participate in production in real time, providing a more flexible live streaming solution',
      tags: ['不限遊戲屬性', '強化場域能力'],
      scenario: {
        title: 'Quick setup and flexible deployment',
        description:
          'Ultra-low latency video with lightweight equipment and mobile devices enables fast and efficient adaptation to changing scenarios, ensuring no iconic moments or key events are missed.'
      },
      carouselItems: [
        { image: '/images/introduction/場域方_假情景圖.webp' }
        // { image: '/images/introduction/image-placeholder.png' },
        // { image: '/images/introduction/image-placeholder.png' }
      ],
      moreInfo: {
        label: 'Learn More',
        linkTo: ''
      }
    }
  ]
};
