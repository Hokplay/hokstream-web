import { useTranslation } from '@/i18n/hook/useTranslation.ts';

const translations = {
  'zh-TW': {
    title: '我們是誰?'
  },
  'en-US': {
    title: 'WHAT ARE WE?'
  }
};

function Banner() {
  const { locale } = useTranslation();
  const t = translations[locale];

  return (
    <section x-class="py-30px md-flex-row" uno-flex="~ col justify-between">
      <h2 x-class="text-50px md-text-60px lg-text-96px">{t.title}</h2>
      <div x-class="w-full md-w-65% aspect-845/644 rounded-20px overflow-hidden">
        <img
          x-class="w-full h-full"
          src="/images/introduction/Introduction_Hero_Placeholder_Video.png"
          alt="Introduction_Hero_Placeholder_Video"
        />
      </div>
    </section>
  );
}

export default Banner;
