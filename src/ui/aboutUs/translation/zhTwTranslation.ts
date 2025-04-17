import type { AboutUsPageTranslation } from './AboutUsPageTranslation.ts';

export const zhTwTranslation: AboutUsPageTranslation = {
  bannerSection: {
    title: '關於我們'
  },
  aboutUsSection: {
    title: '關於我們',
    description:
      '我們是一支專注低延遲直播技術與 AI 影像應用的跨界團隊，成員涵蓋系統架構、AI 開發及專案管理。我們擅長處理電子競技與運動賽事的高即時性、多訊源直播需求，提供從訊號整合、轉播製作到雲端串流的完整解決方案，打造穩定且具互動性的觀看體驗。此外，我們利用AI影像理解技術，將直播內容轉化為結構化資訊，應用於自動標記與精華剪輯，提升內容價值。未來將持續推動技術創新，深化即時影音應用，並與夥伴共同打造下一代互動影音生態'
  },
  teamMemberSection: {
    members: [
      {
        image: '/images/aboutUs/Kevin_Pai_Placeholder.webp',
        name: 'KEVIN PAI',
        bio: [
          '在遊戲產業 13 年工作經驗，於眾多遊戲公司任職。曾任線上遊戲「英雄聯盟」台港澳與東南亞區負責人，後續再於各大知名遊戲公司如 Garena、SEA Group、Supercell、Riot Games、Tencent、Funplus、TESL 擔任總經理、執行長等職位。',
          '熟悉遊戲產業的上下游業務生態，並致力打造更完善的遊戲生態產業鏈（社群、遊戲發行、行銷、電子競技、數位內容等）。'
        ]
      }
    ]
  },
  contactUsSection: {
    title: '聯絡我們',
    form: {
      contactUs: '聯絡我們',
      name: '姓名',
      email: '信箱',
      phone: '手機號碼',
      description: '描述',
      send: '發送',
      requiredField: '必填欄位'
    }
  }
};
