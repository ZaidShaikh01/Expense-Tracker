import { useState } from 'react';
import { FaEnvelope, FaRegUser } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import Button from '~/components/Button';
import InputField from '~/components/InputField';

const LoginForm = () => {
  // Some states for showing the password feilds
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className='w-2/3 h-full flex flex-col gap-5 justify-center items-center bg-white rounded-tl-2xl rounded-bl-2xl'>
      {/* Welcome back text */}
      <h1 className='font-bold text-4xl'>Sign in to FinTrack</h1>
      {/* Google Icon */}
      <div className='w-9'>
        <img src='/images/Google.png' alt='google-icon' />
      </div>

      <p className='text-sm text-gray-400'>or use your account</p>

      {/* Form fields with buttons */}
      <form className='flex flex-col items-center gap-5'>
        {/* Email */}
        <InputField
          type='email'
          name='email'
          placeholder='Email'
          leftIcon={<FaEnvelope />}
        />

        {/* Password */}
        <InputField
          type={showPassword ? 'password' : 'text'}
          name='password'
          placeholder='Password'
          leftIcon={<IoMdLock />}
          rightIcon={showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
          setShow={setShowPassword}
        />
        <p className='text-sm text-light'>Forgot your password?</p>

        <Button text='Sign In'></Button>
      </form>
    </div>
  );
};

export default LoginForm;
