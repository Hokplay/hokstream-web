import { useTranslation } from '@/i18n/hook/useTranslation.ts';

const tagList = [
  'streaming',
  'aiAssist',
  'sports',
  'community',
  'decentralized',
  'media',
  'videoEditing',
  'messProduction'
] as const;

const translations = {
  'zh-TW': {
    streaming: '串流媒體',
    aiAssist: 'AI 輔助',
    sports: '體育',
    community: '社群',
    decentralized: '去中心化',
    media: '媒體',
    videoEditing: '影片編輯',
    messProduction: '量產'
  },
  'en-US': {
    streaming: 'Streaming',
    aiAssist: 'AI Assist',
    sports: 'Sports',
    community: 'Community',
    decentralized: 'Decentralized',
    media: 'Media',
    videoEditing: 'Video Editing',
    messProduction: 'Mass Production'
  }
};

function Tags() {
  const { locale } = useTranslation();
  const t = translations[locale];

  return (
    <div uno-flex="~ gap-5px wrap" x-class="py-20px">
      {tagList.map(tagKey => (
        <span
          key={tagKey}
          uno-border="1px solid #595DA7 rounded-20px"
          uno-text="12px #595DA7"
          x-class="h-23px px-4px py-2px truncate"
        >
          {t[tagKey]}
        </span>
      ))}
    </div>
  );
}

export default Tags;
