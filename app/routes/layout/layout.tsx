import PillNav from '~/components/Ui/PillNav';

const LayoutPage = () => {
  return (
    <div className='flex flex-col justify-between text-black bg-background h-screen'>
      <header className='w-full py-9 px-30 border-b border-b-stroke'>
        <div className='flex  items-center w-full'>
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
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' },
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
        </div>

        {/* Navbar actions */}
        <div>
          
        </div>
        {/* Profile tag */}
      </header>
      <div className='w-full bg-black flex-1'>Main content goes here</div>
      <footer className='w-full border-t border-t-stroke'>footer</footer>
    </div>
  );
};

export default LayoutPage;
