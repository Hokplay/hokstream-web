import { useTranslation } from '@/i18n/hook/useTranslation.ts';

const translations = {
  'zh-TW': {
    title: '社群製作爆發成長',
    subtitle: '更好、更便宜、更快速',
    data: [
      {
        title: '製作成本下降',
        stat: '90%'
      },
      {
        title: '內容數量提升',
        stat: '10x%'
      },
      {
        title: '訊源互動延遲時間',
        stat: '<1s'
      }
    ]
  },
  'en-US': {
    title: 'Social Media Production Growth',
    subtitle: 'Better, Cheaper, Faster',
    data: [
      {
        title: 'Production Cost Reduction',
        stat: '90%'
      },
      {
        title: 'Content Quantity Increase',
        stat: '10x%'
      },
      {
        title: 'Source Interaction Delay',
        stat: '<1s'
      }
    ]
  }
};

function StatsSection() {
  const { locale } = useTranslation();
  const content = translations[locale];

  return (
    <div className="py-40px">
      <h1 x-class="m-0 text-lg-36px" uno-text="32px">
        {content.title}
      </h1>
      <p x-class="mt-5px mb-40px" uno-text="$Text 20px">
        {content.subtitle}
      </p>

      <div uno-flex="~ justify-space-between wrap">
        {content.data.map((item, index) => (
          <div key={item.title} x-class="relative px-8px text-center flex-1">
            <div
              x-if={index !== 0}
              x-class="absolute top-0 left-0 w-1px h-full bg-#ddd"
            />
            <div
              x-class="mb-10px md-text-16px"
              uno-text="12px $Accent"
              uno-font="semibold"
            >
              {item.title}
            </div>
            <span
              x-class="text-42px lg-text-64px"
              uno-text="$Primary"
              uno-font="semibold"
            >
              {item.stat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
