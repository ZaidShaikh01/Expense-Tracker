const SignUp = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-background1 text-text w-full h-screen'>
      {/* Card container */}
      <div className='w-2/3 h-4/5 flex rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.3)]'>
        {/* Left container */}
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
              {/* Submit button */}
              <button className='w-40 h-10 flex items-center cursor-pointer justify-center hover:bg-primary-hover bg-primary rounded-xl px-5 py-2.5'>
                <p className='text-white uppercase'>Sign In</p>
              </button>
            </div>
          </div>
        </div>
        {/* Right container */}
        <div className='w-2/3 h-full bg-white rounded-tr-2xl rounded-br-2xl '></div>
      </div>
    </div>
  );
};

export default SignUp;
