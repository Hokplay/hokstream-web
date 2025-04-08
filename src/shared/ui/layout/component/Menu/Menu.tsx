import { RoutePath } from '@/ui/route/RoutePath.ts';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n/hook/useTranslation.ts';

import './Menu.scss';

function Menu() {
  const { t } = useTranslation();

  const menuList = [
    {
      to: RoutePath.Intro,
      label: t('menu.intro')
    },
    {
      to: RoutePath.Cases,
      label: t('menu.cases')
    },
    {
      to: RoutePath.Features,
      label: t('menu.features')
    },
    {
      to: RoutePath.About,
      label: t('menu.aboutUs')
    }
  ];

  return (
    <nav uno-flex="~ gap-25px">
      {menuList.map(menu => (
        <Link key={menu.to} to={menu.to} x-class="menu-item">
          {menu.label}
        </Link>
      ))}
    </nav>
  );
}

export default Menu;
