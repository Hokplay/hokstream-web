import type { IntroductionPageTranslation } from '@/ui/introduction/translation/IntroductionPageTranslation.ts';

export const zhTwTranslation: IntroductionPageTranslation = {
  bannerSection: {
    image: '/images/introduction/Introduction_Hero_Placeholder_Video.png',
    title: 'WHAT ARE WE?'
  },
  coreValueSection: {
    title: 'Core Value',
    items: [
      {
        image: '/images/introduction/輕鬆使用_低學習門欄.png',
        title: 'Easy to Use, Low Learning Curve'
      },
      {
        image: '/images/introduction/賦能社群成員製作能力.png',
        title: 'Empower Community Members in Content Creation'
      },
      {
        image: '/images/introduction/製作數量大_製作品質高_低成本.png',
        title: 'High Production Volume + High Quality + Low Cost'
      }
    ]
  },
  scenarioSection: [
    {
      id: 'game-company',
      title: '遊戲方',
      introduction:
        '(Sample Text) SPORTSMESH 為遊戲開發商提供最先進的串流解決方案，讓您的遊戲內容以最佳畫質和流暢度呈現給觀眾。我們的去中心化架構讓開發商、內容創作者和場地方能夠無縫協作，共同打造互動性更高的直播體驗',
      tags: ['不限遊戲屬性', '強化場域能力'],
      scenario: {
        title: 'Coming Soon (情景解釋',
        description:
          'Coming Soon (Lorem ipsum in mattis tellus euismod leo orci odio elementum vitae sed lorem venenatis mi nunc vulputate dictum fermentum feugiat.)'
      },
      carouselItems: [
        { image: '/images/introduction/image-placeholder.png' },
        { image: '/images/introduction/image-placeholder.png' },
        { image: '/images/introduction/image-placeholder.png' }
      ],
      moreInfo: {
        label: '更多資訊',
        linkTo: ''
      }
    },
    {
      id: 'creator',
      title: '製作方',
      introduction:
        '(Sample Text) 無論您是剪輯師、直播導播還是內容創作者，SPORTSMESH 讓您可以與遊戲開發商和場地方同步協作，共同製作高品質直播內容。我們的去中心化設計意味著，您可以即時編輯、調整畫面，不受設備或位置限制',
      tags: ['不限遊戲屬性', '強化場域能力'],
      scenario: {
        title: 'Coming Soon (情景解釋',
        description:
          'Coming Soon (Lorem ipsum in mattis tellus euismod leo orci odio elementum vitae sed lorem venenatis mi nunc vulputate dictum fermentum feugiat.)'
      },
      carouselItems: [
        { image: '/images/introduction/image-placeholder.png' },
        { image: '/images/introduction/image-placeholder.png' },
        { image: '/images/introduction/image-placeholder.png' }
      ],
      moreInfo: {
        label: '更多資訊',
        linkTo: ''
      }
    },
    {
      id: 'venue',
      title: '場域方',
      introduction:
        '(Sample Text) 作為活動場地或賽事舉辦方，您可以透過 SPORTSMESH 與遊戲開發商、內容創作者同步協作，確保現場轉播的每個細節都完美呈現。我們的去中心化系統讓您能即時參與製作，提供更靈活的直播解決方案',
      tags: ['不限遊戲屬性', '強化場域能力'],
      scenario: {
        title: 'Coming Soon (情景解釋',
        description:
          'Coming Soon (Lorem ipsum in mattis tellus euismod leo orci odio elementum vitae sed lorem venenatis mi nunc vulputate dictum fermentum feugiat.)'
      },
      carouselItems: [
        { image: '/images/introduction/image-placeholder.png' },
        { image: '/images/introduction/image-placeholder.png' },
        { image: '/images/introduction/image-placeholder.png' }
      ],
      moreInfo: {
        label: '更多資訊',
        linkTo: ''
      }
    }
  ]
};
