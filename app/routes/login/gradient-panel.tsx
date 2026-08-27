import Button from '~/components/button';

const GradientPanel = () => {
  return (
    <div className='w-1/3 h-full bg-linear-to-br from-[#4DD0B1] to-[#185A4D] rounded-tr-2xl rounded-br-2xl'>
      {/* Inside container */}
      <div className='h-2/3   flex flex-col justify-between py-10 items-center'>
        {/* Logo container */}
        <div className='w-1/3'>
          <img src='/SVG/Logo_2.svg' alt='logo_svg' className='max-w-full' />
        </div>
        {/* Welcome back container */}
        <div className='w-3/4 flex flex-col items-center  gap-5'>
          {/* Titile on left */}
          <h1 className='text-white text-4xl font-bold'>Hello, Friend!</h1>
          {/* Paragraph */}
          <p className='text-gray-200  flex flex-col items-center text-sm'>
            <div>Enter your personal details and start  </div>
            <div>journey with us</div>
          </p>
          {/* Sign in button */}
          <Button text='sign up' />
        </div>
      </div>
    </div>
  );
};

export default GradientPanel;
