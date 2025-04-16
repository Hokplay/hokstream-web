import type { FeaturesPageTranslation } from '@/ui/feature/translation/FeaturesPageTranslation.ts';

export const zhTwTranslation: FeaturesPageTranslation = {
  bannerSection: {
    title: '我們的強項？',
    image: '/images/features/faces-collage.jpg'
  },
  productHighlightsSection: {
    title: '產品亮點',
    highlights: [
      {
        icon: '/images/features/icon-live.png',
        title: '設計&轉播分離',
        description:
          '將轉播設計與執行分開，讓無經驗的使用者也能輕鬆製作並發布轉播內容'
      },
      {
        icon: '/images/features/icon-resource.png',
        title: '遠程製作',
        description: '支援遠程操作及多路異地訊號切換'
      },
      {
        icon: '/images/features/Web3去中心化-icon.png',
        title: 'Web3 去中心化',
        description:
          '運用 Web3 概念，透過去中心化和邊緣運算減少延遲，提升轉播品質'
      },
      {
        icon: '/images/features/learning_curve-icon.png',
        title: '無學習門檻',
        description: '所有參與者無需安裝軟體或學習程式，降低參與門檻'
      },
      {
        icon: '/images/features/catless-icon.png',
        title: '不限遊戲屬性',
        description:
          '應用範圍廣泛，讓非電競遊戲也能輕鬆進行多人互動直播，取代 OB 功能'
      },
      {
        icon: '/images/features/reinforce_cat-icon.png',
        title: '強化場域能力',
        description:
          '將社群成員與場域主的能力發揮，讓實體場域成為本地社群的活動中心'
      }
    ]
  },
  coreFeatureSection: {
    title: '核心功能',
    multiLocationSection: {
      title: '多地遠端互動製播模組',
      image: '/images/features/broadcasting_interface.png',
      items: [
        {
          image: '/images/features/start_animate.png',
          title: '線上字卡/開頭動畫',
          description:
            '製作者可即時進行字卡修改，透過賽事設計者統一設計，確保完美符合轉需求'
        },
        {
          image: '/images/features/low_latency.png"',
          title: '異地低延遲多訊源互動',
          description: '所有訊號延遲都低於 0.5 秒內，支援最多 18 路訊號，60FPS'
        },
        {
          image: '/images/features/flow.png',
          title: '賽事流程控管',
          description:
            '主辦單位/賽事設計者使用預先設定好的轉播流程&場景，控管所有操作單位行為，最大程度降低人為失誤的可能性'
        },
        {
          image: '/images/features/signals.png',
          title: '來自各地的訊號源',
          description:
            '可收取來自電腦桌面、手機、攝影機等不同訊源，訊源位置來自各個地方。使用者僅需掃描QRCode或是使用瀏覽器打開連結即可提供訊源'
        }
      ]
    },
    sportsBehaviorSection: {
      title: '運動行爲偵測與記錄',
      items: [
        {
          image: '/images/features/v_understands.png',
          title: '影片理解',
          description:
            '透過模型理解影片內容，進而能應用到各種商務情境並轉化成功能'
        },
        {
          image: '/images/features/video-processing-app.jpg',
          title: '內容解析',
          description:
            'AI 能夠讀取遊戲畫面中的資訊，例如血量、副本、怪物狀態、傷害數值等等'
        }
      ]
    },
    articleSection: {
      articles: [
        {
          title: '多地遠程製作',
          image: '/images/features/Multi-Location-Remote-Production.png',
          description:
            '支援 8~16 路來自多地不同訊源,包含遊戲畫面、視訊鏡頭、手機前後鏡頭、攝影機...等。並透過獨特低延遲傳輸技術,獲得各地訊源進行製作。製作者亦可透過遠端操作方式進行即時轉播。'
        },
        {
          title: '無學習門欄',
          image: '/images/features/working.png',
          description:
            '所以參賽者不用安裝 OBS、VMIX 等軟體，不用學會如何傳輸訊號，僅需要使用瀏覽器打開連結即可參與'
        },
        {
          title: '不限遊戲屬性',
          image: '/images/features/category_less.png',
          description:
            '電競類型游戲，可以製作更多不同類型内容，非電競類型游戲，不需要開發 OB 功能，也可以直接製作成有趣的線上轉播行銷内容'
        },
        {
          title: '去中心化設計',
          image: '/images/features/Decentralized-Design.png',
          description:
            '每個場域都是轉播製作中心,每個社群都可以自產遊戲 擴散內容。去中心化的設計讓所有跨地影像訊源延遲時間,從 3~10 秒降低至 1 秒以内'
        }
      ]
    },
    canHelpSection: {
      title: '這些都能幫...',
      tabs: [
        {
          name: '遊戲方',
          items: [
            {
              title: '多地遠程製作',
              description: '更多社群自製的對抗内容'
            },
            {
              title: '無學習門欄',
              description: '更多跨社群對抗内容、線上節目製作成本下降'
            },
            {
              title: '不限遊戲屬性',
              description: '節省研發 OB 成本，提早開始建立競技社群'
            },
            {
              title: '去中心化設計',
              description:
                '提升社群製作内容彈性、强化社區自主宣傳、降低廣告壓力'
            }
          ]
        },
        {
          name: '製作方',
          items: [
            {
              title: '多地遠程製作',
              description: '降低社群賽事製作成本、減少設備&人力物流成本'
            },
            {
              title: '無學習門欄',
              description: '線上節目製作難易度下降、内容彈性增加、溝通成本下降'
            },
            {
              title: '不限遊戲屬性',
              description: '擴充業務内容，以往不易製作的SLG國戰轉播可以輕鬆完成'
            },
            {
              title: '去中心化設計',
              description: '提升製作彈性、降低物流成本'
            }
          ]
        },
        {
          name: '場域方',
          items: [
            {
              title: '多地遠程製作',
              description: '自行製作店内比賽&轉播、網咖間賽事、垮地公司盃...等'
            },
            {
              title: '無學習門欄',
              description: '輕鬆獲取場域内外所有需要畫面'
            },
            {
              title: '不限遊戲屬性',
              description: '擁有自製内容能力、應用領域靈活彈性'
            },
            {
              title: '去中心化設計',
              description:
                '從單純場域經營升級成内容製作中心、大量内容製作機會訓練製作人才'
            }
          ]
        }
      ]
    }
  }
};
