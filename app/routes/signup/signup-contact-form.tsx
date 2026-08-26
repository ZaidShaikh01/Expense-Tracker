import { useState } from 'react';
import { FaEnvelope, FaRegUser } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import Button from '~/components/button';
import InputField from '~/components/InputField';

const SignUpForm = () => {
  // Some states for showing the password feilds
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
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
        <InputField
          type='text'
          name='name'
          placeholder='Name'
          leftIcon={<FaRegUser />}
        />
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
        {/* Confirm Password */}
        <InputField
          type={showConfirmPassword ? 'password' : 'text'}
          name='confirmPassword'
          placeholder='Confirm Password'
          setShow={setShowConfirmPassword}
          leftIcon={<IoMdLock />}
          rightIcon={
            showConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />
          }
        />

        <Button text='Sign Up'></Button>
      </form>
    </div>
  );
};

export default SignUpForm;
