import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { IoMdLock } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';

type InputFieldProps = {
  leftIcon: ReactNode;
  type: string;
  name: string;
  placeholder: string;
  rightIcon?: ReactNode;
};

const InputField = ({
  leftIcon,
  type,
  name,
  placeholder,
  rightIcon,
}: InputFieldProps) => {
  return (
    <div className='flex px-4 text-gray-400 justify-between items-center w-80 h-12.5 rounded border border-stroke shadow'>
      {/* Left Logo */}
      <div className='flex items-center'>
        <div className='mr-3'>{leftIcon}</div>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className='w-full autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] 
             autofill:[-webkit-text-fill-color:theme(--color-gray-900)] outline-none text-black bg-transparent'
        />
      </div>
      {/* right text */}
      {rightIcon && (
        <button
          className='cursor-pointer'
          onClick={(e) => {
            e.preventDefault();
            console.log('Clicked Me!');
          }}
        >
          {rightIcon}
        </button>
      )}
    </div>
  );
};

export default InputField;
