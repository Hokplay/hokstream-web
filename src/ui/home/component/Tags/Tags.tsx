import { useTranslation } from '@/i18n/hook/useTranslation.ts';

const tagKeyList = [
  'streaming',
  'aiAssist',
  'sports',
  'community',
  'decentralized',
  'media',
  'videoEditing',
  'messProduction'
];

function Tags() {
  const { t } = useTranslation();

  return (
    <div uno-flex="~ gap-5px wrap" x-class="py-20px">
      {tagKeyList.map(tagKey => (
        <span
          key={tagKey}
          uno-border="1px solid #595DA7 rounded-20px"
          uno-text="12px #595DA7"
          x-class="leading-17px px-4px py-2px truncate"
        >
          {t(`tag.${tagKey}`)}
        </span>
      ))}
    </div>
  );
}

export default Tags;
