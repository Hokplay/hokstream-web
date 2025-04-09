import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import Icon from '@/shared/ui/component/Icon/Icon.tsx';
import Affix from '@/shared/ui/component/Affix/Affix.tsx';

function BackNavigation() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Affix offsetTop={80}>
      <div
        uno-flex="~ items-center"
        x-class="py-20px cursor-pointer bg-$Base"
        onClick={() => navigate(-1)}
      >
        <Icon name="LeftArrow" />
        <span uno-text="$Primary">{t('back')}</span>
      </div>
    </Affix>
  );
}

export default BackNavigation;
