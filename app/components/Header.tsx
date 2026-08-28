import { FaRegCircleUser } from "react-icons/fa6";
import PillNav from "./Ui/PillNav";

const Header = () => {
  return (
    <header className='w-full py-3 px-30 bg-white border-b border-b-stroke'>
      <div className='flex justify-between items-center w-full'>
        {/* Image container */}
        <div className='w-1/12'>
          <img
            src='/SVG/Logo.svg'
            alt='Company Logo'
            className='max-w-full object-cover'
          />
        </div>
        {/* Navigation Tabs */}
        <div>
          <PillNav
            logo={'/SVG/Logo.svg'}
            logoAlt='Company Logo'
            items={[
              { label: 'Dashboard', href: '/' },
              { label: 'Transactions', href: '/about' },
              { label: 'Budget', href: '/services' },
              { label: 'Goals', href: '/contact' },
              { label: 'Reports', href: '/contact' },
            ]}
            activeHref='/'
            className=''
            ease='power2.easeOut'
            baseColor='#daffff'
            pillColor='#00B894'
            hoveredPillTextColor='#64748B'
            pillTextColor='#fff'
            initialLoadAnimation
          />
        </div>
        {/* Navbar actions */}
        <div className='w-10'>
          {/* Profile tag */}
          <FaRegCircleUser className='w-full text-3xl text-gray-400' />
        </div>
      </div>
    </header>
  );
};

export default Header;
