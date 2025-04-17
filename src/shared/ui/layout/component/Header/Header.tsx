import { Link } from 'react-router-dom';
import I18nSelector from '@/i18n/component/I18nSelector/I18nSelector.tsx';
import ContactUsLink from '@/shared/ui/component/ContactUsButton/ContactUsLink.tsx';
import Menu from '@/shared/ui/layout/component/Menu/Menu.tsx';
import HokStreamLogo from '@/shared/ui/layout/component/HokStreamLogo/HokStreamLogo.tsx';
import BurgerMenu from '@/shared/ui/layout/component/BurgerMenu/BurgerMenu.tsx';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';
import { navMenuConfig } from '@/config/navMenuConfig.ts';

function Header() {
  const { t } = useTranslation();
  const menuList = navMenuConfig.map(item => ({
    to: item.navigateTo,
    label: t(item.i18nKey)
  }));

  const burgerMenuList = navMenuConfig.map(item => ({
    key: item.navigateTo,
    label: t(item.i18nKey)
  }));

  return (
    <header x-class="px-10px fixed top-0 w-full bg-#ffffff z-60">
      <div uno-flex="~ justify-between" x-class="h-80px max-w-1280px mx-auto">
        <Link to="/" x-class="block w-110px">
          <HokStreamLogo />
        </Link>
        <div uno-flex="~ items-center gap-20px">
          <Menu menuList={menuList} x-class="hidden lg-block" />
          <I18nSelector />
          <ContactUsLink x-class="hidden lg-block" />
          <BurgerMenu menuList={burgerMenuList} x-class="block lg-hidden" />
        </div>
      </div>
    </header>
  );
}

export default Header;
