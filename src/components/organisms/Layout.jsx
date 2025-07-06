import { Outlet } from 'react-router-dom';
import Navigation from '@/components/molecules/Navigation';
import Footer from '@/components/molecules/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;