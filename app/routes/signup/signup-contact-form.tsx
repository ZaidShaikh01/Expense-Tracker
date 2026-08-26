import { FaEnvelope, FaRegUser } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import Button from '~/components/button';
import InputField from '~/components/InputField';

const SignUpForm = () => {
  return (
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
      <form className='flex flex-col items-center gap-5'>
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
            className='w-full autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] 
         autofill:[-webkit-text-fill-color:theme(colors.gray.900)] outline-none text-black bg-transparent'
          />
          {/* right text */}
        </div>
        {/* Email */}
        <div className='flex px-4 text-gray-400 items-center w-80 h-12.5 rounded border border-stroke shadow'>
          {/* Left Logo */}
          <div className='mr-3'>
            <FaEnvelope />
          </div>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            className='w-full autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] 
         autofill:[-webkit-text-fill-color:theme(colors.gray.900)] outline-none text-black bg-transparent'
          />
          {/* right text */}
        </div>
        {/* Password */}
        <InputField
          type='password'
          name='password'
          placeholder='Password'
          leftIcon={<IoMdLock />}
          rightIcon={<IoEyeOutline />}
        />
        {/* Confirm Password */}
        <InputField
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          leftIcon={<IoMdLock />}
          rightIcon={<IoEyeOutline />}
        />

        <Button text='Sign Up'></Button>
      </form>
    </div>
  );
};

export default SignUpForm;
