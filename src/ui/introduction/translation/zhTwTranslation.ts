import type { IntroductionPageTranslation } from '@/ui/introduction/translation/IntroductionPageTranslation.ts';

export const zhTwTranslation: IntroductionPageTranslation = {
  bannerSection: {
    image: '/images/introduction/Introduction_Hero_Placeholder_Video.webp',
    title: 'SPORTSMESH'
  },
  coreValueSection: {
    title: '核心理念',
    items: [
      {
        image: '/images/introduction/輕鬆使用_低學習門欄.webp',
        title: '輕鬆使用，低學習門欄'
      },
      {
        image: '/images/introduction/賦能社群成員製作能力.webp',
        title: '賦能社群成員製作能力'
      },
      {
        image: '/images/introduction/製作數量大_製作品質高_低成本.webp',
        title: '製作數量大 + 製作品質高 + 低成本'
      }
    ]
  },
  scenarioSection: [
    {
      id: 'game-company',
      title: '遊戲方',
      introduction:
        'SPORTSMESH 為遊戲開發商提供最先進的串流解決方案，讓您的遊戲內容以最佳畫質和流暢度呈現給觀眾。我們的去中心化架構讓開發商、內容創作者和場地方能夠無縫協作，共同打造互動性更高的直播體驗',
      tags: ['不限遊戲屬性', '強化場域能力'],
      scenario: {
        title: '遊戲社群',
        description:
          '遊戲供應商為社群建立指定節目腳本，透過社群產生大量品質穩定與有效的內容，進而提升玩家的黏著性與生命週期'
      },
      carouselItems: [
        { image: '/images/introduction/遊戲方_假情境圖.webp' }
        // { image: '/images/introduction/image-placeholder.png' },
        // { image: '/images/introduction/image-placeholder.png' }
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
        '無論您是剪輯師、直播導播還是內容創作者，SPORTSMESH 讓您可以與遊戲開發商和場地方同步協作，共同製作高品質直播內容。我們的去中心化設計意味著，您可以即時編輯、調整畫面，不受設備或位置限制',
      tags: ['不限遊戲屬性', '強化場域能力'],
      scenario: {
        title: '多訊源遠端製作',
        description:
          '透過 SPORTSMESH 僅需普通設備與低人力成本，實現多地時時轉播、導播節目以提升競爭能力'
      },
      carouselItems: [
        { image: '/images/introduction/製作方_假情景圖.webp' }
        // { image: '/images/introduction/image-placeholder.png' },
        // { image: '/images/introduction/image-placeholder.png' }
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
        '作為活動場地或賽事舉辦方，您可以透過 SPORTSMESH 與遊戲開發商、內容創作者同步協作，確保現場轉播的每個細節都完美呈現。我們的去中心化系統讓您能即時參與製作，提供更靈活的直播解決方案',
      tags: ['不限遊戲屬性', '強化場域能力'],
      scenario: {
        title: '快速搭建、靈活運用',
        description:
          '極低延遲的視頻以及輕量設備與行動裝置，快速且高效的因應場景調整，不錯過賽事經典畫面與重要事件'
      },
      carouselItems: [
        { image: '/images/introduction/場域方_假情景圖.webp' }
        // { image: '/images/introduction/image-placeholder.png' },
        // { image: '/images/introduction/image-placeholder.png' }
      ],
      moreInfo: {
        label: '更多資訊',
        linkTo: ''
      }
    }
  ]
};
