import type { CaseStudyTranslation } from '@/ui/caseStudy/translation/CaseStudyTranslation.ts';

export const zhTwTranslation: CaseStudyTranslation = {
  bannerSection: {
    title: '產業成功案例',
    image: '/images/caseStudy/CaseStudy_Hero_Image.webp'
  },
  productionStatsSection: {
    title: '社群製作爆發成長',
    subtitles: ['更好、更便宜、更快速'],
    items: [
      {
        title: '製作成本下降',
        stat: '90%'
      },
      {
        title: '内容數量提升',
        stat: '10x%'
      },
      {
        title: '訊源互動延遲時間',
        stat: '<1s'
      }
    ]
  },
  tournamentSection: {
    title: '2022 英雄聯盟 校園電子競技決賽',
    subtitles: ['採用傳統本地製作方式', '動用大量專業人力和設備資源'],
    article: {
      title: '萬能科技大學現場',
      subTitles: [
        '僅需一位人員操作線上導播機',
        '(整合導播、字卡、成因、推流等需求)'
      ],
      image: '/images/caseStudy/CaseStudy_萬能科技大學現場.webp'
    },
    carouselItems: [
      {
        title: '動員成本',
        image: '/images/caseStudy/cost.webp',
        list: ['40 組螢幕', '20 位人員', '10 台電腦', '5 組控台', '4 套軟體']
      },
      {
        title: '現場人力',
        image: '/images/caseStudy/man_power.webp',
        list: ['導播', '音控', '字卡', 'OB 觀察者', '鋼管', '攝影師', '製作人']
      },
      {
        title: '僅使用',
        image: '/images/caseStudy/usage.webp',
        list: [
          '2 組螢幕',
          '2 位人員',
          '1 台電腦',
          '1 台 edge server',
          '1 套線上導播機軟體'
        ]
      }
    ]
  },
  eventsGallerySection: {
    title: '桃園電競節',
    paragraphs: [
      '利用分散式網點技術的突破,結合製播、轉播、即時通話的平台；只需透過網頁操作即可完成不論是沒有轉播經驗的大學生，或者是剛接觸賽事的高中生，都能輕易製作專業電競賽事',
      '本次活動透過此項技術，完成了所有傳說對決線上賽事轉播，總計183場線上高品質賽事製播，皆由無經驗學生完成'
    ],
    images: [
      {
        title: '桃園電競節',
        image: '/images/caseStudy/桃園電競節_1.webp'
      },
      {
        title: '桃園電競節',
        image: '/images/caseStudy/桃園電競節_2.webp'
      },
      {
        title: '桃園電競節',
        image: '/images/caseStudy/桃園電競節_3.webp'
      },
      {
        title: '桃園電競節',
        image: '/images/caseStudy/桃園電競節_4.webp'
      }
    ]
  },
  partnersSection: {
    title: '合作夥伴',
    partners: [
      {
        name: '健行科大',
        logo: '/images/caseStudy/Schools_Logo/01.webp'
      },
      {
        name: '樹德科大',
        logo: '/images/caseStudy/Schools_Logo/03.webp'
      },
      {
        name: '永平工商',
        logo: '/images/caseStudy/Schools_Logo/04.webp'
      },
      {
        name: '萬能科大',
        logo: '/images/caseStudy/Schools_Logo/05.webp'
      },
      {
        name: '黎明科大',
        logo: '/images/caseStudy/Schools_Logo/02.webp'
      }
    ]
  },
  grassrootsSection: {
    title: '草根社群體育',
    subtitles: ['任何賽事都能做到不同角度的直播'],
    thirdPersonPerspective: {
      title: '第三人稱視角',
      image: '/images/caseStudy/thirdperson.webp'
    },
    secondPersonPerspective: {
      title: '第二人稱視角',
      image: '/images/caseStudy/secondperson.webp'
    }
  }
};
