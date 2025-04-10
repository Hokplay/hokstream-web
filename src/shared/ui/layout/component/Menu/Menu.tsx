import { Link, useLocation } from 'react-router-dom';

import './Menu.scss';

type MenuItem = {
  to: string;
  label: string;
};

interface MenuProps {
  menuList: MenuItem[];
}

function Menu({ menuList, ...props }: MenuProps) {
  const location = useLocation();

  return (
    <nav uno-flex="~" {...props}>
      {menuList.map(menu => (
        <Link
          key={menu.to}
          to={menu.to}
          x-class={[
            'menu-item',
            {
              highlight: location.pathname === menu.to
            }
          ]}
        >
          {menu.label}
        </Link>
      ))}
    </nav>
  );
}

export default Menu;
