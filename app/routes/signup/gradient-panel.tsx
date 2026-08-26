import Button from '~/components/button';

const GradientPanel = () => {
  return (
    <div className='w-1/3 h-full bg-linear-to-br from-[#4DD0B1] to-[#185A4D] rounded-tl-2xl rounded-bl-2xl'>
      {/* Inside container */}
      <div className='h-2/3   flex flex-col justify-between py-10 items-center'>
        {/* Logo container */}
        <div className='w-1/3'>
          <img src='/SVG/Logo_2.svg' alt='logo_svg' className='max-w-full' />
        </div>
        {/* Welcome back container */}
        <div className='flex flex-col items-center  gap-5'>
          {/* Titile on left */}
          <h1 className='text-white text-4xl font-bold'>Welcome Back!</h1>
          {/* Paragraph */}
          <p className='text-gray-200 text-sm'>
            Log in to manage your finances.
          </p>
          {/* Sign in button */}
          <Button text='sign in' />
        </div>
      </div>
    </div>
  );
};

export default GradientPanel;
