import { Outlet } from 'react-router';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const LayoutPage = () => {
  return (
    <div className='flex flex-col justify-between text-black bg-background h-screen overflow-y-scroll'>
      {/* Header Component */}
      <Header />
      <div className='w-full flex-1 flex flex-col gap-10 py-10 px-40'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPage;
