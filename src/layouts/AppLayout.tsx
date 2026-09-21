import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router';

const AppLayout = () => {
   return (
      <>
         <Header />
         <div>
            <Outlet />
         </div>
         <Footer />
      </>
   );
};

export default AppLayout;
