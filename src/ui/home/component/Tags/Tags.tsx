import type { Tag } from '@/ui/home/translation/HomeTranslation.ts';

interface TagsProps {
  data: Tag[];
}

function Tags({ data }: TagsProps) {
  return (
    <div uno-flex="~ gap-5px wrap" x-class="py-20px">
      {data.map(tag => (
        <span
          key={tag.label}
          uno-border="1px solid #595DA7 rounded-20px"
          uno-text="12px #595DA7"
          x-class="leading-17px px-4px py-2px truncate"
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
}

export default Tags;
