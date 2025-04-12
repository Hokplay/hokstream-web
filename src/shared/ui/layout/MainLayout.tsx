import { Outlet } from 'react-router-dom';
import Header from './component/Header/Header.tsx';
import Footer from './component/Footer/Footer.tsx';
import ScrollToTop from '@/shared/ui/layout/component/ScrollToTop/ScrollToTop.tsx';

function MainLayout() {
  return (
    <div x-class="bg-#F2F2F2">
      <ScrollToTop />
      <Header />
      <main x-class="pt-80px">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
