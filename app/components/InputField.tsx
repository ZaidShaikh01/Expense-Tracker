import type { ReactNode } from 'react';

type InputFieldProps = {
  leftIcon: ReactNode;
  type: string;
  name: string;
  placeholder: string;
  rightIcon?: ReactNode;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
};

const InputField = ({
  leftIcon,
  type,
  name,
  placeholder,
  rightIcon,
  setShow,
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
            setShow && setShow((prev) => !prev);
          }}
        >
          {rightIcon}
        </button>
      )}
    </div>
  );
};

export default InputField;
