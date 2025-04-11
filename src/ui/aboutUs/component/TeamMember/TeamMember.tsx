import React from 'react';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';

import './TeamMember.scss';

const translations = {
  'zh-TW': {
    kevinPaiBio:
      '在遊戲產業 13 年工作經驗，於眾多遊戲公司任職，曾任線上遊戲「英雄聯盟」台港澳與東南亞區負責人，後續再於各大知名遊戲公司如 Garena, SEA Group, Supercell, Riot Games, Tencent, Funplus, and TESL 擔任總經理、執行長等職位。\n\n熟悉遊戲產業的上下游業務生態，並致力打造更完善的遊戲生態產業鏈 (社群、遊戲發行、行銷、電子競技、數位內容等) 。'
  },
  'en-US': {
    kevinPaiBio:
      'With 13 years of experience in the gaming industry, Kevin has worked at numerous gaming companies and was formerly responsible for League of Legends in Taiwan, Hong Kong, Macau, and Southeast Asia regions. Subsequently, he has held positions such as General Manager and CEO at major gaming companies including Garena, SEA Group, Supercell, Riot Games, Tencent, Funplus, and TESL.\n\nHe is familiar with the upstream and downstream business ecosystem of the gaming industry and is committed to creating a more comprehensive gaming industry chain (community, game publishing, marketing, esports, digital content, etc.).'
  }
};

function TeamMember() {
  const { locale } = useTranslation();
  const t = translations[locale];

  return (
    <div className="team-section" id="team">
      <div className="team-members">
        <div className="team-member-card">
          <div
            className="member-image"
            style={{
              backgroundImage: 'url(/images/Kevin_Pai_Placeholder.png)'
            }}
          ></div>
          <h3 className="member-name">KEVIN PAI</h3>
          <div className="member-info">
            <p className="member-bio">
              {t.kevinPaiBio.split('\n\n').map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  {index < t.kevinPaiBio.split('\n\n').length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
