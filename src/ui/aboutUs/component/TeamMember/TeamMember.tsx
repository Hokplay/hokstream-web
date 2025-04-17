import type { TeamMemberSection } from '@/ui/aboutUs/translation/AboutUsPageTranslation.ts';

import './TeamMember.scss';

interface TeamMemberProps {
  data: TeamMemberSection;
}

function TeamMember({ data }: TeamMemberProps) {
  const { members } = data;
  return (
    <section className="team-section">
      <div className="team-members">
        {members.map((member, index) => (
          <div key={index} className="team-member-card">
            <div
              className="member-image"
              style={{ backgroundImage: `url(${member.image})` }}
            ></div>
            <h3 className="member-name">{member.name}</h3>
            <div className="member-info">
              {member.bio.map((paragraph, index) => (
                <p key={index} x-class="leading-normal text-16px xl-text-18px">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamMember;
