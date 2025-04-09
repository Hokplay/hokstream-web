import { Link } from 'react-router-dom';
import I18nSelector from '@/i18n/component/I18nSelector/I18nSelector.tsx';
import ContactUsButton from '@/shared/ui/component/ContactUsButton/ContactUsButton.tsx';
import Menu from '@/shared/ui/layout/component/Menu/Menu.tsx';
import HokStreamLogo from '@/shared/ui/layout/component/HokStreamLogo/HokStreamLogo.tsx';

function Header() {
  return (
    <header x-class="fixed top-0 w-full h-80px py-16px bg-#ffffff">
      <div uno-flex="~ justify-between" x-class="max-w-1200px mx-auto">
        <div className="logo">
          <Link to="/" x-class="block w-110px">
            <HokStreamLogo />
          </Link>
        </div>
        <div uno-flex="~ items-center gap-20px">
          <Menu />
          <I18nSelector />
          <ContactUsButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
