import { Outlet } from 'react-router-dom';
import Header from './component/Header/Header.tsx';
import Footer from './component/Footer/Footer.tsx';

function MainLayout() {
  return (
    <div>
      <Header />
      <main x-class="bg-#F2F2F2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
