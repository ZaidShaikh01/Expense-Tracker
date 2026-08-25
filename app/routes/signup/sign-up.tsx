import { FaRegUser, FaUser } from 'react-icons/fa';
import Button from '~/components/button';

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
              <img
                src='/SVG/Logo_2.svg'
                alt='logo_svg'
                className='max-w-full'
              />
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
        {/* Right container */}
        <div className='w-2/3 h-full flex flex-col gap-5 justify-center items-center bg-white rounded-tr-2xl rounded-br-2xl'>
          {/* Welcome back text */}
          <h1 className='font-bold text-4xl'>Create Account</h1>
          {/* Google Icon */}
          <div className='w-9'>
            <img src='/images/Google.png' alt='google-icon' />
          </div>

          <p className='text-sm text-gray-400'>
            or use your email for registration
          </p>
          {/* Form fields with buttons */}
          <form>
            {/* Name */}
            <div className='flex px-4 text-gray-400 items-center w-80 h-12.5 rounded border border-stroke shadow'>
              {/* Left Logo */}
              <div className='mr-3'>
                <FaRegUser />
              </div>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                className='w-full outline-none text-black bg-transparent'
              />
              {/* right text */}
            </div>
            {/* Email */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
