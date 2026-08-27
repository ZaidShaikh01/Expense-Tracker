type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='w-40 h-10 flex items-center cursor-pointer justify-center hover:bg-primary-hover bg-primary rounded-xl px-5 py-2.5'
    >
      <p className='text-white uppercase'>{text}</p>
    </button>
  );
};

export default Button;
