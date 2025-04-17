import type { TournamentSection } from '@/ui/caseStudy/translation/CaseStudyTranslation.ts';

interface TournamentSectionProps {
  data: TournamentSection;
}

function TournamentSection({ data }: TournamentSectionProps) {
  return (
    <div uno-p="[40px_0_60px]">
      <div x-class="max-w-1280px mx-auto">
        <h2 x-className="lg-text-36px mb-12px">{data.title}</h2>

        <div x-class="mb-50px">
          {data.subtitles.map((subtitle, index) => (
            <p key={index} x-class="my-5px lg-text-20px" uno-text="$Text 16px">
              {subtitle}
            </p>
          ))}
        </div>

        <span
          x-class="block mb-40px mx-auto w-fit bg-$Secondary rounded-40px"
          uno-p="[10px_25px]"
          uno-text="#ffffff 1rem"
        >
          {data.article.title}
        </span>

        <div x-class="mb-30px">
          {data.article.subTitles.map((subTitle, index) => (
            <p
              key={index}
              x-class="my-0 font-bold"
              uno-text="$Accent center 1.2rem"
            >
              {subTitle}
            </p>
          ))}
        </div>

        <div x-class="max-w-800px aspect-800/450 overflow-hidden mb-30px mx-auto">
          <img
            x-class="w-full h-full object-cover"
            src={data.article.image}
            alt={data.article.title}
          />
        </div>
      </div>
    </div>
  );
}

export default TournamentSection;
