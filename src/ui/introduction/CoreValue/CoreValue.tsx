import { data } from './data.ts';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';

function CoreValue() {
  const { locale } = useTranslation();

  return (
    <section>
      <h2 uno-text="36px">{data.title[locale]}</h2>
      <div uno-flex="~ gap-24px">
        {data.itemList.map(item => (
          <div key={item.id}>
            <div
              x-class="w-410px aspect-410/280 overflow-hidden"
              uno-border="rounded-20px"
            >
              <img
                x-class="w-full h-full"
                src={item.image}
                alt={item.description[locale]}
              />
            </div>
            <p
              x-class="mt-10px"
              uno-text="$Primary 24px center"
              uno-font="bold"
            >
              {item.description[locale]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreValue;
