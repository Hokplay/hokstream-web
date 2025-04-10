import { useState } from 'react';
import { Drawer, Menu } from 'antd';
import type { MenuProps } from 'antd';
import Icon from '@/shared/ui/component/Icon/Icon.tsx';
import { useNavigate, useLocation } from 'react-router-dom';

interface BurgerMenuProps {
  menuList: MenuProps['items'];
}

function BurgerMenu({ menuList, ...props }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div {...props}>
      <div onClick={() => setOpen(() => !open)}>
        <Icon name="BurgerMenu" />
      </div>
      <Drawer
        title="Menu"
        placement="right"
        headerStyle={{ display: 'none' }}
        contentWrapperStyle={{ width: '220px' }}
        bodyStyle={{ padding: 0 }}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        destroyOnClose
      >
        <Menu
          mode="inline"
          items={menuList}
          x-class="h-full"
          onClick={item => navigate(item.key)}
          onSelect={() => setOpen(false)}
          selectedKeys={[location.pathname]}
        />
      </Drawer>
    </div>
  );
}

export default BurgerMenu;
